<template>
    <nav class="main-nav">
        <ul class="main-nav__list">
            <li class="main-nav__item">
                <router-link
                    :to="{ name: 'main' }"
                    class="main-nav__logo"
                >
                    <img
                        src="/icons/logo.png"
                        alt="Логотип"
                    >
                </router-link>
            </li>

            <li class="main-nav__item">
                <router-link
                    :to="{ name: 'blog' }"
                    class="main-nav__link"
                    :class="{ active: $route.path.includes('blog') }"
                    exact
                >
                    Блог
                </router-link>
            </li>

            <li class="main-nav__item">
                <button
                    class="main-nav__link"
                    @click="logout"
                >
                    Выйти
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'MainNav',

    methods: {
        ...mapActions('auth', ['LOGOUT']),

        async logout() {
            await this.LOGOUT();
            this.$router.push({ name: 'login' });
        }
    }
}
</script>
