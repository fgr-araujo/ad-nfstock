import Vue from 'vue'
import Vuex from 'vuex'

import Login from './login'
import Contact from './contact'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login,
    Contact
  }
})
