<template>
    <div class="container">
        Nombre de tentative: {{this.getNbGuesses}}
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'ScoreBoard',
  computed: {
    ...mapGetters(['getNbGuesses'])
  }
}
</script>
