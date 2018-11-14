import Vue from 'vue'
import Router from 'vue-router'
import PenduGame from '@/components/PenduGame'
import MemoryGame from '@/components/MemoryGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PenduGame',
      component: PenduGame
    },
    {
      path: '/Memory',
      name: 'MemoryGame',
      component: MemoryGame
    }
  ]
})
