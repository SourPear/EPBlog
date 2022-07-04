<template>
  <div class="header mda">
    <div class="nav-left">
      <Logo style="minwidth: 36px; padding-right: 10px" @click="logOut" />
      <IconWithText @click="excuse">
        <icon-home :size="16" />
        <span style="margin: 2px">首页</span>
      </IconWithText>
      <IconWithText style="padding: 0" @click="excuse">
        <icon-bulb :size="16" />
        <span style="margin: 2px">问答</span>
      </IconWithText>
    </div>
    <a-input-search class="input" placeholder="请输入搜索内容" />
    <div class="nav-right">
      <a-button type="primary" size="large" style="margin-left: 12px" v-if="loginState" @click="excuse">
        我要创作
      </a-button>
      <a-button type="primary" style="height: 36px; margin-left: 16px" v-if="!loginState" @click="toLogin
      ">
        登录/注册
      </a-button>
      <IconWithText @click="changeTheme" class="space">
        <icon-sun v-if="theme === 'light'" :size="16" />
        <icon-moon v-if="theme === 'dark'" :size="16" />
        <span>{{ theme === "light" ? "明色" : "暗色" }}</span>
      </IconWithText>
      <IconWithText v-if="loginState" class="space" @click="excuse">
        <icon-history :size="17" />
        <span>历史</span>
      </IconWithText>
      <IconWithText v-if="loginState" class="space" @click="excuse">
        <icon-star :size="17" />
        <span>收藏</span>
      </IconWithText>
      <IconWithText v-if="loginState" class="space" @click="excuse">
        <icon-notification :size="17" />
        <span>消息</span>
      </IconWithText>
      <a-avatar :size="36" :style="{ backgroundColor: 'rgb(248,248,248)' }" v-if="loginState" @click="excuse">
        <img :src="avatar.avatar" />
      </a-avatar>
    </div>
  </div>
  <div class="header mda-i">
    <a-avatar :size="36" :style="{ backgroundColor: 'rgb(248,248,248)' ,minWidth:'36px'}" @click="excuse" v-if="loginState">
      <img :src="avatar.avatar" />
    </a-avatar>
    <Logo v-if="!loginState" style="min-width: 32px;" />
    <a-input-search class="input" placeholder="请输入搜索内容" />
    <a-button style="width: 36px" type="text" @click="excuse">
      <template #icon>
        <icon-menu-fold :size="24" />
      </template>
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from "@vue/runtime-core";
import Logo from "../../components/Logo.vue";
import IconWithText from "../../components/header/IconWithText.vue";
import { useRouter } from "vue-router";
import type { Theme } from "@/utils/constants";
import store from "@/store";
import { Message } from "@arco-design/web-vue";

//TODO:用户头像需要去全局获取，用户信息需要为全局状态

export default defineComponent({
  name: "BlogHeader",
  components: {
    Logo,
    IconWithText,
  },
  setup() {
    //主题切换
    const theme = ref<Theme>("light");
    const changeTheme = (): void => {
      if (document.body.getAttribute("arco-theme") === "dark") {
        document.body.setAttribute("arco-theme", "light");
        localStorage.setItem("theme", "light");
        theme.value = "light";
      } else {
        document.body.setAttribute("arco-theme", "dark");
        localStorage.setItem("theme", "dark");
        theme.value = "dark";
      }
    };

    //切换登陆和未登录
    const loginState = ref(0);

    //获取用户头像
    const avatar = store.state.userState

    onBeforeMount(() => {
      //检查登录状态
      if (store.state.userState.loginState) {
        loginState.value = 1
      }
    })

    //未完成工作提醒
    const excuse = (): void => {
      Message.info("页面正在加急开发中，请谅解~")
    }

    //临时退出函数
    const logOut = (): void => {
      localStorage.removeItem("userInfo")
      router.go(0)
    }

    //路由跳转
    const router = useRouter();
    const toHome = (): Promise<any> => router.push("/");
    const toLogin = (): void => {
      router.push("/login")
    }
    const toQA = (): void => {
      router.push("/qa");
    };
    const toStar = (): void => {
      router.push("/star");
    };
    const toHistory = (): void => {
      router.push("/history");
    };
    const toNotice = (): void => {
      router.push("/notice");
    };
    const toCreate = (): void => {
      router.push("/create");
    };

    return {
      loginState,
      logOut,
      avatar,
      theme,
      changeTheme,
      excuse,
      toLogin,
      toHome,
      toQA,
      toStar,
      toHistory,
      toNotice,
      toCreate,
    };
  },
});
</script>

<style lang="less">
@import "../../utils/media.less";

.header {
  width: 100vw;
  max-width: 1440px;
  height: 56px;
  padding: 0 16px;
  color: var(--color-text-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .nav-left {
    min-width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-right {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .space {
    margin-left: 8px;
  }

  .arco-btn-text {
    color: var(--color-text-2);
    border: none;
  }

  .arco-btn-text:hover {
    color: rgb(var(--primary-5));
    background: transparent;
    border: none;
  }

  .arco-btn-text:active {
    color: var(--color-text-2);
    background: transparent;
    border: none;
  }
}

.nav-right-moblie {
  width: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 72px;
}

.input {
  width: 100%;
  margin: 0 16px;
  font-size: 12px;
}

@media @mda {
  .input {
    margin: 0 12px;
    max-width: 400px;
  }
}

@media @lg {
  .avatar {
    margin: 0 6px 0 8px;
  }
}
</style>
