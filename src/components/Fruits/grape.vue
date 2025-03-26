<template>
  <div>Grape Component</div>
  <teleport to="#dialog_ishere">
    <comp-modal></comp-modal>
  </teleport>
</template>

<script>
import compModal from '../Utils/modal.vue'

export default {
  components: {
    compModal,
  },
  name: 'comp-grape',
  unmounted() {
    console.log('grape unmounted')
  },
}
</script>
