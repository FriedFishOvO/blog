<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    id: Number,
    title: String,
    content: String,
    categoryId: Number,
    categoryName: String,
    thumbnail: String,
    viewCount: Number,
    isComment: String,
    createTime: Date,
    updateTime: Date,
});

const md = ref('')

onMounted(() => {
    if (props.content) {
        md.value = props.content
    }
})
</script>

<template>
    <el-card class="header" shadow="never" :style="{ backgroundImage: 'url(' + thumbnail + ')' }">
        <!-- 文章分类 -->
        <el-row style="display: flex; justify-content: right;">
            <el-link :underline="false" href="/" target="_blank">
                <el-card shadow="hover" class="categoryCard">
                    <el-text class="category">{{ categoryName }}</el-text>
                </el-card>
            </el-link>
        </el-row>

        <!-- 文章标签 -->
        <el-row style="display: flex; justify-content: center;">
            <el-space style="margin-top: 240px;">
                <el-tag>Tag 1</el-tag>
                <el-tag class="ml-2" type="success">Tag 2</el-tag>
                <el-tag class="ml-2" type="info">Tag 3</el-tag>
                <el-tag class="ml-2" type="warning">Tag 4</el-tag>
                <el-tag class="ml-2" type="danger">Tag 5</el-tag>
            </el-space>
        </el-row>
    </el-card>

    <el-card class="content" shadow="never">
        <!-- 标题 -->
        <el-row class="title">
            <el-text style="font-size: 30px; font-weight: bold;">{{ title }}</el-text>
        </el-row>

        <!-- 文章信息 -->
        <el-row class="info">
            <el-space>
                <!-- 发布时间 -->
                <el-card class="card">
                    <el-space>
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        <el-text style="color: white;">发布时间: {{ createTime }}</el-text>
                    </el-space>
                </el-card>

                <!-- 最后一次编辑时间 -->
                <el-card class="card">
                    <el-space>
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        <el-text style="color: white;">最后一次编辑时间: {{ updateTime }}</el-text>
                    </el-space>
                </el-card>

                <!-- 浏览量 -->
                <el-card class="card">
                    <el-space>
                        <el-icon>
                            <View />
                        </el-icon>
                        <el-text style="color: white;">浏览量: {{ viewCount }}</el-text>
                    </el-space>
                </el-card>
            </el-space>
        </el-row>

        <el-row style="margin-top: 20px;">
            <mavon-editor class="editor" v-model="md" :toolbarsFlag="false" :subfield="false" previewBackground="#ffffff"
                :boxShadow="false" defaultOpen="preview" />
        </el-row>
    </el-card>
    <el-card class="comment" shadow="never">
        <h1>评论</h1>
    </el-card>
</template>

<style scoped>
.header {
    width: 900px;
    height: 338px;
    margin-top: 20px;
    background-size: 900px;
    background-position: left top;
}

.content {
    width: 900px;
}

.comment {
    width: 900px;
}

.title {
    display: flex;
    justify-content: center;
}

.info {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.card {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cornflowerblue;
}

.categoryCard {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100px;
    background-color: cornflowerblue;
}

.category {
    font-size: 20px;
    color: white;
}

.editor {
    width: 100%;
}
</style>