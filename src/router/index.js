import { createRouter, createWebHistory } from 'vue-router'
import PageIndex from '@/components/pageIndex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageIndex
  },
  {
    path: '/about/group',
    name: 'RoopGroup',
    component: () => import('@/components/views/About/Group.vue')
  },
  {
    path: '/about/overview',
    name: 'Overview',
    component: () => import('@/components/views/About/Overview.vue')
  },
  {
    path: '/about/our-strengths',
    name: 'OurStrengths',
    component: () => import('@/components/views/About/OurStrengths.vue')
  },
  {
    path: '/about/milestones',
    name: 'Milestones',
    component: () => import('@/components/views/About/Milestones.vue')
  },
  {
    path: '/about/accolades',
    name: 'Accolades',
    component: () => import('@/components/views/About/Accolades.vue')
  },
  {
    path: '/about/global-presence',
    name: 'GlobalPresence',
    component: () => import('@/components/views/About/GlobalPresence.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 