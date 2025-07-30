import { mount } from '@vue/test-utils'
import MiniQuiz from '../components/MiniQuiz/MiniQuiz.vue'
import { questions } from '../components/MiniQuiz/questions'
import { describe, it, expect } from 'vitest'

const mountQuiz = () => mount(MiniQuiz, { props: { questions } })

const QUESTIONS_PER_ROUND = 10

describe('MiniQuiz.vue', () => {
 it('exibe a primeira pergunta ao iniciar', () => {
  const wrapper = mountQuiz()
  expect(wrapper.text()).toContain('Pergunta 1')
  expect(wrapper.text()).toContain(questions[0].question)
 })

 it('exibe alternativas lado a lado', () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  expect(buttons.length).toBe(4)
  expect(buttons[0].text()).toBe(questions[0].alternatives[0])
  expect(buttons[1].text()).toBe(questions[0].alternatives[1])
  expect(buttons[2].text()).toBe(questions[0].alternatives[2])
  expect(buttons[3].text()).toBe(questions[0].alternatives[3])
 })

 it('marca resposta correta e incrementa score', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  await buttons[questions[0].answer].trigger('click')
  expect(wrapper.text()).toContain('Correto!')
  expect(wrapper.find('button.correct').exists()).toBe(true)
  expect(wrapper.vm.score).toBe(1)
 })

 it('marca resposta errada e não incrementa score', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  const wrongIdx = (questions[0].answer + 1) % 4
  await buttons[wrongIdx].trigger('click')
  expect(wrapper.text()).toContain('Errado!')
  expect(wrapper.find('button.wrong').exists()).toBe(true)
  expect(wrapper.vm.score).toBe(0)
 })

 it('avança para próxima pergunta ao clicar em "Próxima"', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  await buttons[questions[0].answer].trigger('click')
  await wrapper.find('p button').trigger('click')
  expect(wrapper.text()).toContain('Pergunta 2')
  expect(wrapper.text()).toContain(questions[1].question)
 })

 it('exibe resultado final e permite reiniciar quiz', async () => {
  const wrapper = mountQuiz()
  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
   const btns = wrapper.findAll('.alternatives button')
   await btns[questions[i].answer].trigger('click')
   if (wrapper.find('p button').exists()) {
    await wrapper.find('p button').trigger('click')
   }
  }
  expect(wrapper.text()).toContain('Fim do Quiz!')
  expect(wrapper.text()).toContain(
   `Você acertou ${QUESTIONS_PER_ROUND} de ${QUESTIONS_PER_ROUND} perguntas.`
  )
  await wrapper.find('button').trigger('click') // Reiniciar
  expect(wrapper.text()).toContain('Pergunta 1')
 })

 it('desabilita os botões após responder', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  await buttons[2].trigger('click')
  buttons.forEach((btn: { attributes: (arg0: string) => any }) => {
   expect(btn.attributes('disabled')).toBeDefined()
  })
 })

 it('exibe a resposta correta ao errar', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  const wrongIdx = (questions[0].answer + 1) % 4
  await buttons[wrongIdx].trigger('click')
  expect(wrapper.text()).toContain(
   `Errado! Resposta: ${questions[0].alternatives[questions[0].answer]}`
  )
 })

 it('não incrementa score ao errar', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  const wrongIdx = (questions[0].answer + 1) % 4
  await buttons[wrongIdx].trigger('click')
  expect(wrapper.vm.score).toBe(0)
 })

 it('permite responder apenas uma vez por pergunta', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  const wrongIdx = (questions[0].answer + 1) % 4
  await buttons[wrongIdx].trigger('click')
  await buttons[questions[0].answer].trigger('click')
  expect(wrapper.vm.selected).toBe(wrongIdx)
  expect(wrapper.vm.score).toBe(0)
 })

 it('reinicia o score ao reiniciar o quiz', async () => {
  const wrapper = mountQuiz()
  const buttons = wrapper.findAll('.alternatives button')
  await buttons[questions[0].answer].trigger('click')
  await wrapper.find('p button').trigger('click')
  for (let i = 1; i < QUESTIONS_PER_ROUND; i++) {
   const btns = wrapper.findAll('.alternatives button')
   await btns[questions[i].answer].trigger('click')
   if (wrapper.find('p button').exists()) {
    await wrapper.find('p button').trigger('click')
   }
  }
  expect(wrapper.vm.score).toBeGreaterThan(0)
  await wrapper.find('button').trigger('click') // Reiniciar
  expect(wrapper.vm.score).toBe(0)
  expect(wrapper.text()).toContain('Pergunta 1')
 })

 // ----------- TESTES ADICIONAIS -----------

 it('não mostra botão "Próxima" antes de responder', () => {
  const wrapper = mountQuiz()
  expect(wrapper.find('p button').exists()).toBe(false)
 })

 it('não permite avançar sem responder', async () => {
  const wrapper = mountQuiz()
  expect(wrapper.find('p button').exists()).toBe(false)
  const buttons = wrapper.findAll('.alternatives button')
  await buttons[questions[0].answer].trigger('click')
  expect(wrapper.find('p button').exists()).toBe(true)
 })

 it('mostra o número correto da pergunta', async () => {
  const wrapper = mountQuiz()
  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
   expect(wrapper.text()).toContain(`Pergunta ${i + 1}`)
   const btns = wrapper.findAll('.alternatives button')
   await btns[questions[i].answer].trigger('click')
   if (i < QUESTIONS_PER_ROUND - 1) await wrapper.find('p button').trigger('click')
  }
 })

 it('mostra corretamente o placar parcial', async () => {
  const wrapper = mountQuiz()
  let score = 0
  for (let i = 0; i < Math.min(5, QUESTIONS_PER_ROUND); i++) {
   const btns = wrapper.findAll('.alternatives button')
   if (i % 2 === 0) {
    await btns[questions[i].answer].trigger('click')
    score++
   } else {
    const wrongIdx = (questions[i].answer + 1) % 4
    await btns[wrongIdx].trigger('click')
   }
   if (i < Math.min(5, QUESTIONS_PER_ROUND) - 1) await wrapper.find('p button').trigger('click')
  }
  expect(wrapper.vm.score).toBe(score)
 })

 it('reinicia todas as variáveis ao reiniciar', async () => {
  const wrapper = mountQuiz()

  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
   const buttons = wrapper.findAll('.alternatives button')
   await buttons[questions[i].answer].trigger('click')
   await wrapper.find('p button').trigger('click')
  }
  expect(wrapper.text()).toContain('Fim do Quiz!')
  expect(wrapper.vm.score).toBeGreaterThan(0)
  const restartBtn = wrapper.find('button')
  await restartBtn.trigger('click')
  expect(wrapper.vm.score).toBe(0)
  expect(wrapper.vm.current).toBe(0)
  expect(wrapper.vm.answered).toBe(false)
  expect(wrapper.vm.selected).toBe(null)
  expect(wrapper.text()).toContain('Pergunta 1')
 })

 it('nunca mostra perguntas além das 10 primeiras', async () => {
  const wrapper = mountQuiz()
  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
   expect(wrapper.text()).toContain(questions[i].question)
   const btns = wrapper.findAll('.alternatives button')
   await btns[questions[i].answer].trigger('click')
   if (i < QUESTIONS_PER_ROUND - 1) await wrapper.find('p button').trigger('click')
  }

  expect(wrapper.text()).not.toContain(questions[10]?.question)
 })
})
