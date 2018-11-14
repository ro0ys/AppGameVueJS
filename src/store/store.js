import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guesses: 0,
    currentPair: [],
    matchedCardIndices: []
  },
  mutations: {
    incrementGuesses (state) {
      state.guesses++
    },
    addCardToCurrentPair (state, indexCard) {
      state.currentPair.push(indexCard)
    },
    addIndexToMatchedCardIndexes (state, indexCard) {
      state.matchedCardIndices.push(indexCard)
    },
    resetCurrentPair (state) {
      state.currentPair = []
    },
    resetStoreMemory (state) {
      state.currentPair = []
      state.guesses = 0
      state.matchedCardIndices = []
    }
  },
  getters: {
    getCurrentPair: state => {
      return state.currentPair
    },
    getMatchedCardIndices: state => {
      return state.matchedCardIndices
    },
    selectCardFromCurrentPair: state => id => {
      return state.currentPair[id]
    },
    getNbGuesses: state => {
      return state.guesses
    }
  },
  strict: true
})
