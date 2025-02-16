<template>
  <input :type="inputType" :placeholder="placeholder" :value="modelValue" @input="updateInput" />
</template>

<script lang="ts">
export default {
  name: 'custom-input',
  props: {
    inputType: String,
    modelValue: [String, Number],
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateInput(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
    },
  },
}
</script>
