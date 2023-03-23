<template>
  <a-popover>
    <template #content>
      <a-list item-layout="horizontal" :data-source="dataList">
        <template #rederItem="{item}">
          <a-list-item>
            <a-list-item-meta :description="item.content">
              <template #title>{{item.title}}</template>
              <template #avatar>
                <a-avatar :src="item.avatar"></a-avatar>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </template>
    <template #title>
      {{title}}
    </template>
    <div class="notice-icon">
      <a-badge dot >
        <IconPark icon="remind" stroke-width="3" size="17" ></IconPark>
      </a-badge>
    </div>
  </a-popover>
</template>

<script lang="ts" setup>
import IconPark from "@/components/common/IconPark.vue"

defineProps<{
  title: string
  dataList: any[]
}>()
</script>

<style scoped lang="less">
  .notice-icon {
    padding-top: 3px;
    margin-right: 40px;
    height: 60px;
  }
</style>