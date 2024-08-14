import { createRouter, createWebHistory } from 'vue-router'

const routes: any[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue'),
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
  })
  
  export default router