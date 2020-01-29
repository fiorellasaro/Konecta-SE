import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/LandingPage.vue') 
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../components/Intro.vue')
  },
  {
    path: '/selection',
    name: 'selection',
    component: () => import('../components/Personal-information.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
