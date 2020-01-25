import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import store from '../store'

Vue.config.productionTip = false

new Vue({
  store,
  beforeCreate() {
		this.$store.commit('initStore', 'Pull state from localStorage');
	},
  render: h => h(App)
}).$mount('#app')
