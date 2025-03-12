<template>
  <div class="user_profile">
    <h1>User Information</h1>
    <ul>
      <li><span>Name : </span> {{ name }}</li>
      <li><span>Lastname : </span> {{ last }}</li>
      <li><span>Age : </span> {{ age }}</li>
      <ul>
        <li v-for="(value, key, index) in skills" :key="index">{{ key }} : {{ value }}</li>
      </ul>
    </ul>
    <button @click="sayHello">Child say Hello</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    last: {
      type: String,
      validator(value) {
        if (value === 'Gobel') {
          return true
        } else {
          return false
        }
      },
    },
    age: [Number, String],
    skills: Object,
  },
  emits: ['say-hello'],
  data() {
    return {}
  },
  methods: {
    sayHello() {
      this.$emit('say-hello')
    },
  },
}
</script>
