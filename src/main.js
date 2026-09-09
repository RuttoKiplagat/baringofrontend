import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios' 
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/main.css'


axios.defaults.baseURL = import.meta.env.VITE_API_URL3edy65ws2gt5gt
axios.defaults.headers.common['Accept'] = 'application/json'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Initialize AOS with settings that respect reduced motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

AOS.init({
  duration: prefersReducedMotion ? 0 : 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  disable: prefersReducedMotion,
})