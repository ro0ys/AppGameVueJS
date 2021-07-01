<template>
  <div class="container">
      <br />{{ getCurrentPlayer.nom }}, à toi de jouer !
      <div :class="getCurrentPlayer.couleur">
        <mot />
        <span>Tentatives restantes: {{ getCurrentPlayer.nbGuessLeft }}</span>
      </div>
    <div v-show="isGameOver()">{{getCurrentPlayer.nom}} à GAGNE !!! 🎉 </div>
    <div v-show="getCurrentPlayer.nbGuessLeft === 0">
      <div>PERDU</div>
      <button type="button" @click="resetStore">Relancer ?</button>
    </div>
    <clavier v-show="getCurrentPlayer.nbGuessLeft !== 0 && !isGameOver()" @clickTouche="clickTouche"/>
    <br><router-link :to="{ name: 'Accueil' }" active-class="active">Retour Accueil</router-link>
  </div>
</template>

<script>

import Clavier from './Clavier.vue'
import Mot from './Mot.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'PenduGame',
  components: { Clavier, Mot },
  methods: {
    clickTouche: function (letter) {
      if (!this.isLetterIntoMotCode(letter) && !this.isLetterAlreadyUsed(letter)) {
        this.pushLetter(letter)
        this.decreaseGuessLeft()
        this.toggleCurrentPlayer()
      } else if (!this.isLetterAlreadyUsed(letter)) {
        this.pushLetter(letter)
      }
    },
    isLetterIntoMotCode: function (letter) {
      return this.getMotCode.includes(letter)
    },
    isLetterAlreadyUsed: function (letter) {
      return this.getUsedLetters.includes(letter)
    },
    isGameOver: function () {
      return this.getMotCode.split('').filter(l => l !== ' ').every((l) => this.getUsedLetters.includes(l))
    },
    ...mapMutations([
      'decreaseGuessLeft',
      'toggleCurrentPlayer',
      'pushLetter',
      'resetStore'
    ])
  },
  computed: {
    ...mapGetters([
      'getCurrentPlayer',
      'getMotCode',
      'getUsedLetters'
    ])
  },
  destroyed: function () {
    this.resetStore()
  }
}

</script>
<style>

.rose{
margin: 30px;
background-color: #3f4f42;
color: white;
border-radius: 5px;
border: 1em #fcc7ea solid;
min-height: 500px;
}

.jaune{
margin: 30px;
background-color: #3f4f42;
color: white;
border-radius: 5px;
border: 1em #ffbb00 solid;
min-height: 500px;
}
</style>
