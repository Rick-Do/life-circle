<template>
  <a-layout style="min-height: 80px">
    <a-layout-header class="header">
        <div class="header-left">
          <img :src="logoPng"  alt="logo "/>
          <a class="mobile-collapse">
            <menu-outlined style="color:#fff" />
          </a>
        </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="270" >
        <a-menu :selectedKeys="selectedKeys" style="height: 100%; border-right: 0" mode="inline" theme="light">
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>

        </a-menu>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  MenuOutlined,
} from '@ant-design/icons-vue';
import logoPng from "@/assets/images/logo.png";
import {defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    MenuOutlined,
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(["1"]),
      logoPng,
    }
  },
  methods: {

  }
})

</script>
<style scoped lang="less" >
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
  .ant-layout-header {
    padding: 0;
    height: 80px;
    line-height: 80px;
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
</style>