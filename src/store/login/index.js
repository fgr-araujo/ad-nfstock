import Firebase from 'firebase/app'

const handleAuthError = (errCode) => {
  switch (errCode) {
    case 'auth/email-already-in-use':
      return 'Usuário já existe em nosso sistema e não podemos cadastra-lo novamente'
    default:
      return 'Ocorreu um erro e não podemos prossegir. Cheque os dados'
  }
}

const state = {
  isLogged: false,
  userInformations: {
    displayName: null,
    email: null,
    token: null
  }
}

const actions = {
  doLogin: async ({ commit }, { email, password }) => {
    try {
      await Firebase.auth().signInWithEmailAndPassword(email, password)
      return true
    } catch(err) {
      commit('setLogin', false)
      const errorMessage = handleAuthError(err.code)
      return Promise.reject(errorMessage)
    }
  },
  doRegister: async ({ commit }, { email, password }) => {
    try {
      await Firebase.auth().createUserWithEmailAndPassword(email, password)
      return true
    } catch(err) {
      commit('setLogin', false)
      const errorMessage = handleAuthError(err.code)
      return Promise.reject(errorMessage)
    }
  },
  doLogoff: async ({ commit }) => {
    try {
      await Firebase.auth().signOut()
      commit('setUser', {
        displayUser: null,
        email: null,
        token: null
      })
      commit('setLogin', false)
      return true
    } catch (err) {
      console.log(err)
      commit('setUser', {
        displayUser: null,
        email: null,
        token: null
      })
      commit('setLogin', false)
      const errorMessage = handleAuthError(err.code)
      return Promise.reject(errorMessage)
    }
  }
}

const mutations = {
  setLogin: (state, loginState) => state.isLogged = loginState,
  setUser: (state, { displayName, email, refreshToken }) => {
    state.userInformations = {
      ...state.userInformations,
      displayName,
      email,
      token: refreshToken
    }
    console.log(displayName, email, refreshToken)
  },
  resetUser: (state) => state.userInformations = {
    displayName: null,
    email: null,
    token: null
  }
}

const getters = {
  getUserData: state => state.userInformations,
  isLogged: state => state.isLogged
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
