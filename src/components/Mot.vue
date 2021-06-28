<template>
  <div class="mot">{{cryptage(mot, usedLetters)}}</div>
</template>

<script>
export default {
  name: 'Mot',
  props: {
    mot: String,
    usedLetters: Array
  },
  methods: {
    cryptage: function (motCode, usedLetters) {
      return motCode.replace(/\w/g,
        (letter) => {
          return usedLetters.includes(letter.toUpperCase()) ? letter : '_'
        })
    }
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
