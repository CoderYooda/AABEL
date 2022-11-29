<template lang="">
    <component :is="layout"></component>
</template>

<script>
import Empty from './layouts/Empty.vue';
import Main from './layouts/Main.vue';

export default {
    name: 'app',
    components: {
        Empty,
        Main,
    },

    computed: {
        layout() {
            return this.$route.meta.layout || 'Empty'; 
        }
    }
}
</script>
