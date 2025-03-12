<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <profile-page :name="name" :last="lastname" :age="age" :skills="skills"> </profile-page>
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
      age: 23,
      skills: {
        programming: 'Javascript',
        framework: 'Vue',
      },
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
