export default ({
    TOKEN(state) {
        return state._token;
    },

    IS_AUTH(state) {
        return Boolean(state._token);
    },

    ERRORS(state) {
        return state._errors;
    },

    HAS_ERRORS(state) {
        return Boolean(state._errors);
    },
});
