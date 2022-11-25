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
import MainNav from '../components/layout/MainNav/MainNav.vue';

export default {
    name: 'Main',

    components: { MainNav }
}
</script>

<style>

</style>