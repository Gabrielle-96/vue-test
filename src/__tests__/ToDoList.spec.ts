import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ToDoList from '../components/ToDoList.vue'

describe('ToDoList.vue', () => {
 it('label está associada ao input', () => {
  const wrapper = mount(ToDoList)
  const label = wrapper.find('label[for="todo-input"]')
  expect(label.exists()).toBe(true)
  expect(wrapper.find('#todo-input').exists()).toBe(true)
 })

 it('renderiza o título', () => {
  const wrapper = mount(ToDoList)
  expect(wrapper.find('.todo-title').text()).toBe('Lista de Tarefas')
 })

 it('renderiza lista vazia inicialmente', () => {
  const wrapper = mount(ToDoList)
  expect(wrapper.findAll('.todo-item')).toHaveLength(0)
 })

 it('adiciona uma tarefa', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  await input.setValue('Nova tarefa')
  await wrapper.find('form').trigger('submit.prevent')
  expect(wrapper.findAll('.todo-item')).toHaveLength(1)
  expect(wrapper.find('.todo-text').text()).toBe('Nova tarefa')
 })

 it('input recebe foco após adicionar tarefa', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  const focusSpy = vi.spyOn(input.element, 'focus')
  await input.setValue('Foco')
  await wrapper.find('form').trigger('submit.prevent')
  expect(focusSpy).toHaveBeenCalled()
 })

 it('adiciona tarefa com texto longo', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  const longText = 'a'.repeat(200)
  await input.setValue(longText)
  await wrapper.find('form').trigger('submit.prevent')
  expect(wrapper.find('.todo-text').text()).toBe(longText)
 })

 it('adiciona múltiplas tarefas', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  await input.setValue('Tarefa 1')
  await wrapper.find('form').trigger('submit.prevent')
  await input.setValue('Tarefa 2')
  await wrapper.find('form').trigger('submit.prevent')
  expect(wrapper.findAll('.todo-item')).toHaveLength(2)
 })

 it('limpa o input após adicionar tarefa', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  await input.setValue('Nova tarefa')
  await wrapper.find('form').trigger('submit.prevent')
  expect(input.element.value).toBe('')
 })

 it('não adiciona tarefa vazia', async () => {
  const wrapper = mount(ToDoList)
  await wrapper.find('form').trigger('submit.prevent')
  expect(wrapper.findAll('.todo-item')).toHaveLength(0)
 })

 it('não adiciona tarefa com apenas espaços', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  await input.setValue('   ')
  await wrapper.find('form').trigger('submit.prevent')
  expect(wrapper.findAll('.todo-item')).toHaveLength(0)
 })

 it('marca tarefa como concluída', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  await input.setValue('Tarefa')
  await wrapper.find('form').trigger('submit.prevent')
  const checkbox = wrapper.find('input[type="checkbox"]')
  await checkbox.setValue(true)
  expect(wrapper.find('.todo-item').classes()).toContain('completed')
 })

 it('remove uma tarefa', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  await input.setValue('Tarefa')
  await wrapper.find('form').trigger('submit.prevent')
  await wrapper.find('.todo-remove-btn').trigger('click')
  expect(wrapper.findAll('.todo-item')).toHaveLength(0)
 })

 it('alterna o status de concluído', async () => {
  const wrapper = mount(ToDoList)
  const input = wrapper.find('input[type="text"]')
  await input.setValue('Tarefa')
  await wrapper.find('form').trigger('submit.prevent')
  const checkbox = wrapper.find('input[type="checkbox"]')
  await checkbox.setValue(true)
  expect(wrapper.find('.todo-item').classes()).toContain('completed')
  await checkbox.setValue(false)
  expect(wrapper.find('.todo-item').classes()).not.toContain('completed')
 })
})
