<template>
  <app-header></app-header>
  <div>
    CHILDREN
    <model-cars></model-cars>

    PARENT
    <ul>
      <li v-for="(car, index) in cars" :key="index">{{ car.Brand }} : {{ car.Model }}</li>
    </ul>
    <BUTTon @click="changeCars">Ganti Cars</BUTTon>
  </div>
  <app-footer></app-footer>
</template>

<script>
import modelCars from './components/cars/index.vue'
export default {
  components: {
    modelCars,
  },
  data() {
    return {
      cars: [
        { Model: 'Brio', Brand: 'Honda' },
        { Model: 'Agya', Brand: 'Toyota' },
        { Model: 'Ayla', Brand: 'Daihatsu' },
      ],
    }
  },
  provide() {
    return {
      cars: this.cars,
      changeCars: this.changeCars,
    }
  },
  methods: {
    changeCars() {
      this.cars[0].Brand = 'Nissan'
    },
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
</style>
