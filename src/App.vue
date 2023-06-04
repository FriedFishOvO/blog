<script setup lang="ts">
import TheHeader from './components/the-header.vue'
import TheFooter from './components/the-footer.vue'
import InfoCard from './components/info-card.vue';
import ArticleCard from './components/article-card.vue';
</script>

<template>
    <el-container>
        <el-header class="header">
            <the-header></the-header>
        </el-header>

        <el-main>
            <el-row>
                <el-col :span="8" :style="{ display: 'flex', justifyContent: 'center' }">
                    <info-card></info-card>
                </el-col>
                <el-col :span="16">
                    <el-divider class="divider">推荐博客</el-divider>
                    <el-space direction="vertical">
                        <article-card></article-card>
                        <article-card></article-card>
                        <article-card></article-card>
                        <article-card></article-card>
                        <article-card></article-card>
                    </el-space>
                </el-col>
            </el-row>
        </el-main>

        <el-footer class="footer">
            <the-footer></the-footer>
        </el-footer>
    </el-container>
</template>

<style scoped>
.header {
    background: linear-gradient(to right, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    height: 50px;
    /* opacity: 50%; */
}

.footer {
    background: linear-gradient(to right, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    height: 50px;
}

.divider {
    width: 900px;
}
</style>