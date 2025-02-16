<template>
  <ul
    class="flex gap-5 p-3 w-fit mx-auto items-center mt-10 max-w-[500px] overflow-scroll snap-mandatory snap-x"
  >
    <li
      v-for="page in pages"
      :key="page"
      class="snap-center w-10 h-10 shrink-0 rounded-md bg-sky-400 text-white flex items-center justify-center transition-all duration-500 hover:shadow-[0_0px_10px_0px_#22d3ee]"
      :class="{
        'shadow-[0_0px_15px_0px_#22d3ee]': currentPage === page,
      }"
      @click="$emit('changePage', page)"
    >
      {{ page }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    pages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped></style>
