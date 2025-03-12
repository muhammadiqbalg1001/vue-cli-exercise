<template>
  <div>
    <model-cars :cars="cars"></model-cars>
  </div>
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
  methods: {},
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
