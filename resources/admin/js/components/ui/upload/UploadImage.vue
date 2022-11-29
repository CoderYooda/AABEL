<template>
    <div>
        <input type="file" id="file" ref="file" @change="upload"/>
        <img v-if="imagePreview == imageUrl" :src="imageUrl ? imageUrl : '/images/no-image.svg'" alt="">
        <img v-else v-bind:src="imagePreview" />
    </div>
</template>

<script>
export default {
    name: 'UploadImage',

    props: {
        imageUrl: {
            type: String
        }
    },

    emits: ['loaded'],

    data() {
        return {
            file: '',
            showPreview: false,
            imagePreview: this.imageUrl
        }
    },

    computed: {
        hasImage() {
            return Boolean(this.imagePreview);
        }
    },

    methods: {
        upload() {
            this.file = this.$refs.file.files[0];
            let reader  = new FileReader();
            reader.addEventListener("load", () => {
                this.showPreview = true;
                this.imagePreview = reader.result;
            }, false);
            if(this.file){
                if (/\.(jpe?g|png|gif)$/i.test(this.file.name) ) {
                    reader.readAsDataURL(this.file);
                    this.$emit('loaded', this.file);
                }
            }
        },
    },
}
</script>
