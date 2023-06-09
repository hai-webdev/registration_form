import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView';
import ContentView from '@/views/ContentView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/content/:id',
    name: 'Content',
    component: ContentView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
