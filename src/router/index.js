import Vue from 'vue'
import Router from 'vue-router'
import PenduGame from '@/components/pendu/PenduGame'
import MemoryGame from '@/components/memory/MemoryGame'
import Accueil from '@/components/Accueil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Pendu',
      name: 'Pendu',
      component: PenduGame
    },
    {
      path: '/Memory',
      name: 'Memory',
      component: MemoryGame
    }
  ],
  fallback: false
})
