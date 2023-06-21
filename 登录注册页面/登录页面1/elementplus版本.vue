<!-- 登录组件 -->
<template>
    <div class="content">
        <div class="login-content">
            <a href="" class="banner-box"></a>
            <el-form :model="loginModel" class="login-box">
                <h1>账号登录</h1>
                <el-form-item>
                    <el-input type="text" v-model="loginModel.username" placeholder="账号" />
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="loginModel.password" placeholder="密码" />
                </el-form-item>
                <el-form-item class="code-box">
                    <el-input v-model="loginModel.code" placeholder="验证码">
                        <template #append>.com</template>
                    </el-input>
                </el-form-item>
                <button class="login-btn">登录</button>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

//表单绑定的数据域
const loginModel = reactive<any>({
    username: '',
    password: '',
    code: '',
    uuid: '',
})
</script>

<style scoped lang="scss">
.content {
    width: 100vw;
    height: 100vh;
    /* background-color: aqua; */
    background: url(../../assets/bg.jpg) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-content {
    position: relative;
    width: 800px;
    height: 360px;
    background-color: rgb(52, 0, 73);
    border-radius: 30px;
    padding: 30px;
}

.banner-box {
    display: inline-block;
    width: 500px;
    height: 100%;
    background: url(../../assets/bg.jpg) no-repeat;
    background-size: cover;
    border-radius: 20px 0 0 20px;
}

.login-box {
    width: 330px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 30px 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-box>h1 {
    font-size: 36px;
    margin: 60px 0;
    color: #fff;
}

:deep(.el-form-item) {
    height: 36px;
    background: white;
    border-radius: 36px;
    color: #000;
}

:deep(.el-input__wrapper) {
    background-color: transparent;
    box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
}

:deep(.el-input) {
    margin-bottom: 20px;
    width: 240px;
    height: 36px;
    border: none;
    outline: none;
    font-size: 18px;
}

:deep(.code-box .el-input-group__append) {
    border-radius: 0px 36px 36px 0px;
    border-left: 1px solid #ccc;
}

.login-btn {
    margin-top: 20px;
    width: 200px;
    height: 40px;
    background-color: rgb(122, 0, 223);
    border: none;
    border-radius: 40px;
    color: #fff;
    font-size: 18px;
}

@media screen and (max-width: 900px) {
    .login-content {
        margin: 0 30px;
    }

    .banner-box {
        border-radius: 20px;
    }

    .login-box {
        background-color: rgba(52, 0, 73, 0.5);
    }
}

@media screen and (max-width: 600px) {
    .content {
        background: url(../../assets/bg.jpg) no-repeat center;
    }

    .login-content {
        background-color: transparent;
    }

    .banner-box {
        display: none;
    }

    .login-box {
        position: initial;
        margin: -40px auto;
        width: 200px;
        height: 400px;
        background-color: transparent;
        .login-btn{
            width: 240px;
            margin-top: 0px;
        }
    }
}
</style>