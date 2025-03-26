import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/generals/AppHeader.vue'
import Footer from './components/generals/AppFooter.vue'

const app = createApp(App)

app.directive('custDir', {
  created(el) {
    console.log(el.parentNode)
    console.log('created')
  },
  beforeMount(el, binding) {
    el.style.color = binding.modifiers.blue ? 'blue' : 'red'
    el.style.fontSize = binding.modifiers.small ? '12px' : '36px'

    el.innerHTML = binding.value
  },
  mounted(el) {
    console.log(el.parentNode)
    console.log('mounted')
  },
  beforeUpdate(el, binding) {
    console.log(el)
    console.log(binding)
    el.innerHTML = binding.value
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
})

app.component('app-header', Header)
app.component('app-footer', Footer)
app.mount('#app')
