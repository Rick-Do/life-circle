<template>
  <a-layout style="min-height: 80px">
    <a-layout-header class="header-all">
      <div class="header-left">
        <img :src="logoPng"  alt="logo "/>
        <a class="mobile-collapse" @click="()=>(showSider=!showSider)">
          <menu-outlined style="color:#fff" />
        </a>
      </div>
      <div class="header-right">
        <IconPark icon="full-screen-one" theme="outline" size="20" stroke-width="3" class="screen-icon"  @click="toFullScreen()"/>
        <div class="personal-info">
          <notice />
          <a-avatar :src="Avatar" style="margin-top: 20px" size="large"> </a-avatar>
          <a-dropdown class="user-info-setting">
            <div style="cursor: pointer" @click.prevent>
              <span>John Down</span>
              <down-outlined />
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item style="display: flex"
                             :key="item.id"
                             v-for="item in userSettingConfig">
                  <IconPark :icon="item.icon"></IconPark>
                  <span>{{item.name}}</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="270" v-if="showSider">
        <Menu />
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="layout-content" >
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  MenuOutlined,
  DownOutlined
} from '@ant-design/icons-vue';
import IconPark from "@/components/common/IconPark.vue"
import logoPng from "@/assets/images/logo.png";
import Avatar from "@/assets/images/avatar-4.jpg"
import Menu from  "@/components/menu/Menu.vue"
import Notice from  "@/components/notice/Notice.vue"
import {CommonFuction} from "@/utils/CommonUtil";
import {Root} from "@/utils/Root"
import {ref} from "vue";
const {toFullScreen} = CommonFuction()
const {userSettingConfig} = Root();
const showSider = ref<boolean>(true);
</script>
<style scoped lang="less" >
  .header-all {
    background: #fff;
  }
  .header-left {
    position: relative;
    display: flex;
    align-items: center;
    float: left;
    height: 80px;
    text-align: center;
    text-transform: uppercase;
    width: 270px;
    padding: 10px;
    background: #303549;
  }
  .header-right {
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    //box-shadow: 10px -10px 11px rgba(0, 0, 0, 0.13);
  }

  .screen-icon {
    cursor: pointer;
    padding: 6px 20px;
  }
  .ant-layout-header {
    padding: 0;
    height: 80px;
    line-height: 80px;
  }
  .personal-info {
    padding: 0 10px;
    display: flex;
  }
  .mobile-collapse {
    position: absolute;
    right: 22px;
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 5px 9px;
    top: 24px;
    line-height: 23px;
  }
  .user-info-setting {
    margin-left: 20px;
    padding-right: 20px;
    height: 75px;
  }
  .layout-content {
    padding: 10px;
    overflow: inherit;
    box-shadow: inset 0 0 11px rgba(0, 0, 0, 0.13);
  }
</style>