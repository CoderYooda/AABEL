import { login, logout, me, refresh } from "../../../api/auth";

export default ({
    async LOGIN({ getters, commit }, authData) {
        try {
            const { data } = await login({
                login: authData.login,
                password: authData.password
            });
            commit('SET_TOKEN', data.access_token);
            
            if (getters.HAS_ERRORS) {
                commit('SET_ERRORS', null);
            }
        } catch (error) {
            commit('SET_ERRORS', error.response.data);
        }
    },

    async LOGOUT({ getters, commit }) {
        try {
            await logout(getters.TOKEN);
            commit('SET_TOKEN', null);

            if (getters.HAS_ERRORS) {
                commit('SET_ERRORS', null);
            }
        } catch (error) {
            commit('SET_ERRORS', error.response.data);
        }
    },

    async ME({ getters, commit }) {
        try {
            await me(getters.TOKEN);
            return true;
        } catch (error) {
            return false;
        }
    },

    async REFRESH({ getters, commit }) {
        try {
            await refresh(getters.TOKEN);
            return true;
        } catch (error) {
            return false;
        }
    },
});
