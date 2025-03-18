import type { IPost } from "@/components/PostList.vue";
import { computed, ref, type Ref } from "vue";

export default function useSearchedPosts(sortedPosts: Ref<IPost[], never[]>) {
    const searchQuery = ref('');

    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
        )
    });

    return {
        searchQuery,
        sortedAndSearchedPosts
    }
}