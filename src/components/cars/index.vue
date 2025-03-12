<template>
  <div>
    <list-car :cars="cars"></list-car>
  </div>
</template>

<script>
import ListCar from './list.vue'

export default {
  components: {
    ListCar,
  },
  props: ['cars'],
}
</script>
