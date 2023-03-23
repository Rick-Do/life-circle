<template>
  <div class="card-block-small">
    <slot name="icon" class="card-icon"/>
    <slot name="title" style="font-weight: 600" />
    <h4>
      <slot name="content" />
    </h4>
    <span class="text-muted">
      <slot name="description" />
    </span>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
 .card-block-small {
   padding: 15px 20px;
   margin-top: 40px;
   text-align: right;
   background-color: #fff;
   border: 1px solid rgba(0,0,0,.125);
   box-shadow: 0 0 11px rgba(0, 0, 0, 0.13);
 }
 h4 {
   font-weight: 400;
   margin-top: 10px;
 }
 .card-icon {
   width: 60px;
   height: 60px;
   position: absolute;
   top: -15px;
   font-size: 35px;
   border-radius: 8px;
   display: flex;
   color: #fff;
   align-items: center;
   justify-content: center;
 }
 .text-muted {
   margin-top: 10px;
   float: left;
 }
</style>