import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue'
import NewProductView from '@/views/NewProductView.vue'
import NewUserView from '@/views/NewUserView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductUpdateView from '@/views/ProductUpdateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/new-product',
    name: '/new-product',
    component: NewProductView
  },
  {
    path: '/new-user',
    name: '/new-user',
    component: NewUserView
  },
  {
    path: '/login',
    name: '/login',
    component: LoginView
  },
  {
    path: '/update-product/:id',
    name: 'update-product',
    component: ProductUpdateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
