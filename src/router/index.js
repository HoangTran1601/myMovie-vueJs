import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DetailMovie from '@/components/DetailMovie'
import Trailer from '@/components/Trailer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/detail/:id',
      component: DetailMovie
    },
    {
      path: '/trailer/:id',
      component: Trailer
    }
  ]
})
