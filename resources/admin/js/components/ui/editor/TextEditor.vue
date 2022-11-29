<template>
    <div class="editor">
        <label
            class="editor__label"
            v-if="label"
        >
            {{ label}}
        </label>
        
        <div
            class="text-editor editor__text-editor"
            :class="{ 'text-editor--snow': theme == 'snow', 'text-editor--bubble': theme == 'bubble' }"
        >
    
            <div class="text-editor__editor" ref="editor" @drop.prevent></div>
        </div>
    </div>
    
</template>

<script>
    import Quill from "quill";

    export default {
        name: 'TextEditor',

        props: {
            theme: {
                type: String,
                default: 'snow'
            },

            text: {
                type: String,
                default: ''
            },

            label: {
                type: String,
            }
        },
        
        data () {
            return {
                quill: null,
            }
        },

        methods: {
            initQuill() {
                this.quill = new Quill(this.$refs.editor, {
                    theme: this.theme,
                    bounds: this.$refs.editor,
                    scrollingContainer: '.ql-editor-text',
                    modules: {
                        toolbar: {
                            container: [
                                [{ 'header': [2, 3, 4, false] }], // заголовки
                                ['bold', 'italic', 'underline', 'strike'], // жирный, курсив, подчеркнутый, зачеркнутый
                                ['link'], // ссылка
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }], // списки нумерованный, точечный
                                [{ 'align': [] }], // положение текста                    
                                /* [{ 'script': 'sub'}, { 'script': 'super' }], */      // выше/ниже строки
                                ['clean'], // очистить форматирование
                            ],
                        }
                    },
                });

                if (this.text) {
                    this.quill.root.innerHTML = this.text;
                }

               this.quill.on('text-change', (eventName, ...args) => {
                    this.$emit('edit', this.quill.root.innerHTML);
                });
            },
        },

        mounted() {
            this.initQuill();
        },
        
        unmounted() {
            this.quill = null;
        },
    }
</script>
