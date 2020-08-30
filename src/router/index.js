import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Singer from '@/components/test/singer'
import Index from '@/components/test/index'
import Newdisc from '@/components/test/newdisc'
import Rinking from '@/components/test/ranking'
import Main from '@/components/test/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/newdisc',
      name: 'Newdisc',
      component: Newdisc
    },
    {
      path: '/ranking',
      name: 'Rinking',
      component: Rinking
    }
    ,
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
