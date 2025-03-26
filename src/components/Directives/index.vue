<template>
  <!-- <h3 v-custDir></h3> -->
  <h3 v-custDir.blue.big="valDirecive"></h3>
  <h3 v-user-name.border="name"></h3>
  <!-- <h3 v-custDir.red.big="valDirecive"></h3> -->

  <button @click="this.valDirecive = 'Text has been changed'">Click to change</button>
</template>

<script>
export default {
  data() {
    return {
      valDirecive: 'text from data',
      name: 'Iqbal',
    }
  },
  directives: {
    'user-name': {
      beforeMount(el, binding) {
        el.innerHTML = binding.value
        el.style.color = 'red'
        el.style.fontSize = '24px'
        el.style.border = binding.modifiers.border ? '1px solid black' : 'none'
      },
    },
  },
}
</script>
