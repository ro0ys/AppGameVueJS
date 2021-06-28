<template>
  <div class="row">
      <Touche class="col-md-1"
              @clickTouche="$emit('clickTouche', letter)" v-for="(letter, index) in alpha"
              :letter="letter" :usedLetters="usedLetters" :key="index"/>
  </div>
</template>

<script>
import Touche from './Touche'

const ALPHABET = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n']

export default {
  name: 'Clavier',
  components: {Touche},
  data: function () {
    return {
      alpha: ALPHABET.map((letter) => letter.toUpperCase())
    }
  },
  props: {
    usedLetters: Array
  }
}

</script>

<style scoped>

</style>
