<template>
  <div style="width: 300px; height: 300px; position: relative">
    <img :width="200" :src="Logo" style="height: 200px; width: 200px" />

  </div>
</template>

<script lang="ts" setup>
import Logo from "@/tv/assets/logo.png";
</script>

<style scoped lang="less">
 .logo {
   width: 60px;
   height: 60px;
  }
</style>