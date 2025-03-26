<template>
  <!-- <h3 v-custDir></h3> -->
  <h3 v-custDir.blue.small="valDirecive"></h3>
  <h3 v-custDir.red.big="valDirecive"></h3>
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
