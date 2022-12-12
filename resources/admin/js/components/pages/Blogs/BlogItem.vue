<template>
    <li class="articles__item">
        <div
            class="articles__item-img"
            :style="{ backgroundImage: imgSrc }"
        ></div>

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

    computed: {
        imgSrc() {
            console.log(this.articleData.image);
            if (this.articleData.image) {
                return `url('/storage/${ this.articleData.image }')`;
            } else if (!this.articleData.image && this.articleData.is_male) {
                return `url('/images/man.png')`;
            } else if (!this.articleData.image && !this.articleData.is_male) {
                return `url('/images/woman.png')`;
            }
        }
    },

    methods: {
        removeArticle() {
            this.$emit('removeArticle', this.articleData.id);
        }
    },
}
</script>
