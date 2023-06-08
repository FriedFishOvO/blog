<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import InfoCard from '../components/info-card.vue'
import ArticleCard from '../components/article-card.vue'

const hotArticle = reactive({
    list: [] as any
})

onMounted(async () => {
    const resp = await axios.get('/article/hotArticleList')
    hotArticle.list = resp.data.data
})
</script>

<template>
    <el-main>
        <el-row>
            <el-col :span="7" class="left">
                <info-card></info-card>
            </el-col>
            <el-col :span="15" class="right">
                <el-divider class="divider">热门博客</el-divider>
                <el-space direction="vertical">
                    <article-card v-for="item in hotArticle.list" :id="item.id" :title="item.title" :summary="item.summary"
                        :categoryName="item.categoryName" :thumbnail="item.thumbnail" :viewCount="item.viewCount"
                        :createTime="item.createTime" :categoryId="item.categoryId"></article-card>
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

.left {
    display: flex;
    justify-content: right;
}

.right {
    margin-left: 20px;
}
</style>