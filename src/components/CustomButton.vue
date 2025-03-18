<script setup lang="ts">
type Buttonprops = {
  title: string
  className: string
}
withDefaults(defineProps<Buttonprops>(), {
  title: 'App button',
  className: '',
})
</script>

<template>
  <button :class="className">{{ title }}</button>
</template>

<style scoped></style>
