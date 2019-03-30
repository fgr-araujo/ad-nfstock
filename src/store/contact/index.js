const state = {}

const actions = {
  sendMessage: async ({ state }, message) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  sendPhone: async ({ state }, message) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }
}

const mutations = {}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
