<template>
    <div class="radio-sex">
        <div class="radio-sex__wrapper">
            <input
                type="radio"
                :id="id"
                class="radio-sex__input"
                :value="value"
                :checked="isChecked"
                @change="updateInput"
            >
            
            <label
                :for="id"
                class="radio-sex__decor"
                :class="sexClass"
            ></label>
        </div>

        <label
            v-if="label"
            :for="id"
            class="radio-sex__label"
        >
            {{ label }}
        </label>
    </div>
</template>

<script>
    export default {
        name: 'RadioButton',

        model: {
            prop: 'modelValue',
            event: 'change'
        },

        props: {
            id: {
                type: String,
                default: 'id',
            },

            value: {
                type: [String, Number, Boolean],
                default: '',
            },

            modelValue: {
                default: '',
            },

            label: {
                type: [String, null],
                default: null,
            },

            sex: {
                type: String,
                default: 'male',
            }
        },

        emits: ['update:modelValue'],

        computed: {
            isChecked() {
                return this.modelValue == this.value;
            },

            sexClass() {
                return this.sex == 'male' ? 'radio-sex__decor--male' : 'radio-sex__decor--female';
            }
        },

        methods: {
            updateInput() {
                this.$emit('update:modelValue', this.value);
            }
        }
    }
</script>
