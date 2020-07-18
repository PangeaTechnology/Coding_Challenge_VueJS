import Vue from 'vue'
import Vuex from 'vuex'
import TODOS_STORE from '@/modules/todo/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TODOS_STORE
  }
})
