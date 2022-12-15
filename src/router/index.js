import { createRouter, createWebHistory } from 'vue-router'
import search from '../components/presenters/searchPresenter.vue'
import HomeView from '../components/presenters/HomePagePresenter.vue'
import detailsAPITest from '../components/presenters/detailsAPIPresenter.vue'
import userComponent from '../components/presenters/userPresenter.vue'
import ingredientsComponent from '../components/presenters/ingredientListPresenter.vue'
import registerComponent from '../components/presenters/registerComponent.vue'
import loginComponent from '../components/presenters/loginComponent.vue'
import logoutPresenter from '../components/presenters/logoutPresenter'

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
    path: '/user/', 
    name: 'userHome', 
    component: userComponent 
  },
  {
    path: '/research',
    name: 'main page',
    component: search
  },
  {
    path: '/ingredients',
    name: 'all ingredients',
    component: ingredientsComponent
  },
  { 
    path: '/register', 
    name: 'register', 
    component: registerComponent 
  },
  { 
    path: '/login', 
    name: 'login', 
    component: loginComponent 
  },
  {
    path: '/logout',
    name: 'logout',
    component: logoutPresenter
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
