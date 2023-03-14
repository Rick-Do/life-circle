<template>
  <a-layout>
    <a-layout-header>
      <a-image :width="50" :src="Logo"></a-image>
    </a-layout-header>
  </a-layout>

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