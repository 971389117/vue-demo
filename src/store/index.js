import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'LKJKSADJKLD312312'
  },
  mutations: {

    setToken(state,value){
      state.token=value
    }
  },
})
