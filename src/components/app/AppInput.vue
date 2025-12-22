<template>
  <input
    v-bind="$attrs"
    @input="onInput"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  setup (_, { emit }) {
    function onInput (e: InputEvent): void {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return {
      onInput
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  background: $white;
  padding: 20px 10px 20px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 11px;
  backdrop-filter: blur(13px);
  min-width: 350px;
  height: 75px;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  text-overflow: ellipsis;
  appearance: none;

  @include transition;

  @include media-breakpoint-down(md) {
    height: 51px;
    min-width: 290px;
  }

  &::placeholder {
    color: #bbb;
    opacity: 1;
  }

  &:focus,
  &:focus-visible { /* stylelint-disable-line selector-pseudo-class-no-unknown */
    color: $blue;
    border-color: $blue;

    &::placeholder {
      color: transparent;
    }
  }
}
</style>
