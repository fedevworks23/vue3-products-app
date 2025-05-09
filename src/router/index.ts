import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage.vue'

// Products View Routes
const Projects = () => import('../views/Projects.vue')
import AllProducts from '../components/ProductsView/AllProducts.vue'
import ProductsDetails from '../components/ProductsDetails.vue'


// Javascript Coding
const JavascriptComponent = () => import('../components/JavascriptComponent/Javascript.vue')
const JavasciptTitle = () => import('../components/JavascriptComponent/JavasciptTitle.vue')
const JavasciptAnswer = () => import('../components/JavascriptComponent/JavasciptAnswer.vue')



// Page Not Found View
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: Projects },
  { path: '/all-products', component: AllProducts },
  { path: '/productDetails/:id', component: ProductsDetails },
  {
    path: '/javascript', name: 'javascript', component: JavascriptComponent,
    children: [
      { path: '/javascript-title', component: JavasciptTitle },
      { path: '/javascript-coding/:id', component: JavasciptAnswer },
    ],
  },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
