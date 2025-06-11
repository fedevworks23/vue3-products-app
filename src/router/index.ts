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

//Custom Components
const CustomComponents = () => import('../views/CustomComponents.vue')
import ColorCodes from '../components/Custom/ColorCodes.vue'



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
  //Custom Component Routes
  { path: '/custom-components', name: 'CustomComponents', component: CustomComponents },
  { path: '/custom-components/color-codes', name: 'ColorCodes', component: ColorCodes },

  // Catch-all route for 404 Page Not Found
  // This should be the last route in the array
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
  linkActiveClass: 'bg-[var(--background)] text-[var(--primary)] inset-shadow-sm inset-shadow-indigo-500',
  history: createWebHistory(),
  routes,
})

export default router
