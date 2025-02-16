<template>
  <div
    class="relative group overflow-hidden text-white h-[56px] max-w-[700px] flex gap-3 items-center rounded-md w-10/12 min-h-10 bg-blue-500"
  >
    <p class="flex items-center justify-between grow py-4 pl-4">
      <span class="max-w-[150px] truncate">
        <b>Title: </b>
        {{ post.title }}
      </span>
      <span class="max-w-[200px] truncate">{{ post.body }}</span>
    </p>
    <div
      class="transition-all flex transition-750 h-full translate-x-[120px] group-hover:translate-x-[0px]"
    >
      <custom-button
        type="button"
        @click="
          () => {
            $router.push(`/post/:${post.id}`)
          }
        "
        title="Open"
        class="w-14 transform rounded-l-md h-full flex items-center justify-center text-white bg-sky-500 text-[12px]"
      />
      <div class="w-[2px] h-full bg-white"></div>
      <custom-button
        type="button"
        @click="deletePost"
        title="X"
        class="w-14 transform rounded-r-md h-full flex items-center justify-center text-white bg-red-500 text-[12px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { IPost } from './PostList.vue'

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  methods: {
    deletePost() {
      console.log('delete in post', this.post)
      this.$emit('deletePost', this.post)
    },
  },
})
</script>

<!-- <template>
  <div
    class="border border-blue-600 text-white max-w-[400px] rounded-md p-4 w-10/12 min-h-10 bg-blue-500"
  >
    <p class="flex items-center justify-between">
      <span>
        <b>Name: </b>
        {{ post.title }}
      </span>
      <span>{{ post.body }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface IPost {
  title: string
  body: string
  id: number
}
export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
})
</script> -->
