import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../components/AllGalleries.vue'
import Login from '../components/Login'
import Register from '../components/Register'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all-galleries',
    component: AllGalleries
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
