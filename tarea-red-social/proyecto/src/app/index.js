import { createApp } from "vue";
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './components/App.vue'
import Login from './components/components/loginUser.vue'
import Create from './components/components/registerUser.vue'
import Edit from './components/components/editProfile.vue'
import Account from './components/components/showProfile.vue'
 
//Vue.config.productionTip = false
 
const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:email',
    component: Edit
  },
  {
    name: 'Login',
    path: '/',
    component: Login
  },
  {
    name:'Account',
    path: '/Account',
    component: Account
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
 
//const router = new VueRouter({ mode: 'history', routes: routes })
 
createApp(App).use(router).mount('#app')
