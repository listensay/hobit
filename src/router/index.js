import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/hobit',
    name: 'Hobit',
    component: () => import('../views/Hobit.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router