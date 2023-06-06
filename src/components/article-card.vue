<script setup lang="ts">
defineProps({
    title: String,
    summary: String,
    categoryName: String,
    thumbnail: String,
    viewCount: Number,
    createTime: Date
})
</script>

<template>
    <el-card class="box-card" shadow="hover">
        <el-row>
            <!-- 封面 -->
            <el-col :span="8">
                <!-- <el-image :src="cover"></el-image> -->
            </el-col>

            <!-- 简略内容 -->
            <el-col :span="13">
                <!-- 文章标题 -->
                <el-row style="margin-left:20px">
                    <el-link :underline="false" href="/asd" class="title">{{ title }}</el-link>
                </el-row>

                <el-row class="row">
                    <el-space>
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        <el-text>{{ createTime }}</el-text>
                    </el-space>

                    <el-divider direction="vertical" />

                    <!-- 阅读数 -->
                    <el-space>
                        <el-icon>
                            <View />
                        </el-icon>
                        <el-text>{{ viewCount }}</el-text>
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

                <!-- 文章简介 -->
                <el-row class="row">
                    <el-link :underline="false">{{ summary }}</el-link>
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

            <!-- 文章分类 -->
            <el-col :span="3">
                <el-button class="button" size="large" round>{{ categoryName }}</el-button>
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

.button {
    margin-top: 5px;
    color: white;
    background-color: cornflowerblue;
}
</style>