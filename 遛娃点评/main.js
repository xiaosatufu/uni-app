import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

import indexPage from './pages/index/index.vue'
Vue.component('indexPage',indexPage)
import messagePage from './pages/message/index.vue'
Vue.component('messagePage',messagePage)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
