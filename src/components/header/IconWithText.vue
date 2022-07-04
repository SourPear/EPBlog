<template>
  <div class="icon-with-text">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "IconWithText",
});
</script>

<style lang="less">
//Common Style
.icon-with-text {
  width: 48px;
  height: 32px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  padding: 0 4px;
  user-select: none;
  cursor: pointer;
}
.icon-with-text:hover {
  color: rgba(var(--primary-5));
}

//Media Query
@media screen and (max-width: 991px) {
  .icon-with-text {
    width: 32px;
    height: 36px;
    flex-direction: column;
  }
}
</style>
