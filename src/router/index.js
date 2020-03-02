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
  // {
  //   path: '/login',
  //   name: 'login',
  //   props: true,
  //   component: () => import('../components/login.vue'),
  // },
  {
    path: '/intro',
    name: 'intro',
    props: true,
    component: () => import('../components/Intro.vue')
  },
  {
    path: '/selection',
    name: 'selection',
    props:true,
    component: () => import('../components/Personal-information.vue'),
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters["auth/hasPermission"]) {
    //     next('/login')
    //   } else {
    //     next()
    //   }
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// const app = new Vue({ router }).$mount('#app');
export default router
