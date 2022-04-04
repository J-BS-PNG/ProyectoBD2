import { createApp } from "vue";
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './components/App.vue'
import Index from './components/components/showProfile.vue'
import Create from './components/components/registerUser.vue'
import Edit from './components/components/editProfile.vue'
 
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
    name: 'Index',
    path: '/',
    component: Index
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
 
//const router = new VueRouter({ mode: 'history', routes: routes })
 
createApp(App).use(router).mount('#app')
