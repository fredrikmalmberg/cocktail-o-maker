import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomePage.vue'
import searchAPITest from '../components/searchAPIPresenter.vue'
import detailsAPITest from '../components/detailsAPIPresenter.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: searchAPITest
  },

  { 
    path: '/drinkdetails/:id', 
    name: 'drinkDetails', 
    component: detailsAPITest 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
