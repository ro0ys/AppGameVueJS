import Vue from 'vue'
import App from './App'
import router from './router'
import MemoryGame from './components/MemoryGame'
import Card from './components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import store from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, MemoryGame, Card },
  template: '<App/>'
})
