<template>
    <el-header class="header">
        <el-space wrap>
            <div>
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <a href="">首页</a>
            </div>
            <div><el-icon>
                    <Management />
                </el-icon><a href="">归档</a></div>

            <a href="">分类</a>
            <a href="">标签</a>
            <a href="">关于我</a>
        </el-space>
    </el-header>
</template>

<style scoped>
a {
    margin: 14.6px;
    text-decoration: none;
    color: black;
    position: relative;
}

/* 下划线（左进右出） */
a::after {
    content: '';
    width: 100%;
    height: 2px;
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
    /* 设置变换圆点为左 */
    transform-origin: left;
}

.header {
    background: linear-gradient(to right, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    height: 50px;
}
</style>