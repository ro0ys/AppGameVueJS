<template>
  <div class="row">
      <Touche class="col-md-1"
              @clickTouche="$emit('clickTouche', letter)" v-for="(letter, index) in alpha"
              :letter="letter" :key="index"/>
  </div>
</template>

<script>
import Touche from './Touche'

const ALPHABET = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'M', 'W', 'X', 'C', 'V', 'B', 'N']

export default {
  name: 'Clavier',
  components: {Touche},
  data: function () {
    return {
      alpha: ALPHABET
    }
  }
}

</script>

<style scoped>

</style>
