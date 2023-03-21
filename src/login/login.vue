<template>
  <div class="login">
    <div class="login-card">
      <div class="login-logo">
        <a-image :src="LogoDark"></a-image>
      </div>
      <a-form class="auth-box">
        <span class="sign-text">Sign In</span>
        <hr />
        <a-form-item name="username" :rules="[{required: true, message: '请输入用户名'}]">
          <a-input :value="username" placeholder="请输入用户名">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"></UserOutlined>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password :value="password" placeholder="请输入密码">
            <template #prefix>
              <LockOutlined class="site-form-item-icon"></LockOutlined>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox :checked="remember">记住我</a-checkbox>
          </a-form-item>
          <a class="login-form-forgot" href="">忘记密码？</a>
        </a-form-item>
        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="log-form-button">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoDark from "@/assets/images/logo-dark.png"
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
defineProps<{
  username: string,
  password: string,
  remember: boolean,
  disabled: boolean
}>()
</script>

<style scoped lang="less">
  .login {
    background-image: url("@/assets/images/backgroud.jpg");
    width: 100%;
    height: 100%;
    background-size: cover;
    font-family: "Open Sans", sans-serif;
  }
  .login-card {
    width: 450px;
    left: 38%;
    top: 20%;
    padding: 20px;
  }
  .login-logo {
    text-align: center;
  }
  .auth-box {
    background-color: #fff;
    border-radius: 8px;
    margin: 20px 0 0 0;
    padding: 20px;
    box-shadow: 0 2px 18px -2px black;
    .sign-text {
      font-weight: 500;
      color: #666666;
      font-size: 24px;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 0;
      border-top: 1px solid rgba(0,0,0,.1);
    }
    .login-form-forgot {
      float: right;
    }
    .log-form-button {
      width: 100%;
    }
  }
</style>