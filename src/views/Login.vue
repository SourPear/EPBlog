<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-bg-nav">
        <div class="login-bg-nav-left">
          <Logo style="minwidth: 36px; padding-right: 24px" />
          <span class="login-bg-nav-left-name">EPBlog</span>
        </div>
        <div class="login-bg-nav-right">
          <a-button type="outline">登录</a-button>
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <div class="login-bottom-card">
        <p style="width: 100%; text-align: center; color: #fff">Enjoy</p>
        <p style="width: 100%; text-align: center; color: #fff">Process</p>
      </div>
      <div class="login-bottom-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Logo from "../components/Logo.vue";

export default defineComponent({
  components: {
    Logo,
  },
  setup() {
    const log: "/login" = "/login";
    const reg: "/register" = "/register";
    return {
      log,
      reg,
    };
  },
});
</script>

<style lang="less" scoped>
@import "../utils/media.less";
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &-bg {
    background-color: var(--color-bg-4);
    box-shadow: 0px 4px 36px -8px rgba(var(--gray-10), 0.08);
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      max-width: 1440px;
      &-left {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 16px;
        font-weight: 600;
        &-name {
          font-family: "微软雅黑";
          font-size: 18px;
          color: var(--color-text-2);
        }
      }
      &-right {
        margin-right: 16px;
      }
    }
  }
  &-bottom {
    width: 100vw;
    height: 94vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg-1);
    &-card {
      width: 254px;
      height: 500px;
      background-color: rgb(42, 106, 220);
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--color-bg-2);
      font-size: 24px;
      font-weight: 900;
      padding-bottom: 72px;
      box-sizing: border-box;
      box-shadow: 0px 4px 24px -8px rgba(black, 0.2);
      margin-bottom: 48px;
    }
    &-right {
      width: 410px;
      height: 500px;
      border-top-right-radius: 6px;
      background-color: var(--color-bg-2);
      border-bottom-right-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 24px -8px rgba(black, 0.2);
      padding-bottom: 4px;
      margin-bottom: 48px;
      box-sizing: border-box;
    }
    @media screen and (max-width: 768px) {
      &-card {
        width: 0px;
        transition: 300ms;
      }
      &-right {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        width: 100vw;
        margin: 0 16px;
      }
    }
  }
}
</style>