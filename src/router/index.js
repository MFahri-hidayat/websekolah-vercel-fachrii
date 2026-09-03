import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../Pages/LandingPage.vue'
import ProductPage from '../Pages/ProductPage.vue'
import AboutPage from '../Pages/AboutPage.vue'
import ContactPage from '../Pages/ContactPage.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/product', component: ProductPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
  ],
})
 
export default router