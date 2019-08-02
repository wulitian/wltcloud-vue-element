import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const state = {
  loading: false,
}
const getters = {
  getLoading (state) {
    return state.loading
  }
}
const mutations = {
  setLoading (state, status) {
    state.loading=status;
  }
}
const actions = {
  setLoading (content,status) {
    content.commit('setLoading',status)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
