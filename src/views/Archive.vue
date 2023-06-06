<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import ArticleCard from '../components/article-card.vue';

const article = reactive({
    list: []
})

onMounted(async () => {
    const resp = await axios.get('/article/all')
    article.list = resp.data.data
})
</script>

<template>
    <el-main class="main">
        <el-timeline>
            <el-timeline-item center>
                <el-text style="font-size: 30px;">文章总数: {{ article.list.length }}</el-text>
            </el-timeline-item>
            <el-timeline-item v-for="item in article.list" timestamp=item.createTime placement="top">
                <article-card :title="item.title" :viewCount="item.viewCount" :createTime="item.createTime"
                :thumbnail="item.thumbnail" :categoryName="item.categoryName" :summary="item.summary"></article-card>
            </el-timeline-item>
        </el-timeline>
    </el-main>
</template>

<style scoped>
.main{
    display: flex;
    justify-content: center;
}
</style>