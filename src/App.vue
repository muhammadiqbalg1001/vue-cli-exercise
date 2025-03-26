<template>
  <app-header></app-header>
  <div class="container">
    <comp-directives></comp-directives>
  </div>
  <app-footer></app-footer>
</template>

<script>
import compDirectives from './components/Directives/index.vue'
export default {
  components: {
    compDirectives,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
.container {
  min-height: 85vh;
  box-sizing: border-box;
  padding: 20px;
}
li {
  color: red;
}
</style>
