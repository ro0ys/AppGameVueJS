<template>
  <div class="mot">{{ cryptage() }}</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Mot',
  methods: {
    cryptage: function () {
      return this.getMotCode.replace(/\w/g,
        (letter) => {
          return this.getUsedLetters.includes(letter.toUpperCase()) ? letter : '_'
        })
    }
  },
  computed: {
    ...mapGetters([
      'getMotCode',
      'getUsedLetters'
    ])
  }
}
</script>

<style scoped>
.mot {
  font-size: 6em;
  letter-spacing: 7px;
  word-wrap: break-word;
}
</style>
