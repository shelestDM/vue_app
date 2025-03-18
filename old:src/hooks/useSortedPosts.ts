import type { IPost } from "@/components/PostList.vue";
import { computed, ref, type Ref } from "vue";

export default function useSortedPosts(posts: Ref<IPost[], never[]>) {
    const selectedSort = ref('' as keyof IPost);
    console.log('test', posts);
    const sortedPosts = computed(() => {
        return [...posts.value].sort((post1, post2) =>
            String(post1[selectedSort.value])?.localeCompare(String(post2[selectedSort.value])),
        )
    });

    return {
        sortedPosts,
        selectedSort
    }
}