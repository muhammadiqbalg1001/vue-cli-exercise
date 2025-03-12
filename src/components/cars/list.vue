<template>
  <div>
    <ul>
      <li v-for="(car, index) in cars" :key="index">{{ car.Brand }} : {{ car.Model }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cars'],
}
</script>
