import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage.vue'

// Products View Routes
const Projects = () => import('../views/Projects.vue')
import AllProducts from '../components/ProductsView/AllProducts.vue'
import ProductsDetails from '../components/ProductsDetails.vue'


// Javascript Coding
const JavascriptComponent = () => import('../components/JavascriptComponent/Javscript.vue')
const JavasciptTitle = () => import('../components/JavascriptComponent/JavasciptTitle.vue')
const JavascriptCoding = () => import('../components/JavascriptComponent/JavascriptCoding.vue')



// Page Not Found View
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: Projects },
  { path: '/all-products', component: AllProducts },
  { path: '/productDetails/:id', component: ProductsDetails },
  { path: '/javascript', component: JavascriptComponent },
  { path: '/javascript-title', component: JavasciptTitle },
  { path: '/javascript-coding', component: JavascriptCoding },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
