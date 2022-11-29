export default ({
    SET_TOKEN(state, token) {
        state._token = token;
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    },

    SET_ERRORS(state, errors) {
        console.log(errors);
        state._errors = errors;
    }
});
