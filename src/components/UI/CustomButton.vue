<template>
  <button>{{ title }}</button>
</template>

<script lang="ts">
export default {
  name: 'custom-button',
  props: {
    title: String,
  },
}
</script>
