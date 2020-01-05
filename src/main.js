import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './app'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
