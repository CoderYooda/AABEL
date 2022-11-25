<template>
    <li
        class="articles__item"
        :style="{ backgroundImage: articleData.image ? `url('/storage/${ articleData.image }')` : 'url(/images/no-image.svg)' }"
    >
        <div class="articles__text">
            <h4 class="articles__item-title">
                {{ articleData.title }}
            </h4>
                        
            <router-link
                :to="{ name: 'article', params: { articleId: articleData.id }}"
                class="btn-filled articles__add-btn"
                title="Редактировать"
            >
                <a-icon
                    name="edit"
                    size="1"
                    class="button-text__icon"
                />
            </router-link>
            
            <!-- <p class="blog__description">
                {{ data.content }}
            </p> -->
        </div>
        
        <a-button
            class="articles__remove-btn"
            theme="filled"
            color="danger"
            title="Удалить"
            @click="removeArticle"
        >
            X
        </a-button>
    </li>
</template>

<script>
import AButton from "../../ui/button/AButton.vue";
import AIcon from "../../ui/icon/AIcon.vue";

export default {
    name: 'BlogItem',

    components: {
        AButton,
        AIcon
    },

    props: {
        articleData: {
            type: Object,
        },

        key: {
            type: String || Number,
        }
    },

    emits: ['removeArticle'],

    methods: {
        removeArticle() {
            this.$emit('removeArticle', this.articleData.id);
        }
    },
}
</script>
