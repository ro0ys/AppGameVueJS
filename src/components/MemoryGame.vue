<template>
  <div class="container">
    <div class="row">
      <span class="col-md-1" v-for="(card, index) in cards" :key="index">
        <card @retournerCard="retournerCard" :valeur="card" :idCard="index" :etat="getFeedbackForCard(index)" />
      </span>
    </div>
        <scoreBoard />
    <router-link :to="{ name: 'Accueil' }" active-class="active">Retour Accueil</router-link><br>
</div>
</template>

<script>

import Card from './Card.vue'
import ScoreBoard from './ScoreBoard.vue'
import shuffle from 'lodash.shuffle'
import { mapGetters, mapMutations } from 'vuex'

const SYMBOLS = '🦖🥠🤫🎋🧠🐍🦔🤟🐝🍮🎹🏀🍷🍪💩🦗🗽🍫🐸🥩🍳🍆🍕🌊🐧🎮🐔🥪🧙🍗🐌🏈🍝😀🐾🍄😷🎉🧝🍩🍀🧞🦒🚽🥦🙉🐰🎺🐱🦄🌍🌛🦓🎨🌞🎬🎃🍭🥡💫🍇🍌🥧🙊🍵🍓🍐🍍🍰🍜🍟🍿🍔😜'

export default {
  name: 'MemoryGame',
  data: function () {
    return {
      cards: this.shuffleCard()
    }
  },
  components: { Card, ScoreBoard },
  methods: {
    shuffleCard: function () {
      const result = []
      const size = 48
      const candidates = shuffle(SYMBOLS)
      while (result.length < size) {
        const card = candidates.pop()
        result.push(card, card)
      }
      return shuffle(result)
    },
    ...mapMutations([
      'incrementGuesses',
      'addCardToCurrentPair',
      'addIndexToMatchedCardIndexes',
      'resetCurrentPair',
      'resetStoreMemory'
    ]),
    retournerCard: function (idCard) {
      if (this.getMatchedCardIndices.length === this.cards.length || this.getMatchedCardIndices.includes(idCard) ||
        this.selectCardFromCurrentPair(0) === idCard || this.getCurrentPair.length === 2) {
        return
      }
      if (this.getCurrentPair.length === 0) {
        this.addCardToCurrentPair(idCard)
        return
      }
      this.verifierCoupleCard(idCard)
    },
    verifierCoupleCard: function (idCard) {
      this.addCardToCurrentPair(idCard)
      if (this.cards[this.selectCardFromCurrentPair(0)] === this.cards[this.selectCardFromCurrentPair(1)]) {
        this.addIndexToMatchedCardIndexes(this.selectCardFromCurrentPair(0))
        this.addIndexToMatchedCardIndexes(idCard)
      } else {
        this.incrementGuesses()
      }
      setTimeout(() => this.resetCurrentPair(), 800)
    },
    getFeedbackForCard: function (index) {
      const indexMatched = this.getMatchedCardIndices.includes(index)
      if (this.getCurrentPair.length < 2) {
        return indexMatched || index === this.selectCardFromCurrentPair(0) ? 'visible' : 'hidden'
      }
      if (this.getCurrentPair.includes(index)) {
        return indexMatched ? 'justMatched' : 'justMismatched'
      }
      return indexMatched ? 'visible' : 'hidden'
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentPair',
      'getMatchedCardIndices',
      'selectCardFromCurrentPair'
    ])
  },
  destroyed: function() {
    this.resetStoreMemory()
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>