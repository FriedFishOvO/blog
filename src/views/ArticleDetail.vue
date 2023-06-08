<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import InfoCard from '../components/info-card.vue';
import ContentCard from '../components/content-card.vue'
import axios from 'axios';

const props = defineProps({
    id: String
})

const article = reactive({
    data: {} as any
})

const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    const resp = await axios.get(`/article/${props.id}`)
    article.data = resp.data.data
    isLoading.value = false
})
</script>

<template>
    <el-main>
        <el-row>
            <el-col :span="7" class="left">
                <info-card></info-card>
            </el-col>

            <el-col :span="15" class="right">
                <!-- <el-empty v-if="loading" description="加载中.."></el-empty> -->
                <content-card v-if="!isLoading" :title="article.data.title" :createTime="article.data.createTime"
                    :updateTime="article.data.updateTime" :viewCount="article.data.viewCount"
                    :thumbnail="article.data.thumbnail" :content="article.data.content"
                    :categoryName="article.data.categoryName"></content-card>
            </el-col>
        </el-row>

        <el-backtop :right="30" :bottom="75" />
    </el-main>
</template>

<style scoped>
.left {
    display: flex;
    justify-content: right;
}

.right {
    margin-left: 20px;
}
</style>