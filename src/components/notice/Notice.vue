<template>
  <a-popover>
    <template #content>
    </template>
    <template #title>

    </template>
    <div class="notice-icon">
      <IconPark icon="remind" stroke-width="3" size="16" ></IconPark>
      <a-badge dot class="badge-status-attr" ></a-badge>
    </div>
  </a-popover>
</template>

<script lang="ts" setup>
import IconPark from "@/components/common/IconPark.vue"
</script>

<style scoped lang="less">
  .notice-icon {
    padding-top: 4px;
    margin-right: 20px;
  }
  .badge-status-attr {

  }
</style>