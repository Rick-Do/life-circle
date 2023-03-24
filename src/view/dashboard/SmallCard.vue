<template>
  <a-card size="default" class="card-small" :body-style="{padding: '15px 20px'}">
    <a-card-meta>
      <template #avatar>
        <IconPark icon="chart-pie" size="35" theme="filled" fill="#fff" class="card-icon"></IconPark>
      </template>
      <template #title>
        <span class="card-title">Use space</span>
      </template>
      <template #description>
        <span class="card-description">49/50GB</span>
      </template>
    </a-card-meta>
    <template #actions>
      <div class="card-actions">
        <IconPark icon="caution" size="16" theme="filled" fill="#4680ff" style="margin-right: 10px; top: 2px; border-radius: 3px"></IconPark>
        <span>Get more space</span>
      </div>
    </template>
  </a-card>

</template>

<script setup lang="ts">

import IconPark from "@/components/common/IconPark.vue";
</script>

<style scoped lang="css">
  .card-small {
    box-shadow:0 0 5px rgba(0, 0, 0, 0.13);
    width: 300px;
    border-radius: 6px;
  }
  h4 {
   font-weight: 400;
   margin-top: 10px;
 }
 .card-icon {
   top: -30px;
   background-color: #4680ff;
   align-items: center;
   display: flex;
   padding: 13px;
   border-radius: 8px;
   justify-content: center;
   transition: top 0.3s ease-in-out;
 }
 .card-icon:hover {
   top: -40px;
 }
 .card-title {
   float: right;
   display: flex;
   top: -5px;
   font-weight: 600;
   color: #4680ff;
 }
 .card-description {
   float: right;
   font-weight: 400;
   font-size: 1.5rem;
   color: #333;
 }
 .card-actions {
   float: left;
   padding-left: 20px;
   font-size: 0.875rem;
 }
</style>