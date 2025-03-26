<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <button @click="this.activeComp = 'comp-apple'">Apple</button>
      <button @click="this.activeComp = 'comp-grape'">Grape</button>

      <!-- <comp-apple v-if="activeComp === 'comp-apple'"></comp-apple>
      <comp-grape v-if="activeComp === 'comp-grape'"></comp-grape> -->

      <keep-alive include="comp-apple, comp-grape">
        <component :is="activeComp"></component>
      </keep-alive>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import compApple from './components/Fruits/apple.vue'
import compGrape from './components/Fruits/grape.vue'

export default {
  components: {
    compApple,
    compGrape,
  },
  data() {
    return {
      activeComp: 'comp-apple',
    }
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
