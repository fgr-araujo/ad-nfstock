import BuyPlan from './buy-plan'
import ApplyTransaction from './apply-transaction'

const state = {
  pagarMeApiKey: 'ak_test_zbCH2cX2NKQhD0lgM4bXUDNlyeQ6j8'
}

const actions = {
  buyPlan: async ({ state }, transactionInfo) => {
    const formattedPaymentInfo = BuyPlan(transactionInfo)

    try {
      const paymentResult = await ApplyTransaction(formattedPaymentInfo, state.pagarMeApiKey)
      return paymentResult
    } catch(err) {
      return Promise.reject(err)
    }
  }
}

const mutations = {}

const getters = {
  pagarMeApiKey: state => state.pagarMeApiKey
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}