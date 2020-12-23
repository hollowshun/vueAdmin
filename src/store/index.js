import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import user from './modules/user'
import getters from './getter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    index,
    user
  },
  getters
})

export default store
