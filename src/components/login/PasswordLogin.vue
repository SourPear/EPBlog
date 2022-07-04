<template>
  <a-space direction="vertical" size="large" :style="{ width: '100%' }">
    <a-form :model="form" :layout="layout">
      <a-form-item field="name" label="用户名">
        <a-input v-model="form.username" placeholder="请输入用户名" style="height: 36px" />
      </a-form-item>
      <a-form-item field="post" label="密码">
        <a-input-password v-model="form.password" :style="{ width: '320px' }" placeholder="请输入密码" allow-clear
          style="height: 36px; width: 100%" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width: 100%; margin-top: 8px; height: 36px; border-radius: 4px"
          @click="passwordLogin">
          登录
        </a-button>
      </a-form-item>

      <div style="
          text-align: center;
          margin: -16px 0px 8px;
          font-size: 12px;
          color: var(--color-text-3);
          user-select: none;
        ">
        首次登陆请使用手机号方式
      </div>
    </a-form>
  </a-space>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import cloudBase from "@/utils/cloudBase"
import store from "@/store";
import { useRouter } from "vue-router";
import { Message } from "@arco-design/web-vue";

export default defineComponent({
  setup() {
    const layout = ref("vertical");
    const form = reactive({
      username: "",
      password: "",
    });
    const router = useRouter()
    const passwordLogin = (): void => {
      cloudBase.callFunction({
        name: "passwordLogin",
        data: {
          username: form.username,
          password: form.password
        }
      }).then(res => {
        if (res.result.stateCode === "000") {
          store.commit("requireState", res.result.userInfo)
          localStorage.setItem("userInfo", JSON.stringify(res.result.userInfo))
          Message.success("验证成功，欢迎使用~")
          router.push('/')
        } else if (res.result.stateCode === "001") {
          Message.error("用户名不存在，请重试")
        } else if (res.result.stateCode === "002") {
          Message.error("用户名或密码错误，请重试")
        }
      })
    }
    return {
      layout,
      form,
      passwordLogin,
    };
  },
});
</script>
<style lang="less" scoped>
.otherLogin {
  width: 184px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(var(--gray-3));
  padding-top: 8px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;

  &-logo {
    color: rgb(var(--gray-9));
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 160px;
  }

  &-logo :hover {
    color: rgb(var(--primary-6));
    cursor: pointer;
  }
}
</style>
