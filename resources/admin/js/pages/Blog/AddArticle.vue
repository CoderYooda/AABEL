<template>
    <div class="article blog__article">
        <h3 class="article__title">
            Создать статью
        </h3>

        <article-form
            :formData="formData"
            :errors="errors"
            @submit="addArticle"
        />

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AInput from '../../components/ui/form/input/AInput.vue';
import AButton from '../../components/ui/button/AButton.vue';
import ArticleForm from '../../components/pages/Blogs/ArticleForm.vue';

export default {
    components: {
        AInput,
        AButton,
        ArticleForm,
    },

    name: 'AddArticle',

    data() {
        return {
            formData: {
                title: null,
                content: null,
                seo_title: null,
                seo_description: null,
                is_male: 1,
                image: null,
            }
        }
    },

    computed: {
        ...mapGetters('blog', ['HAS_ERRORS', 'ERRORS']),

        errors() {
            return this.ERRORS;
        }
    },

    methods: {
        ...mapActions('blog', ['ADD_ARTICLE']),

        async addArticle(data) {
            const isSuccess = await this.ADD_ARTICLE(data);
            if (isSuccess) {
                this.$router.push({ name: 'blog' });
            }
        },
    },
}
</script>
