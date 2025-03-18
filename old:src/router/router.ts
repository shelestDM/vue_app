import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../pages/MainPage.vue';
import PostPage from '@/pages/PostPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import CurrentPostPage from '@/pages/CurrentPostPage.vue';
import StorePostPage from '@/pages/StorePostPage.vue';
import CompositionPostPage from '@/pages/CompositionPostPage.vue';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/post/:id',
        component: CurrentPostPage
    },
    {
        path: '/store-posts',
        component: StorePostPage
    },
    {
        path: '/composition',
        component: CompositionPostPage
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;