<template>
    <button
        :class="{
            'btn-filled': theme == 'filled',
            'danger': color == 'danger',
            'disabled': disabled,
        }"
        :disabled="disabled"
        :title="title"
        @click="click"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'AButton',

    props: {
        theme: {
            type: String,
            default: 'filled',
        },

        color: {
            type: String,
        },

        disabled: {
            type: Boolean,
        },

        title: {
            type: String
        }
    },

    emits: ['click'],

    methods: {
        click() {
            this.$emit('click');
        }
    },
}
</script>
