<template>
  <div class="container">
    <div class="title">登录</div>
    <div class="desc">请不要将账号外借，</div>
    <div class="desc">频繁的异地登录行为会导致账号收回，</div>
    <div class="desc">本网站的内容仅供您个人而非商业性使用。</div>
    <div class="main">
      <el-input
        v-model="account"
        placeholder="请输入账号"
        size="large"
      />
      <el-input
        v-model="password"
        placeholder="请输入密码"
        type="password"
        size="large"
        show-password
      />
      <el-button
        size="large"
        type="primary"
        :loading="loading"
        @click="handleSubmit"
      >
        确认
      </el-button>
    </div>
    <div class="right-circle">
      <div class="circle one"></div>
      <div class="circle two"></div>
      <div class="circle three"></div>
    </div>
    <div class="left-circle">
      <div class="circle one"></div>
      <div class="circle two"></div>
      <div class="circle three"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import request from '../requests'
import isExpire from '../utils'

let account = ref('')
let password = ref('')
let loading = ref(false)
const router = useRouter();
const handleSubmit = () => {
  if (!account.value || !password.value) {
    ElMessage.error('请输入帐号和密码')
    return;
  }
  loading.value = true;
  request().then((res) => {
    const accountData = res.find((d) => d.account === account.value);
    if (!accountData) {
      ElMessage.error('该帐号不存在')
      return;
    }
    if (accountData.password !== password.value) {
      ElMessage.error('密码输入错误')
      return;
    }
    if (isExpire(accountData.start,accountData.day)) {
      ElMessage.error('该帐号已过期')
      return;
    }
    const key = window.btoa(JSON.stringify({a:accountData.start,b:accountData.day}));
    localStorage.setItem('_initial_px',key)
    router.push({
      name: 'Home'
    })
  })
  .finally(() => {
    loading.value = false;
  })
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0px 30px;
  position: relative;
  overflow: hidden;
  .title {
    margin-bottom: 16px;
    font-size: 28px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 5px;
  }
  .desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.35);
    white-space: nowrap;
  }
  .main {
    margin-top: 25px;
    .el-input {
      margin-bottom: 20px;
    }
    .el-button {
      margin-top: 5px;
      width: 100%;
    }
  }
  .right-circle {
    position: absolute;
    top: -96px;
    right: -120px;
    width: 240px;
    height: 240px;
    .circle {
      position: absolute;
      width: 240px;
      height: 240px;
      border-radius: 50%;
      opacity: 0.8;
      &.one {
        background-color: #fc9b8a;
        height: 220px;
        right: 30px;
      }
      &.two {
        background-color: #fee0c8;
        width: 200px;
        height: 240px;
        top: 35px;
        left: 21px;
      }
      &.three {
        width: 220px;
        height: 260px;
        background-color: #febc90;
        opacity: 1;
      }
    }
  }
  .left-circle {
    position: absolute;
    bottom: -54px;
    left: -120px;
    width: 180px;
    height: 180px;
    .circle {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      opacity: 0.8;
      &.one {
        background-color: #40E0D080;
        height: 170px;
        left: 30px;
      }
      &.two {
        background-color: #a1e4e6;
        width: 140px;
        height: 200px;
        bottom: 35px;
        right: 21px;
      }
      &.three {
        width: 215px;
        height: 240px;
        right: -10px;
        bottom: -32px;
        background-color: #c4f1f6;
        opacity: 1;
      }
    }
  }
}
</style>