import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage.vue'

// Products View Routes
const Projects = () => import('../views/Projects.vue')
const Movies = () => import('../components/Movies/Movies.vue')
import ProductLists from '../components/ProductsView/ProductLists.vue'
import ProductsDetails from '../components/ProductsView/ProductsDetails.vue'


// Javascript Coding
const JavascriptComponent = () => import('../components/JavascriptComponent/Javascript.vue')
const JavasciptTitle = () => import('../components/JavascriptComponent/JavasciptTitle.vue')
const JavasciptAnswer = () => import('../components/JavascriptComponent/JavasciptAnswer.vue')



// Page Not Found View
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/movies', component: Movies },
  { path: '/projects', component: Projects },
  { path: '/product-lists', component: ProductLists },
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
  linkActiveClass: 'bg-[var(--background)] border-1 border-[var(--primary)] text-[var(--primary)]',
  history: createWebHistory(),
  routes,
})

export default router
