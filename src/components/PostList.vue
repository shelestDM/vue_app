<template>
  <div>
    <div v-if="posts.length > 0">
      <TransitionGroup name="post-list" tag="ul" class="flex flex-col gap-5 items-center py-5">
        <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @deletePost="$emit('deletePost', post)"
        />
      </TransitionGroup>
    </div>
    <Transition>
      <h2 v-if="!posts.length" class="w-fit text-[20px] text-green-600 mx-auto">
        No posts for you :(
      </h2>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import PostItem from './PostItem.vue'

export interface IPost {
  title: string
  body: string
  id: number
}
export default defineComponent({
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
  emits: ['deletePost'],
})
</script>

<style scoped>
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.v-enter-active {
  transition: opacity 0.5s 0.5s ease;
}
.v-leave-active {
  opacity: 0;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
