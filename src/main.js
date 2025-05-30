import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Dhimas from './Dhimas.vue'
import router from './router'
import gsap from 'gsap'
const app = createApp(Dhimas)

app.use(router)
app.use(gsap)

app.mount('#app')
