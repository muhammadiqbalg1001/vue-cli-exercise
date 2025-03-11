<template>
  <div class="user_profile">
    <h1>User Information</h1>
    <ul>
      <li>
        Nama :
        <span>{{ name }}</span>
      </li>
      <li>
        Lastname :
        <span>{{ last }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['name', 'last'],
  data() {
    return {
      name: 'Baleee',
    }
  },
}
</script>
