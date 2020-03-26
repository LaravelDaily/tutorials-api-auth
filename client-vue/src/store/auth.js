import axios from 'axios'

const state = {
  user: null
}

// getters
const getters = {
  getUser: (state) => {
    return state.user
  }
}

// actions
const actions = {
  loadUser ({commit}) {
    axios.get(process.env.VUE_APP_API_URL + 'user')
      .then(function (resp) {
        commit('storeUser', resp.data)
      })
      .catch(function (resp) {
        console.log('User could not be found', resp)
      })
  },
  loginUser ({commit}, details) {
    axios.post(process.env.VUE_APP_AUTH_URL, details)
      .then(function (resp) {
        commit('storeUser', resp.data.user)
        localStorage.setItem('authToken', resp.data.access_token)
      })
  },
  logout ({commit}, details) {
    axios.post(process.env.VUE_APP_API_URL + 'logout', details)
      .then(function () {
        commit('storeUser', null)
        localStorage.removeItem('authToken')
      })
  }
}

// mutations
const mutations = {
  storeUser (state, data) {
    state.user = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}