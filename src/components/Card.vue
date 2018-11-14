
    <template>
        <div class="card" :class="etat" @click="$emit('retournerCard', id)">
          <div class="symbol" v-if="etat!='hidden'">
            {{this.valeur}}
          </div>
           <div class="symbol" v-else>
            ❓
          </div>
      </div>
    </template>
<script>

export default {
  name: 'Card',
  data () {
    return {
      id: this.idCard
    }
  },
  props: {
    valeur: String,
    idCard: Number,
    etat: String
  }
}
</script>

<style scoped>

.card {
  border: 0.09em solid silver;
  cursor: default;
  border-radius: 10px;
  height: 110px;
  width: 80px;
  font-size: 2em;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 4%;
  padding: auto;
  cursor: pointer;
}

.visible, .justMatched {
  cursor: not-allowed;
}

.hidden {
  background: silver;
}

.justMatched, .justMismatched {
  border: 0.1em solid green;
  border-radius: 10px;

}
.justMismatched {
  border-color: red;
  border-radius: 10px;
}

.symbol {
  margin: auto;
}
</style>
