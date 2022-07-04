import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//UI 框架
import "./sytle/arco.css";
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

//media query
import "./utils/media.css";
//cloudBase

createApp(App)
  .use(store)
  .use(router)
  .use(ArcoVue)
  .use(ArcoVueIcon)
  .mount("#app");
