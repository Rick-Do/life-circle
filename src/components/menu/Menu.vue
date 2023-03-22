<template>
  <a-menu :selectedKeys="currentKey" style="height: 100%; border-right: 0" mode="inline" theme="light">
    <a-sub-menu v-for="item in menus" :key="item.menuId">
      <template #title>
        <span>{{item.menuName}}</span>
      </template>
      <a-menu-item v-for="sub in item.children" :key="sub.menuId" @click="click(sub)">
        {{sub.menuName}}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts" setup>
import {useMenu} from "@/components/menu/useMenu"
const { menus, click, currentKey} = useMenu();
</script>

<style scoped lang="less">



</style>