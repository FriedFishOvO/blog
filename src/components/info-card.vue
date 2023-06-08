<script setup lang="ts">
// const circleUrl='../assets/image/avatar.jpg'
</script>

<template>
    <el-card class="box-card" shadow="hover">
        <!-- 头像 -->
        <el-row justify="center">
            <el-avatar :size="110" src="/assets/image/avatar.jpg" />
        </el-row>

        <!-- 昵称 -->
        <el-row justify="center">
            <h1>炸鱼OvO</h1>
        </el-row>

        <!-- 文章数、分类数、标签数 -->
        <el-row justify="center">
            <el-text>文章数<br> 18</el-text>
            <el-divider direction="vertical" />
            <el-text>分类数<br> 18</el-text>
            <el-divider direction="vertical" />
            <el-text>标签数<br> 18</el-text>
        </el-row>

        <!-- 个人社交网站地址 -->
        <el-row>
            <el-icon>
            </el-icon>
        </el-row>
    </el-card>
</template>

<style scoped>
.box-card {
    width: 300px;
    height: 336.4px;
    margin-top: 20px;
}
</style>