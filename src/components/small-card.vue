<template>
    <el-card class="box-card" shadow="hover">
        <el-row>
            <!-- 封面 -->
            <el-col :span="8">
                <el-link :underline="false" :href="'/article/' + id">
                    <el-image :src="thumbnail" class="image"></el-image>
                </el-link>
            </el-col>

            <!-- 简略内容 -->
            <el-col :span="13">
                <!-- 文章标题 -->
                <el-row style="margin-left:20px">
                    <el-link :underline="false" :href="'/article/' + id" class="title">{{ title }}</el-link>
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
                    <el-link :underline="false" :href="'/article/' + id">{{ summary }}</el-link>
                </el-row>
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped>
.box-card {
    width: 569.2px;
    height: 100px;
}
</style>