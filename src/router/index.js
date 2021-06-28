import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Whatsapp from '@/views/Whatsapp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/whatsapp',
    name: 'Whatsapp',
    component: Whatsapp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
