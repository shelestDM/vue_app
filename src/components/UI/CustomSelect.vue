<template>
  <select @change="onChange" class="bg-blue-300 rounded-md h-10 px-3 text-white">
    <option value="" disabled selected class="text-gray-500">Select sort query</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export interface IOption {
  value: string
  name: string
}
export default defineComponent({
  name: 'custom-select',
  props: {
    option: {
      type: String,
      required: false,
    },
    options: {
      type: Array as PropType<IOption[]>,
      required: true,
    },
  },
  methods: {
    onChange(event: Event) {
      this.$emit('update:option', (event.target as HTMLSelectElement).value)
      console.log((event.target as HTMLSelectElement).value)
    },
  },
})
</script>
