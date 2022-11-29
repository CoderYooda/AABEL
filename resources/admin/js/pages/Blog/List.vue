<template>
    <div class="articles blog__articles">
        <div class="articles__head">
            <h3 class="articles__title">
                Ваши статьи
            </h3>

            <router-link
                :to="{ name: 'addArticle' }"
                class="btn-filled"
            >
                Создать статью
            </router-link>
        </div>

        <template v-if="!IS_LOADING">
            <ul class="articles__list">
                <blog-item
                    v-for="article in blog"
                    :key="article.id"
                    :articleData="article"
                    @removeArticle="removeArticle"
                />
            </ul>
    
            
            <a-pagination
                class="articles__pagination"
                v-if="pagination"
                :pagination="pagination"
                @goToPage="goToPage"
            />
        </template>
        
        <a-spinner v-else />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import APagination from '../../components/ui/pagination/APagination.vue';
import BlogItem from '../../components/pages/Blogs/BlogItem.vue';
import ASpinner from '../../components/ui/icon/ASpinner.vue';

export default {
    name: 'List',

    components: {
        APagination,
        BlogItem,
        ASpinner,
    },

    computed: {
        ...mapGetters('blog', ['BLOG', 'PAGINATION', 'IS_LOADING']),

        blog() {
            return this.BLOG;
        },

        pagination() {
            return this.PAGINATION;
        },
    },

    methods: {
        ...mapActions('blog', ['LOAD_BLOG', 'REMOVE_ARTICLE']),

        async goToPage(url) {
            await this.LOAD_BLOG(url);
        },

        async removeArticle(id) {
            // вычисляем на какую страницу пагинации перейти после удаления
            const pagesAfterRemove = Math.ceil((this.pagination.total - 1) / this.pagination.per_page); 
            let page =
                pagesAfterRemove >= this.pagination.current_page
                ? this.pagination.current_page
                : this.pagination.current_page - 1;
            await this.REMOVE_ARTICLE({ id, url: `/blog/get?page=${ page }` });
        }
    },

    async mounted() {
        await this.goToPage();
    }
}
</script>
