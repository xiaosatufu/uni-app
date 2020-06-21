import Vue from 'vue'
import App from './App'

import store from './store'
import uView from "uview-ui";
Vue.use(uView);

import indexPage from './pages/index/index.vue'
Vue.component('indexPage',indexPage)
import messagePage from './pages/message/index.vue'
Vue.component('messagePage',messagePage)
import personalCenter from './pages/personal-center/personal-center.vue'
Vue.component('personalCenter',personalCenter)
import tabbarNavigation from './components/tabbar-navigation.vue'
Vue.component('tabbarNavigation',tabbarNavigation)
// import tabbarNavbar from './components/tabbar-navbar.vue'
// Vue.component('tabbarNavbar',tabbarNavbar)




import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'



Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
