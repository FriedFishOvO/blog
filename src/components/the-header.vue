<template>
    <el-header class="header" height="50px">
        <el-row>
            <el-col :span="3">
                <el-text>FriedFishOvO</el-text>
            </el-col>

            <el-col :span="2">
                <el-link class="animated-link" type="primary" :underline="false" href="/">
                    <el-icon class="el-icon--right">
                        <HomeFilled />
                    </el-icon>首页
                </el-link>
            </el-col>

            <el-col :span="2">
                <el-link class="animated-link" :underline="false" href="/archive">
                    <el-icon class="el-icon--right">
                        <HomeFilled />
                    </el-icon>归档
                </el-link>
            </el-col>

            <el-col :span="2">
                <el-link class="animated-link" :underline="false" href="/category">
                    <el-icon class="el-icon--right">
                        <HomeFilled />
                    </el-icon>分类
                </el-link>
            </el-col>

            <el-col :span="2">
                <el-link class="animated-link" :underline="false">
                    <el-icon class="el-icon--right">
                        <HomeFilled />
                    </el-icon>标签
                </el-link>
            </el-col>

            <el-col :span="2">
                <el-link class="animated-link" :underline="false">
                    <el-icon class="el-icon--right">
                        <HomeFilled />
                    </el-icon>关于我
                </el-link>
            </el-col>
        </el-row>
    </el-header>
</template>

<style scoped>
.header {
    background: linear-gradient(to right, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    border-radius: 50px;
}

.el-col {
    margin-top: 15px;
}

.animated-link {
    position: relative;
}

.animated-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #409eff;
    transition: all 0.3s ease-out;
}

.animated-link:hover::before {
    width: 100%;
}

.animated-link[type='primary']::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #409eff;
    transition: all 0.3s ease-out;
    transform: scaleX(0);
}

.animated-link[type='primary']:hover::after {
    transform: scaleX(1);
}
</style>