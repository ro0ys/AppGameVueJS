<template>
  <div class="container">
    <br />{{ joueurCourant.nom }}, à toi de jouer !
    <div :class="joueurCourant.couleur">
      <mot :mot="motCode" :usedLetters="usedLetters" />
      <span>Tentatives restantes: {{ joueurCourant.nbTentativeLeft }}</span>
    </div>
    <clavier @clickTouche="clickTouche" :usedLetters="usedLetters"/>
    <br><router-link :to="{ name: 'Accueil' }" active-class="active">Retour Accueil</router-link>
  </div>
</template>

<script>

import Clavier from './Clavier.vue'
import Mot from './Mot.vue'

const MOTS = ['Je veux bien la note maximale', 'Bon courage', 'Sois gentil', 'Hello', 'Anticonstitutionnellement',
  'Bonjour', 'Le jeu du pendu', 'France', 'Nounours', 'Champion', 'Amour', 'Force et honneur', 'Bravo']

const JOUEURS = [{nom: 'Joueur 1 🤪', couleur: 'jaune', nbTentativeLeft: 6},
  {nom: 'Joueur 2 🙍', couleur: 'rose', nbTentativeLeft: 6}]

export default {
  name: 'PenduGame',
  data: function () {
    return {
      motCode: MOTS[Math.floor(Math.random() * MOTS.length)].toUpperCase(),
      usedLetters: [],
      joueurCourant: JOUEURS[Math.floor(Math.random() * JOUEURS.length)]
    }
  },
  components: { Clavier, Mot },
  methods: {
    clickTouche: function (letter) {
      if (!this.motCode.includes(letter) && !this.usedLetters.includes(letter)) {
        this.usedLetters.push(letter)
        this.joueurCourant.nbTentativeLeft--
        this.joueurCourant = this.joueurCourant === JOUEURS[0] ? JOUEURS[1] : JOUEURS[0]
      } else if (!this.usedLetters.includes(letter)) {
        this.usedLetters.push(letter)
      }
    }
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
