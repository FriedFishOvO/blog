<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const category = reactive({
    list: [] as any
})

const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    const resp = await axios.get('/category/getCategoryList')
    category.list = resp.data.data
    isLoading.value = false
})
</script>

<template>
    <el-main class="main">

        <el-card class="categoryCard" shadow="hover">

            <el-row style="display: flex; justify-content: center;">
                <el-text style="font-size: 30px; font-weight: bold;">文章分类</el-text>
            </el-row>

            <!-- 分类列表 -->
            <el-space class="space" wrap>
                <el-link v-if="!isLoading" v-for="item in category.list" :href="'/category/' + item.id" :underline="false">
                    <el-card class="category" shadow="hover">
                        <el-divider direction="vertical" class="divider"></el-divider>
                        <el-text class="name">{{ item.name }}</el-text>

                        <el-row>
                            <el-icon class="icon">
                                <Collection />
                            </el-icon>
                            <el-text class="count">{{ item.count }}</el-text>
                        </el-row>
                    </el-card>
                </el-link>
            </el-space>

        </el-card>

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
    width: 1220px;
    margin-top: 20px;
}

.category {
    height: 131px;
    width: 369.862px;
    border-radius: 30px;
    background-color: cornflowerblue;
}

.space {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
}

.name {
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-left: 10px;
}

.divider {
    border-width: 5px;
    height: 30px;
    margin-bottom: 10px;
    color: white;
}

.icon {
    color: white;
    font-size: 25px;
    margin-top: 20px;
    margin-left: 3px;
}

.count {
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 15px;
}
</style>