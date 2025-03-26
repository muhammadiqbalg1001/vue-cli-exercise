import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/generals/AppHeader.vue'
import Footer from './components/generals/AppFooter.vue'

const app = createApp(App)

app.directive('custDir', {
  beforeMount(el, binding) {
    el.style.color = binding.modifiers.blue ? 'blue' : 'red'

    el.style.fontSize = binding.modifiers.small ? '12px' : '24px'

    el.innerHTML = binding.value
  },
})

app.component('app-header', Header)
app.component('app-footer', Footer)
app.mount('#app')
