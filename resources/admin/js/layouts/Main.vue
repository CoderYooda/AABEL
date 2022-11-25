<template>
    <header class="main-header">
        <div class="container">
            <main-nav />
        </div>
    </header>

    <main>
        <router-view></router-view>
    </main>

    <footer class="main-footer"></footer>
</template>

<script>
import { mapActions } from 'vuex';
import MainNav from '../components/layout/MainNav/MainNav.vue';

export default {
    name: 'Main',

    components: { MainNav },

    methods: {
        ...mapActions('auth', ['ME']),

        async me() {
            await this.ME();
        }
    },

    async mounted() {
        const isMe = await this.ME();
        if (!isMe) {
            this.$router.push({ name: 'login' })
        }
    },
}
</script>

<style>

</style>