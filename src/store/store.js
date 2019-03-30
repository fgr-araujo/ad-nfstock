import Vue from 'vue'
import Vuex from 'vuex'

import Login from './login'
import Contact from './contact'
import Plans from './plans'
import Payment from './payment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login,
    Contact,
    Plans,
    Payment
  }
})
