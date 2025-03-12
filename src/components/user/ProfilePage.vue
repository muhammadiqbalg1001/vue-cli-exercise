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
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    last: String,
    age: Number,
    skills: Object,
  },
  data() {
    return {}
  },
}
</script>
