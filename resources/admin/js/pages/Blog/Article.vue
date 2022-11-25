<template>
    <div
        v-if="article"
        class="article blog__article"
    >
        <h3 class="article__title">
            Изменить статью
        </h3>

        <article-form
            :formData="article"
            @submit="editArticle"
            @imageWasChaged="isImageChanged = true"
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

    name: 'Article',

    props: {
        articleId: {
            type: String || Number,
        }
    },

    data() {
        return {
            isImageChanged: false,
        }
    },

    computed: {
        ...mapGetters('blog', ['GET_ARTICLE']),

        article() {
            return this.GET_ARTICLE(this.articleId);
        }
    },

    methods: {
        ...mapActions('blog', ['EDIT_ARTICLE']),

        async editArticle(data) {
            if (!this.isImageChanged) {
                delete data.image
            } 
            await this.EDIT_ARTICLE({
                id: this.article.id,
                ...data
            });

            this.$router.push({ name: 'blog' })
        },
    },

    mounted() {
        if (!this.article) {
            this.$router.push({ name: 'blog' });
        }
    }
}
</script>
