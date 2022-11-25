import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');

window.axios = require('axios');

window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    
    if (error.response.status === 401 || error.response.status === 419) {
        store.commit('auth/SET_TOKEN', null);
        router.push({ name: 'login' });
    }
   
    return Promise.reject(error);
}, function(e){

});