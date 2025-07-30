<template>
  <div class="todo-container">
    <h2 class="todo-title">Lista de Tarefas</h2>
    <form class="todo-form" @submit.prevent="addTodo">
      <label for="todo-input" class="visually-hidden">Nova tarefa</label>
      <input id="todo-input" ref="inputRef" v-model="input" type="text" placeholder="Digite uma nova tarefa"
        class="todo-input" autocomplete="off" />
      <button type="submit" class="todo-btn" :disabled="!input.trim()">Adicionar</button>
    </form>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="['todo-item', { completed: todo.completed }]">
        <input type="checkbox" v-model="todo.completed" class="todo-checkbox" />
        <span class="todo-text">{{ todo.text }}</span>
        <button class="todo-remove-btn" aria-label="Remover tarefa" @click="removeTodo(todo.id)">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M2 2l8 8M10 2L2 10" stroke="#fff" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const input = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

function addTodo() {
  if (input.value.trim() === '') return
  todos.value.push({
    id: Date.now(),
    text: input.value.trim(),
    completed: false
  })
  input.value = ''
  nextTick(() => inputRef.value?.focus())
}

function removeTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.todo-container {
  max-width: 400px;
  width: 100%;
  margin: 32px auto;
  border-radius: 10px;
  padding: 24px 20px 20px 20px;
  box-sizing: border-box;
}

.todo-list {
  max-height: 150px;
  overflow-y: auto;
  list-style: none;
  padding: 10px;
  margin: 0;
  scrollbar-width: thin;
  scrollbar-color: #d4c4c45d #0f74d300;
}

/* Chrome, Edge, Safari */
.todo-list::-webkit-scrollbar {
  width: 6px;
  background: #f9fafb3d;
}

.todo-list::-webkit-scrollbar-thumb {
  background: #352d2d57;
  border-radius: 4px;
}

/* Firefox */
.todo-list {
  scrollbar-width: none;
}

.todo-title {
  position: fixed;
  top: 3rem;
  left: 32%;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
}

.todo-form {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.todo-input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
  background: #f9fafb;
}

.todo-input:focus {
  outline: none;
  border-color: #cc00ff;
  background: #fff;
}

.todo-btn {
  padding: 11px 18px;
  background-color: #01aaddd8;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 1px 2px rgba(44, 62, 80, 0.4);
}

.todo-btn:hover,
.todo-btn:focus {
  background-color: #007bff;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  transition: background 0.2s;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid transparent;
  border-radius: 6px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #b0b0b0;
}

.todo-checkbox {
  margin-right: 12px;
  accent-color: #008512d5;
  width: 18px;
  height: 18px;
}

.todo-text {
  flex: 1;
  font-size: 1rem;
  color: #ffffff;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.todo-remove-btn {
  background: #fa3d0e8e;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 9px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 10px;
  transition: background 0.2s;
}

.todo-remove-btn:hover,
.todo-remove-btn:focus {
  background: #c0392b;
}
</style>
