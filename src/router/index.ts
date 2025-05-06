import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import AllProducts from '../components/AllProducts.vue'
import ProductsDetails from '../components/ProductsDetails.vue'
import AllCategories from '../components/AllCategories.vue'
import Category from '../components/Category.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/all-products', component: AllProducts },
  { path: '/productDetails/:id', component: ProductsDetails },
  { path: '/all-categories', component: AllCategories },
  { path: '/category/:category', component: Category },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
