<script setup lang="ts">
type Buttonprops = {
  title?: string
}

const props = defineProps<Buttonprops>()
</script>

<template>
  <button>
    {{ props.title }}
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
