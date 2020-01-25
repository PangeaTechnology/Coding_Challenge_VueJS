import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorgeStore from './localStorgePlugin';

Vue.use(Vuex)
const isProd = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  
  mutations: {
    initStore() {
      if(localStorage.getItem('App')) {
        this.replaceState({
          ...JSON.parse(localStorage.getItem('App')),
        })
      }
    },
  },
  plugins: [LocalStorgeStore],
  strict: !isProd,
})
