import axios from "axios";
import { onMounted, ref } from "vue"

export function usePosts(limit: number, page: number) {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostLoading = ref(true);
    const fetching = async () => {
        console.log('dasdasd!!!');
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page,
                    _limit: limit,
                },
            })
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data;
            console.log(posts.value);
        } catch (e) {
            console.log('Error', e)
        } finally {
            isPostLoading.value = false
            console.log('finaly', isPostLoading.value);
        }
    }
    onMounted(fetching);

    return {
        posts, isPostLoading, totalPages
    }
}