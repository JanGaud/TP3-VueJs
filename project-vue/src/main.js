import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import '@/assets/css/styles.css'
import '@/assets/css/header.css'
import '@/assets/css/main.css'

createApp(App).use(router).mount('#app')
