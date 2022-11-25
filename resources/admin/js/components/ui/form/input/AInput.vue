<template>
    <div
        class="a-input"
        :class="{ 'error': error }"
    >
        <label
            :for="id"
            class="a-input__label"
            v-if="label"
        >
            {{ label }}
        </label>

        <input
            type="text"
            :id="id"
            class="a-input__input"
            :autofocus="autofocus"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :tabindex="tabindex"
            :value="modelValue"
            @input="change"
        >

        <small
            class="a-input__error"
            v-if="error"
        >
            {{ error }}
        </small>
    </div>
</template>

<script>
export default {
    name: 'AInput',

    props: {
        modelValue: String,

        id: {
            type: String,
            required: true
        },

        label: {
            type: String,
            default: ''
        },

        placeholder: {
            type: String,
            default: 'Поле ввода'
        },

        autofocus: {
            type: Boolean,
            default: false
        },

        disabled: {
            type: Boolean,
            default: false
        },

        required: {
            type: Boolean,
            default: false
        },

        tabindex: {
            type: String || Number,
        },

        error: {
            type: String || null,
            default: ''
        }
    },

    emits: ['update:modelValue'],

    methods: {
        change(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
}
</script>
