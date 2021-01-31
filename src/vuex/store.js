import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tag: '',
		componentsShow: false,
		l2dshow: false
	},
	getters: {
		getTag(state){
			return state.tag
		}
	},
	mutations: {
		getTag(state, thetag) {
			state.tag = thetag
		},
		componentsShow(state, componentsShow) {
			state.componentsShow = componentsShow
		},
		l2dshow(state, l2dshow) {
			state.l2dshow = l2dshow
		}
	},
	actions: {},
	modules: {}
})
