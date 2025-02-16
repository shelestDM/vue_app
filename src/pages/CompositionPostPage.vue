<template>
  <div>
    <h2 class="text-blue-600 text-center my-8 text-[25px]">Posts page {{ isPostLoading }}</h2>
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
    <PostList v-show="!isPostLoading" :posts="sortedAndSearchedPosts" />
    <!-- <div v-intersection="loadMorePosts" class="h-10 w-full bg-black"></div> -->
  </div>
  <custom-modal v-model:show="isPostLoading">
    <CustomLoader title="The posts are loading..." />
  </custom-modal>
  <!-- <custom-modal v-model:show="isModalVisible">
    <PostForm @createPost="addNewPost" />
  </custom-modal> -->
  <!-- <custom-button
    title="Add Post"
    class="fixed bottom-10 right-10 rounded-full bg-green-500 text-white w-20 h-20"
    @click="toggleModal"
  /> -->
</template>

<script lang="ts">
// import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import CustomLoader from '@/components/UI/CustomLoader.vue'
import type { IOption } from '@/components/UI/CustomSelect.vue'
import { usePosts } from '@/hooks/usePosts'
import useSearchedPosts from '@/hooks/useSearchedPosts'
import useSortedPosts from '@/hooks/useSortedPosts'

export default {
  components: {
    PostList,
    // PostForm,
    CustomLoader,
  },
  data() {
    return {
      isModalVisible: false as boolean,
      sortOptions: [
        { value: 'title', name: 'Sort by title' },
        { value: 'body', name: 'Sort by body' },
        { value: 'id', name: 'Sort by id' },
      ] as IOption[],
    }
  },
  setup() {
    const { posts, totalPages, isPostLoading } = usePosts(10, 1)

    const { sortedPosts, selectedSort } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSearchedPosts(sortedPosts)
    console.log('posts', posts.value)
    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
  },
}
</script>
