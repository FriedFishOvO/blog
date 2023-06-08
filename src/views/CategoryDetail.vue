<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import SmallCard from '../components/small-card.vue';
import axios from 'axios';
const props = defineProps({
    id: Number
})

const article = reactive({
    list: [] as any
})

const categoryName = ref('')

onMounted(async () => {
    if (props.id) {
        const resp = await axios.get(`/category/${props.id}`)
        article.list = resp.data.data
        await axios.get(`/category/name/${props.id}`).then((res) => {
            categoryName.value = res.data.data
        })
    }
})
</script>

<template>
    <el-main class="main">
        <el-card class="card">
            <el-text class="name">分类 - {{ categoryName }}</el-text>

            <el-space class="space" wrap>
                <small-card v-for="item in article.list" :id="item.id" :title="item.title" :createTime="item.createTime"
                    :summary="item.summary" :viewCount="item.viewCount" :thumbnail="item.thumbnail"></small-card>
            </el-space>

        </el-card>
    </el-main>
</template>

<style scoped>
.main {
    display: flex;
    justify-content: center;
}

.card {
    width: 1220px;
    border-radius: 30px;
}

.name {
    font-size: 30px;
    font-weight: bold;
    margin-left: 5px;
}

.space {
    margin-top: 30px;
}
</style>