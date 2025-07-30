<template>
  <div class="quiz-game">
    <h2>Mini Quiz</h2>
    <div class="questions" v-if="current < questionsRef.length">
      <p>
        <strong>Pergunta {{ current + 1 }}:</strong> {{ questionsRef[current].question }}
      </p>
      <section class="alternatives">
        <div v-for="(alt, idx) in questionsRef[current].alternatives" :key="idx">
          <button :disabled="answered" @click="answer(idx)" :class="{
            correct: answered && idx === questionsRef[current].answer,
            wrong: answered && idx === selected && idx !== questionsRef[current].answer
          }">
            {{ alt }}
          </button>
        </div>
      </section>
      <p v-if="answered">
        <span v-if="selected === questionsRef[current].answer">Correto!</span>
        <span v-else style="color: red">Errado! Resposta: {{
          questionsRef[current].alternatives[questionsRef[current].answer] }}</span>
      </p>
      <p v-if="answered"><button @click="next">Próxima</button></p>
    </div>
    <div class="end-quiz-game" v-else>
      <h4>Fim do Quiz!</h4>
      <p>Você acertou {{ score }} de {{ questionsRef.length }} perguntas.</p>
      <button @click="restart">Reiniciar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose } from 'vue'
import { questions as defaultQuestions, type Question } from './questions'

const props = defineProps<{
  questions?: Question[]
}>()

function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function getRandomQuestions() {
  return shuffle(defaultQuestions).slice(0, 10)
}

const questionsRef = ref<Question[]>(
  props.questions ? props.questions.slice(0, 10) : getRandomQuestions()
)
const current = ref(0)
const score = ref(0)
const answered = ref(false)
const selected = ref<number | null>(null)

function answer(idx: number) {
  if (answered.value) return
  selected.value = idx
  answered.value = true
  if (idx === questionsRef.value[current.value].answer) {
    score.value++
  }
}

function next() {
  current.value++
  answered.value = false
  selected.value = null
}

function restart() {
  if (props.questions) {
    questionsRef.value = props.questions.slice(0, 10)
  } else {
    questionsRef.value = getRandomQuestions()
  }
  current.value = 0
  score.value = 0
  answered.value = false
  selected.value = null
}

</script>

<style scoped>
.quiz-game {
  position: relative;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  background: transparent;
  color: #fff;
}

.quiz-game h3 {
  margin: 0;
  padding: 10px;
  text-align: center;
}

.quiz-game button {
  margin: 15px 0;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #01aaddd8;
  color: #fff;
  font-size: 1rem;
  transition: background 0.2s;
}

.quiz-game button.correct {
  background: #2ecc40;
}

.quiz-game button.wrong {
  background: #e74c3c;
}

.quiz-game button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alternatives {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.questions {
  font-size: 15px;
}

.end-quiz-game {
  margin: 15px;
}
</style>
