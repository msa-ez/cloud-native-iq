import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedProfile: localStorage.getItem('selectedProfile') || null,
  },
  mutations: {
    setSelectedProfile(state, profile) {
      state.selectedProfile = profile;
      localStorage.setItem('selectedProfile', profile); // localStorage에 저장
    },
  },
  actions: {
    updateSelectedProfile({ commit }, profile) {
      commit('setSelectedProfile', profile);
    }
  }
});
