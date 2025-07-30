import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
 history: createWebHistory(),
 routes: [{ path: '/', component: { template: '<div>Home</div>' } }]
})

describe('App.vue', () => {
 it('renderiza o RouterView', async () => {
  router.push('/')
  await router.isReady()
  const wrapper = mount(App, {
   global: { plugins: [router] }
  })
  expect(wrapper.html()).toContain('Home')
 })
})
