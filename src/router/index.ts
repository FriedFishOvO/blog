import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Archive from '../views/Archive.vue'
import Category from '../views/Category.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import CategoryDetail from '../views/CategoryDetail.vue'

const routes = [
    {
        path: '/',
        name: '主页',
        component: Homepage
    },
    {
        path: '/category',
        name: '分类',
        component: Category
    },
    {
        path: '/archive',
        name: '归档',
        component: Archive
    },
    {
        path: '/article/:id',
        name: '文章详情',
        component: ArticleDetail,
        props: true
    },
    {
        path: '/category/:id',
        name: '分类详情',
        component: CategoryDetail,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.afterEach((to, from) => {
    document.title = to.name?.toString() || '' //网页标题为跳转的路由的名称，没有则为设置的默认值
})

export default router