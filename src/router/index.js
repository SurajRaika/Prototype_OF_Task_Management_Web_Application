import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias:'/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Todo',
      name: 'Todo',
      component: ()=>import('../views/Todo.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: ()=>import('../views/categories.vue')
    },
    {
      path: '/insights',
      name: 'insights',
      component: ()=>import('../views/insights.vue')
    },

  ]
})

export default router
