<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import InfoCard from '../components/info-card.vue'
import ArticleCard from '../components/article-card.vue'

const hotArticle = reactive({
    list: []
})

onMounted(async () => {
    const resp = await axios.get('http://localhost:8080/api/article/hotArticleList')
    hotArticle.list = resp.data.data
})

console.log(hotArticle.list)
</script>

<template>
    <el-main>
        <el-row>
            <el-col :span="8" :style="{ display: 'flex', justifyContent: 'center' }">
                <info-card></info-card>
            </el-col>
            <el-col :span="16">
                <el-divider class="divider">推荐博客</el-divider>
                <el-space direction="vertical">
                    <article-card v-for="item in hotArticle.list" 
                    :title="item.title"
                    :summary="item.summary"
                    :category-name="categoryName"
                    :thumbnail="thumbnail"
                    :view-count="viewCount"
                    :create-time="createTime"></article-card>
                </el-space>
            </el-col>
        </el-row>

        <el-backtop :right="30" :bottom="75" />
    </el-main>
</template>

<style scoped>
.divider {
    width: 900px;
}
</style>