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

        <textarea
            :id="id"
            class="a-input__input"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :disabled="disabled"
            :cols="cols"
            :rows="rows"
            :maxlength="maxlength"
            :readonly="readonly"
            :required="required"
            :tabindex="tabindex"
            :value="modelValue"
            @input="change"
        ></textarea>

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
    name: 'AText',

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

        readonly: {
            type: Boolean,
            default: false
        },

        required: {
            type: Boolean,
            default: false
        },

        cols: {
            type: String || Number,
        },

        rows: {
            type: String || Number,
        },

        maxlength: {
            type: String || Number,
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
