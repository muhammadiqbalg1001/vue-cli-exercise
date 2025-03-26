<template>
  <!-- <h3 v-custDir></h3> -->
  <h3 v-custDir.blue.big="valDirecive"></h3>
  <!-- <h3 v-custDir.red.big="valDirecive"></h3> -->

  <button @click="this.valDirecive = 'Text has been changed'">Click to change</button>
</template>

<script>
export default {
  data() {
    return {
      valDirecive: 'text from data',
    }
  },
}
</script>
