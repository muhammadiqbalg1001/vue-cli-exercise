<template>
  <div>
    <ul>
      <li v-for="(car, index) in cars" :key="index">{{ car.Brand }} : {{ car.Model }}</li>
    </ul>
    <button @click="changeCars">Change Car</button>
  </div>
</template>

<script>
export default {
  inject: ['cars', 'changeCars'],
}
</script>
