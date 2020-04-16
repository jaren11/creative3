import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import History from '../views/History.vue'
import Donate from '../views/Donate.vue'
import Charity from '../views/Charity.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/charity',
    name: 'Charity',
    component: Charity
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
