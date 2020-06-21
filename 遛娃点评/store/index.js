import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		token: '',
		userInfo: {}
	},
	mutations: {
		login(state, user) {
			console.log(user)
			state.token = user.token
			state.userInfo = user.userResult
			uni.setStorage({
				key: 'token',
				data: user.token
			})
			uni.setStorage({
				key: 'userInfo',
				data: user.userResult
			})
			console.log(state)

		}
	},
	actions: {}
})
export default store
