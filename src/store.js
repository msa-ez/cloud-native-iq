import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedProfile: localStorage.getItem('selectedProfile') || null,
        selectedUser: localStorage.getItem('selectedUser') || null, // selectedUser 상태 추가
    },
    mutations: {
        setSelectedProfile(state, profile) {
            state.selectedProfile = profile;
            state.selectedUser = null; // selectedProfile이 변경될 때 selectedUser를 null로 설정
            if (profile) {
                localStorage.setItem('selectedProfile', profile);
            }
        },
        setSelectedUser(state, user) {
            state.selectedUser = user;
            if (user) {
                localStorage.setItem('selectedUser', user);
            } else {
                localStorage.removeItem('selectedUser'); // user가 null이면 로컬 스토리지에서도 제거합니다.
            }
        },
    },
    actions: {
        updateSelectedProfile({ commit }, profile) {
            commit('setSelectedProfile', profile);
        },
        updateSelectedUser({ commit }, user) { // updateSelectedUser 액션 추가
            commit('setSelectedUser', user);
        }
    }
});