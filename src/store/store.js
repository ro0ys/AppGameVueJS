import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var PLAYERS = [{nom: 'Joueur 1 🤪', couleur: 'jaune', nbGuessLeft: 6},
  {nom: 'Joueur 2 🙍', couleur: 'rose', nbGuessLeft: 6}]

const MOTS = ['Je veux bien la note maximale', 'Bon courage', 'Sois gentil', 'Hello', 'Anticonstitutionnellement',
  'La routourne va tourner', 'Le jeu du pendu', 'France', 'Champion', 'Amour', 'Bravo']

export default new Vuex.Store({
  state: {
    guesses: 0,
    currentPair: [],
    matchedCardIndices: [],
    currentPlayer: PLAYERS[Math.floor(Math.random() * PLAYERS.length)],
    motCode: MOTS[Math.floor(Math.random() * MOTS.length)].toUpperCase(),
    usedLetters: []
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
    resetStore (state) {
      state.currentPair = []
      state.guesses = 0
      state.matchedCardIndices = []
      const players = PLAYERS
      players.forEach((p) => p.nbGuessLeft = 6)
      state.currentPlayer = players[Math.floor(Math.random() * players.length)]
      state.motCode = MOTS[Math.floor(Math.random() * MOTS.length)].toUpperCase()
      state.usedLetters = []
    },
    decreaseGuessLeft (state) {
      state.currentPlayer.nbGuessLeft--
    },
    toggleCurrentPlayer (state) {
      state.currentPlayer = state.currentPlayer === PLAYERS[0] ? PLAYERS[1] : PLAYERS[0]
    },
    pushLetter (state, letter) {
      state.usedLetters.push(letter)
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
    },
    getCurrentPlayer: state => {
      return state.currentPlayer
    },
    getMotCode: state => {
      return state.motCode
    },
    getUsedLetters: state => {
      return state.usedLetters
    }
  },
  strict: true
})
