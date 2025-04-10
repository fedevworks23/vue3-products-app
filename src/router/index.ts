import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import AllProducts from '../components/AllProducts.vue'
import ProductsDetails from '../components/ProductsDetails.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/all-products', component: AllProducts },
  { path: '/productDetails/:id', component: ProductsDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
