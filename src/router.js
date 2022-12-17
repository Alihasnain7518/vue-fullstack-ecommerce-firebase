
import Vue from 'vue'
import VueRouter from 'vue-router'


import MainLandingPage from './components/MainLandingPage.vue'
import SignUp from './components/Auth/SignUp.vue'
import WelcomeAdmin from './components/WelcomeAdmin/WelcomeAdmin.vue'
import SignIn from './components/Auth/SignIn.vue'
import UserDashboard from './components/UserDashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainLandingPage },
  { path: '/admin', component: WelcomeAdmin},
    { path: '/signup', component: SignUp },
    { path: '/signin', component: SignIn },
    { path: '/dashboard', component: UserDashboard },

]

export default new VueRouter({mode: 'history', routes})


