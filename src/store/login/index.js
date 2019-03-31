import Firebase from 'firebase/app'
import FirebaseConfig from './firebase-config'
import handleAuthError from './handle-auth-error'

const state = {
  isLogged: false,
  userInformations: {
    displayName: null,
    email: null,
    token: null,
    uid: null
  }
}

const actions = {
  startFirebase: () => {
    Firebase.initializeApp(FirebaseConfig);
  },
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
  loginWithGoogleProvider: async () => {
    const googleProvider = new Firebase.auth.GoogleAuthProvider()

    try {
      await Firebase.auth().signInWithPopup(googleProvider)
      return true
    } catch(err) {
      return Promise.reject(err)
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
        token: null,
        uid: null
      })
      commit('setLogin', false)
      return true
    } catch (err) {
      commit('setUser', {
        displayUser: null,
        email: null,
        token: null,
        uid: null
      })
      commit('setLogin', false)
      const errorMessage = handleAuthError(err.code)
      return Promise.reject(errorMessage)
    }
  }
}

const mutations = {
  setLogin: (state, loginState) => state.isLogged = loginState,
  setUser: (state, { displayName, email, refreshToken, uid }) => {
    state.userInformations = {
      ...state.userInformations,
      displayName,
      email,
      token: refreshToken,
      uid
    }
  },
  resetUser: (state) => state.userInformations = {
    displayName: null,
    email: null,
    token: null,
    uid: null
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
