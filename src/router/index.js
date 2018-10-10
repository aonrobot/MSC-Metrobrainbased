import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Coach from '@/components/pages/Coach'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coach',
      name: 'Coach',
      component: Coach
    }
  ]
})