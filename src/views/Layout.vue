<template>
  <a-layout class="root">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout-content class="blog-content">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "../components/header/Header.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Header,
  },
});
</script>

<style lang="less" >
* {
  transition: 340ms background-color;
}
body {
  background-color: var(--color-bg-1);
  transition: 340ms background-color;
}
.root {
  display: flex;
  align-items: center;
  color: var(--color-text-2);
}
.arco-layout-header {
  z-index: 1000;
  position: fixed;
  background-color: var(--color-bg-4);
  transition: 340ms background-color;
  box-shadow: 0px 4px 36px -8px rgba(black, 0.08);
  width: 100vw;
  display: flex;
  justify-content: center;
}
.arco-layout-content {
  padding-top: 56px;
  color: var(--color-text-2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog-content {
  margin-top: 16px;
}
</style>
