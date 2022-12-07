import { createRouter, createWebHistory } from 'vue-router'
import search from '../components/presenters/searchPresenter.vue'
import HomeView from '../components/presenters/HomePagePresenter.vue'
import detailsAPITest from '../components/presenters/detailsAPIPresenter.vue'
import userComponent from '../components/presenters/userPresenter.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  { 
    path: '/drinkdetails/:id', 
    name: 'drinkDetails', 
    component: detailsAPITest 
  },
  { 
    path: '/user/:name', 
    name: 'userHome', 
    component: userComponent 
  },
  {
    path: '/research',
    name: 'main page',
    component: search
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
