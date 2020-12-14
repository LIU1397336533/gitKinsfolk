import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/organization',
    name: 'Organization',
    component: () => import('@/views/Organization.vue')
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('@/views/Record.vue')
  },
  {
    path: '/locale',
    name: 'Locale',
    component: () => import('../views/Locale.vue')
  },
  {
    path: '/newMachine',
    name: 'newMachine',
    component: () => import('../views/newMachine.vue')
  },
  {
    path: '/machineType',
    name: 'machineType',
    component: () => import('../views/machineType.vue')
  },
  {
    path: '/machineName',
    name: 'machineName',
    component: () => import('../views/machineName.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
