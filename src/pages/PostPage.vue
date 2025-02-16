<template>
  <div>
    <h2 class="text-blue-600 text-center my-8 text-[25px]">Posts page</h2>
    <div class="w-fit my-10 mx-auto flex items-center gap-4">
      <custom-input
        v-focus
        inputType="text"
        v-model="searchQuery"
        class="border border-blue-500 p-[6px] rounded-md"
        placeholder="Search by title"
      />
      <custom-select v-model:option="selectedSort" :options="sortOptions" />
    </div>
    <PostList v-show="!isLoaderVisible" :posts="sortedPosts" @deletePost="deletePost" />
    <!-- <PagesList :pages="totalPages" :currentPage="page" /> -->
    <!-- ref="observed_line" -->
    <div v-intersection="loadMorePosts" class="h-10 w-full bg-black"></div>
  </div>
  <custom-modal v-model:show="isLoaderVisible">
    <CustomLoader title="The posts are loading..." />
  </custom-modal>
  <custom-modal v-model:show="isModalVisible">
    <PostForm @createPost="addNewPost" />
  </custom-modal>
  <custom-button
    title="Add Post"
    class="fixed bottom-10 right-10 rounded-full bg-green-500 text-white w-20 h-20"
    @click="toggleModal"
  />
</template>

<script lang="ts">
import axios from 'axios'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import CustomLoader from '@/components/UI/CustomLoader.vue'
import type { IOption } from '@/components/UI/CustomSelect.vue'

interface IPost {
  title: string
  body: string
  id: number
}
export default {
  components: {
    PostList,
    PostForm,
    CustomLoader,
  },
  data() {
    return {
      posts: [] as IPost[],
      isModalVisible: false as boolean,
      isLoaderVisible: false as boolean,
      selectedSort: '' as keyof IPost,
      searchQuery: '' as string,
      sortOptions: [
        { value: 'title', name: 'Sort by title' },
        { value: 'body', name: 'Sort by body' },
        { value: 'id', name: 'Sort by id' },
      ] as IOption[],
      page: 1 as number,
      limit: 10 as number,
      totalPages: 0 as number,
    }
  },
  methods: {
    addNewPost(post: IPost) {
      console.log('post', post)
      this.posts.unshift(post)
      this.isModalVisible = false
    },
    deletePost(post: IPost) {
      this.posts = this.posts.filter(({ id }) => post.id !== id)
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible
    },
    async fetchPosts() {
      this.isLoaderVisible = true
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (e) {
        console.log('Error', e)
      } finally {
        this.isLoaderVisible = false
      }
    },
    async loadMorePosts() {
      this.page++
      console.log('PAGE', this.page)
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        console.log('Error', e)
      } finally {
      }
    },
    // changePage(page: number) {
    //   this.page = page
    // },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        String(post1[this.selectedSort])?.localeCompare(String(post2[this.selectedSort])),
      )
    },
    // filteredPosts() {
    //   return this.sortedPosts.filter((post) =>
    //     post.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
    //   )
    // },
  },
  watch: {
    // page() {
    //   console.log('page was change')
    //   // console.log(newPage, oldPage)
    //   this.fetchPosts()
    // },
  },
  // watch: {
  //   selectedSort(newValue: keyof IPost) {
  //     this.posts.sort((post1, post2) => {
  //       return String(post1[newValue])?.localeCompare(String(post2[newValue]))
  //     })
  //   },
  // },
}
</script>
