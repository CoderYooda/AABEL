<template>
    <form
        class="article__form"
        @submit.prevent
    >
        <a-input
            id="title"
            label="Заголовок"
            placeholder="Введите заголовок"
            v-model.trim="formData.title"
            :error="isError('title')"
        />

        <text-editor
            :text="formData.content"
            label="Текст блога"
            @edit="setAnswer"
        />

        <a-input
            id="seo_title"
            label="Заголовок SEO"
            placeholder="Введите заголовок SEO"
            v-model.trim="formData.seo_title"
            :error="isError('seo_title')"
        />

        <a-text
            id="seo_description"
            label="Описание SEO"
            placeholder="Введите описание SEO"
            rows="5"
            v-model.trim="formData.seo_description"
            :error="isError('seo_description')"
        />

        <div class="article__sex">
            <radio-sex
                id="male"
                value="1"
                sex="male"
                v-model="formData.is_male"
            />
            
            <radio-sex
                id="female"
                value="0"
                sex="female"
                v-model="formData.is_male"
            />
        </div>

        <upload-image
            :imageUrl="formData.image ? `/storage/${formData.image}` : null"
            @loaded="addToFormData"
        />

        <a-button
            class="article__btn"
            theme="filled"
            @click="submit"
        >
            Сохранить
        </a-button>
    </form>
</template>

<script>
import AInput from '../../ui/form/input/AInput.vue';
import AText from '../../ui/form/textarea/AText.vue';
import AButton from '../../ui/button/AButton.vue';
import TextEditor from '../../ui/editor/TextEditor.vue';
import UploadImage from '../../ui/upload/UploadImage.vue';
import RadioButton from '../../ui/form/input/RadioButton.vue';
import RadioSex from '../../ui/form/input/RadioSex.vue';

export default {
    components: {
        AInput,
        AButton,
        AText,
        TextEditor,
        UploadImage,
        RadioButton,
        RadioSex,
    },

    name: 'ArticleForm',

    props: {
        formData: {
            type: Object,
        },

        errors: {
            type: Object,
        }
    },

    emits: ['submit', 'imageWasChaged'],

    methods: {
        submit() {
            this.$emit('submit', {
                title: this.formData.title,
                content: this.formData.content,
                seo_title: this.formData.seo_title,
                seo_description: this.formData.seo_description,
                is_male: this.formData.is_male,
                image: this.formData.image,
            });
        },

        isError(value) {
            return this.errors && this.errors[value] ? this.errors[value][0] : null;
        },

        setAnswer(val) {
            this.formData.content = val;
        },

        addToFormData(file) {
            this.$emit('imageWasChaged', true);
            this.formData.image = file;
        }
    },
}
</script>
