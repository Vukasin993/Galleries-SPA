import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../components/AllGalleries.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import MyGalleries from '../components/MyGalleries'
import CreateNewGallery from '../components/CreateNewGallery'
import Gallery from '../components/Gallery'
import Author from '../components/Author'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all-galleries',
    component: AllGalleries
  },

  {
    path: '/galleries/:id',
    name: 'gallery',
    component: Gallery
  },


  {
    path: '/authors/:id',
    name: 'authors',
    component: Author
  },
  
  {
    path: '/my-galleries',
    name: 'my-galleries',
    component: MyGalleries
  },
  {
    path: '/create',
    name: 'create-new-gallery',
    component: CreateNewGallery
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
