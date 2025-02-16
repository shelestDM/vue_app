<template>
  <div>
    <input
      :value="inputValue"
      :placeholder="placeholder"
      :type="type"
      @change="onChange"
      class="border border-blue-500 rounded-md mt-10 ml-5 h-10 text-[20px] p-2"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    inputValue: {
      type: String,
      default: '',
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Enter some text...',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onChange(e: Event) {
      this.$emit('update:inputValue', (e.target as HTMLInputElement).value)
    },
  },
}
</script>
