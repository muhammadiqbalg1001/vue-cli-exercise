<template>
  <div>Apple Component</div>
</template>

<script>
export default {
  name: 'comp-apple',
  mounted() {
    console.log('apple mounted')
  },
  activated() {
    console.log('apple activated')
  },
  deactivated() {
    console.log('apple deactivated')
  },
  unmounted() {
    console.log('apple unmounted')
  },
}
</script>
