import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeView.vue'

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: '/',
   name: 'home',
   component: Home
  }
 ]
})

export default router
