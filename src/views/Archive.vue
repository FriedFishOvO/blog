<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import ArticleCard from '../components/article-card.vue';

const article = reactive({
    list: [] as any
})

onMounted(async () => {
    const resp = await axios.get('/article/all')
    article.list = resp.data.data
})
</script>

<template>
    <el-main class="main">
        <el-timeline style="margin-top: 20px;">
            <el-timeline-item center>
                <el-text style="font-size: 30px; font-weight: bold;">文章总数: {{ article.list.length }}</el-text>
            </el-timeline-item>
            <el-timeline-item v-for="item in article.list" :timestamp="item.createTime" placement="top">
                <article-card :title="item.title" :viewCount="item.viewCount" :createTime="item.createTime"
                    :thumbnail="item.thumbnail" :categoryName="item.categoryName" :summary="item.summary"></article-card>
            </el-timeline-item>
        </el-timeline>

        <el-backtop :right="30" :bottom="75" />
    </el-main>
</template>

<style scoped>
.main {
    display: flex;
    justify-content: center;
}
</style>