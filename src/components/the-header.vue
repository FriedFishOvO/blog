<template>
    <el-header class="header" height="50px">
        <el-row>
            <el-col :span="3">
                <el-text>FriedFishOvO</el-text>
            </el-col>

            <el-col :span="2">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <a href="">
                    <router-link to="/">首页</router-link>
                </a>
            </el-col>

            <el-col :span="2">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <a href="">
                    <router-link to="/archive">归档</router-link>
                </a>
            </el-col>

            <el-col :span="2">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <a href="">
                    <router-link to="/category">分类</router-link>
                </a>
            </el-col>

            <el-col :span="2">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <a href="">
                    <router-link to="/tag">标签</router-link>
                </a>
            </el-col>

            <el-col :span="2">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <a href="">
                    <router-link to="/about">关于我</router-link>
                </a>
            </el-col>
        </el-row>
    </el-header>
</template>

<style scoped>
.header {
    background: linear-gradient(to right, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

.el-col {
    margin-top: 15px;
}

a {
    text-decoration: none;
    color: black;
    position: relative;
}

/* 下划线（左进右出） */
a::after {
    content: '';
    width: 100%;
    height: 1.5px;
    /* currentColor可以获取当前元素或父元素的color */
    background-color: currentColor;
    position: absolute;
    left: 0;
    bottom: -5px;
    /* 沿x轴缩放至隐藏 */
    transform: scaleX(0);
    /* 设置变换圆点为右 */
    transform-origin: right;
    /* 设置变换时的过渡 */
    transition: transform 0.3s ease-out;
}

a:hover::after {
    /* 沿x轴缩放至显示 */
    transform: scaleX(1);
    /* height: 2px; */
    /* 设置变换圆点为左 */
    transform-origin: left;
}
</style>