<script setup lang="ts">
import TheHeader from './components/the-header.vue'
import TheFooter from './components/the-footer.vue'

</script>

<template>
    <el-container class="container" direction="vertical">
        <the-header></the-header>

        <router-view></router-view>

        <the-footer></the-footer>
    </el-container>
</template>