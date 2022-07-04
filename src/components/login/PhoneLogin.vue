<template>
  <a-space direction="vertical" size="large" :style="{ width: '100%' }">
    <a-form :model="form" :layout="layout">
      <a-form-item field="name" label="手机号码">
        <a-input v-model="form.phone" placeholder="请输入正确的手机号" style="height: 36px" />
      </a-form-item>
      <a-form-item field="post" label="验证码">
        <a-input v-model="form.verifyCode" placeholder="6位验证码" style="height: 36px" />
        <a-button style="height: 36px; color: rgb(var(--primary-6)); width: 216px" type="secondary" :disabled="disabled"
          @click="sendCode">{{ clickSend }}
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width: 100%; margin-top: 8px; height: 36px; border-radius: 4px"
          @click="phoneLogin">
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
        未注册的手机号将自动注册
      </div>
    </a-form>
  </a-space>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import cloudBase from "@/utils/cloudBase";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import store from "@/store";

export default defineComponent({
  setup() {
    const layout = ref("vertical");
    const form = reactive({
      phone: "",
      verifyCode: "",
    });
    const clickSend = ref("发送验证码");
    const totalTime = ref(60);
    const disabled = ref(false);
    const hasPhone = ref("");

    //发送验证码
    const sendCode = (): void => {
      //设置禁用
      disabled.value = true;
      // 定时器
      let timer = setInterval(() => {
        totalTime.value--;
        clickSend.value = "重新发送 " + totalTime.value + "s";
        if (totalTime.value == 0) {
          clickSend.value = "发送验证码";
          totalTime.value = 60;
          disabled.value = false;
          clearInterval(timer);
        }
      }, 1000);

      cloudBase
        .callFunction({
          name: "sendCode",
          data: { phone: form.phone },
        })
        .then((res) => {
          Message.success("验证码发送成功，3~5s后手机查收");
          hasPhone.value = res.result;
        });
    };
    //校验验证码并登陆
    const router = useRouter();
    const phoneLogin = (): void => {
      cloudBase
        .callFunction({
          name: "phoneLogin",
          data: {
            phone: form.phone,
            code: form.verifyCode,
            hasPhone:hasPhone.value
          },
        })
        .then((res) => {
          if (res.result.stateCode === "000") {
            if (hasPhone.value) {
              store.commit("requireState",res.result.userInfo)
              localStorage.setItem("userInfo",JSON.stringify(res.result.userInfo))
              router.push("/");
              Message.success("验证成功，欢迎使用EPBlog");
            } else {
              router.push("/register");
              localStorage.setItem("phone", form.phone)
              Message.success("验证成功,请注册用户信息");
            }
          } else { Message.error("验证码错误，请重试") }
        });
    };
    return {
      layout,
      form,
      clickSend,
      totalTime,
      disabled,
      hasPhone,
      sendCode,
      phoneLogin,
    };
  },
  props: ["change"],
});
</script>
<style lang="less" scoped>
</style>
