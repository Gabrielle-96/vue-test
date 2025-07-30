import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../components/HomeView.vue'

describe('HomeView.vue', () => {
 it('renderiza título e subtítulo', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.find('.welcome-title').exists()).toBe(true)
  expect(wrapper.find('.welcome-subtitle').exists()).toBe(true)
 })

 it('renderiza o componente ToDoList', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.findComponent({ name: 'ToDoList' }).exists()).toBe(true)
 })

 it('renderiza links de stack', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.findAll('.tech-link').length).toBeGreaterThanOrEqual(2)
 })
})
