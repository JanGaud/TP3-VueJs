import { createApp } from 'vue'
import store from '@/vuex'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import '@/assets/css/styles.css'
import '@/assets/css/header.css'
import '@/assets/css/main.css'
import '@/assets/css/product-card.css'
import '@/assets/css/sidebar.css'
import '@/assets/css/show-card.css'

createApp(App).use(router).use(store).mount('#app')
