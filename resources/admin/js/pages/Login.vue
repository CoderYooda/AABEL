<template>
    <section class="login">
        <h1 class="login__title">Вход в систему</h1>
        
        <form
            class="login__form"
            @submit.prevent
        >
            <a-input
                id="login"
                label="Логин"
                placeholder="Введите логин"
                v-model.trim="login"
                autofocus
            />
    
            <a-input
                id="password"
                label="Пароль"
                placeholder="Введите пароль"
                v-model.trim="password"
            />
    
            <small
                class="login__error"
                v-if="hasErrors"
            >
                {{ error }}
            </small>
            
            <a-button
                theme="filled"
                :disabled="!isValid"
                @click="submit"
            >
                Войти
            </a-button>
        </form>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AInput from '../components/ui/form/input/AInput.vue';
import AButton from '../components/ui/button/AButton.vue';

export default {
  components: { AInput, AButton },
    name: 'Login',

    data() {
        return {
            login: null,
            password: null,
        }
    },

    computed: {
        ...mapGetters('auth', ['ERRORS', 'HAS_ERRORS']),
        
        isValid() {
            return this.login && this.password;
        },

        error() {
            return this.ERRORS.error;
        },

        hasErrors() {
            return this.HAS_ERRORS;
        }
    },

    methods: {
        ...mapActions('auth', ['LOGIN']),

        async submit() {
            if (this.isValid) {
                await this.LOGIN({
                    login: this.login,
                    password: this.password
                });
                
                this.$router.push({ name: 'main'});
            }
        }
    }
}
</script>
