<script setup lang="ts">
import { ref } from 'vue';

const cover = ref('https://picsum.photos/1920/1080')
</script>

<template>
    <el-card class="box-card" shadow="hover">
        <el-row>
            <!-- 封面 -->
            <el-col :span="8">
                <el-image :src="cover"></el-image>
            </el-col>
            <!-- 简略内容 -->
            <el-col :span="16">
                <el-row style="margin-left:20px">
                    <el-text class="title">数据结构与算法A实验八排序</el-text>
                </el-row>
                <el-row class="row">
                    <el-space>
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        <el-text>2021年12月13日</el-text>
                    </el-space>

                    <el-divider direction="vertical" />

                    <!-- 阅读数 -->
                    <el-space>
                        <el-icon>
                            <View />
                        </el-icon>
                        <el-text>504</el-text>
                    </el-space>

                    <el-divider direction="vertical" />

                    <!-- 评论数 -->
                    <el-space>
                        <el-icon>
                            <ChatDotSquare />
                        </el-icon>
                        <el-text>8</el-text>
                    </el-space>

                </el-row>
                <el-row class="row">
                    <el-text size="large">炸鱼OvO写的数据结构博客。</el-text>
                </el-row>
                <el-row class="row">
                    <el-space>
                        <el-tag>Tag 1</el-tag>
                        <el-tag class="ml-2" type="success">Tag 2</el-tag>
                        <el-tag class="ml-2" type="info">Tag 3</el-tag>
                        <el-tag class="ml-2" type="warning">Tag 4</el-tag>
                        <el-tag class="ml-2" type="danger">Tag 5</el-tag>
                    </el-space>
                </el-row>
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped>
.box-card {
    width: 900px;
    height: 222.4px;
}

.row {
    margin: 20px 20px;
}

.title {
    font-size: 30px;
}
</style>