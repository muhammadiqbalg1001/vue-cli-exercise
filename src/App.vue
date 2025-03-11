<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <profile-page :name="name" :last="lastname"> </profile-page>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import ProfilePage from './components/user/ProfilePage.vue'
export default {
  components: {
    ProfilePage,
  },
  data() {
    return {
      name: 'Iqbal',
      lastname: 'Gobel',
    }
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
</style>
