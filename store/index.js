import Vue from 'vue'
import Vuex from 'vuex'
import { todo } from './modules/todo';
import LocalStorgeStore from './localStorgePlugin';

Vue.use(Vuex)
const isProd = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  modules: {
    todo,
  },
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
