<template>
  <form class="flex flex-col items-center gap-3 w-[400px] max-w-[500px] bg-white p-10 rounded-md">
    <h1 class="text-center text-green-500">Creating Post Form</h1>
    <custom-input
      v-focus
      input-type="text"
      placeholder="Post title"
      class="border border-blue-300 outline-none rounded-md py-2 px-4 w-full"
      v-model="post.title"
    />
    <custom-input
      v-model="post.body"
      input-type="text"
      placeholder="Post body"
      class="border border-blue-300 outline-none rounded-md py-2 px-4 w-full"
    />
    <custom-button
      type="button"
      title="Add post"
      @click="addPost"
      class="text-white text-sm bg-pink-500 p-3 rounded-md"
    />
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        id: 0,
      },
    }
  },
  methods: {
    addPost() {
      this.post.id = Date.now()
      this.$emit('createPost', this.post)
      this.clearForm()
    },
    clearForm() {
      this.post = {
        title: '',
        body: '',
        id: 0,
      }
    },
  },
}
</script>

<!-- <template>
  <div>
    <form @submit.prevent class="mx-auto py-5 flex flex-col items-center gap-3 max-w-[400px]">
      <h1 class="text-center text-green-500">Creating Post Form</h1>
      <input
        class="border border-blue-300 outline-none rounded-md py-2 px-4 w-full"
        type="text"
        placeholder="Post title"
        v-model="post.title"
      />
      <input
        class="border border-blue-300 outline-none rounded-md py-2 px-4 w-full"
        type="text"
        placeholder="Post description"
        v-model="post.body"
      />
      <button
        type="button"
        @click="createPost"
        class="text-white text-sm bg-pink-500 p-3 rounded-md"
      >
        Add post
      </button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        id: 0,
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('createPost', this.post)
      this.clearForm()
    },
    clearForm() {
      this.post = {
        title: '',
        body: '',
        id: 0,
      }
    },
  },
}
</script>

<style scoped></style> -->
