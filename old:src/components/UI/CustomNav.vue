<template>
  <nav class="my-5 flex items-center gap-5 mx-auto w-fit">
    <RouterLink class="p-4 rounded-xl shadow-xl" to="/">Go to Home</RouterLink>
    <RouterLink class="p-4 rounded-xl shadow-xl" to="/about">Go to About</RouterLink>
    <RouterLink class="p-4 rounded-xl shadow-xl" to="/posts">Go to Post</RouterLink>
    <custom-button
      class="p-4 rounded-xl shadow-xl"
      @click="$router.push('/store-posts')"
      title="Go to StorePosts"
    />
    <custom-button
      class="p-4 rounded-xl shadow-xl"
      @click="$router.push('/composition')"
      title="Go to Composition"
    />
  </nav>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'custom-nav',
  components: {
    RouterLink,
  },
}
</script>
