<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import ArticleCard from '../components/article-card.vue';

const category = reactive({
    list: []
})

onMounted(async () => {
    const resp = await axios.get('/category/getCategoryList')
    category.list = resp.data.data
})
</script>

<template>
    <el-main class="main">
        <el-row>
            <!-- 分类列表部分 -->
            <el-card class="categoryCard" shadow="hover">
                <el-row style="display: flex; justify-content: center;">
                    <h1>文章分类</h1>
                </el-row>

                <el-row>
                    <el-space wrap>
                        <el-link v-for="item in category.list" :underline="false">
                            <el-card shadow="hover" class="category">
                                {{ item.name }}
                            </el-card>
                        </el-link>
                    </el-space>
                </el-row>
            </el-card>
        </el-row>

        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>

        <el-backtop :right="30" :bottom="75" />
    </el-main>
</template>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.categoryCard {
    display: flex;
    justify-content: center;
    width: 1138.4px;
}

.category {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100px;
}
</style>