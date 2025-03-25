<template>
  <div>
    <h3>
      {{ text }}
    </h3>
    <button @click="this.text = 'Changed Text'">Change Test</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Lifecycle Hook',
    }
  },
  beforeCreate() {
    console.log('1-BeforeCreate')
  },
  created() {
    console.log('1-Created')
  },
  beforeMount() {
    console.log('1-BeforeMount')
  },
  mounted() {
    console.log('1-Mount')
  },
  beforeUpdate() {
    console.log('U1-BeforeUpdate')
  },
  updated() {
    console.log('U2-Updated')
  },
  beforeUnmount() {
    console.log('D1-BeforeUnmount')
  },
  unmounted() {
    console.log('D2-Unmounted')
  },
}
</script>
