import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false
import 'normalize.css'
import './assets/style.scss'

import DefaultLayout from './layouts/Site.vue'
Vue.component('sitelayout', DefaultLayout)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    }
  ]
})



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
