<template>
  <app-header></app-header>
  <div>
    <comp-cars>
      <template v-slot:cars>
        <ul>
          <li v-for="(brand, index) in brands" :key="index">{{ brand }}</li>
        </ul>
      </template>
      <template v-slot:other>
        <h2>other slot</h2>
      </template>
      <strong>default slot</strong>
    </comp-cars>
  </div>
  <app-footer></app-footer>
</template>

<script>
import compCars from './components/cars/brand.vue'

export default {
  components: {
    compCars,
  },
  data() {
    return {
      brands: ['Honda', 'Toyota', 'Daihatsu'],
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
li {
  color: red;
}
</style>
