<template>
  <div @click="$emit('clickTouche', letter)"
       :class="{touche: true, used: isUsed()}">{{letter}}</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Touche',
  props: {
    letter: String
  },
  methods: {
    isUsed: function () {
      return this.getUsedLetters.includes(this.letter)
    }
  },
  computed: {
    ...mapGetters([
      'getUsedLetters'
    ])
  }
}
</script>

<style scoped>
.touche {
  cursor: pointer;
  border :0.1em solid grey;
  background-color: rgb(187, 184, 184);
  width: 4em;
  padding: 0px;
  margin: 9px;
  font-size: 1em;
  border-radius: 10px;
  height: 4em; /* hauteur du parent */
  line-height: 4em; /* hauteur de ligne (identique) */
  text-align: center;
}

.used {
  background-color: rgb(92, 91, 91);
  color: rgb(36, 35, 35);
  cursor: not-allowed;
}
</style>
