<template>
  <div class="login">
    <div class="login-card">
      <div class="login-logo">
        <a-image :src="LogoDark"></a-image>
      </div>
      <a-form class="auth-box">
        <span class="sign-text">Sign In</span>
        <hr />
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoDark from "@/assets/images/logo-dark.png"

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
  }
</style>