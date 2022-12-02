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
    path: '/searchAPITest',
    name: 'API Test (Search)',
    component: searchAPITest
  },
  {
    path: '/detailsAPITest',
    name: 'API Test (Details)',
    component: detailsAPITest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
