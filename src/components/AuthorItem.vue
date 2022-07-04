<template>
  <div class="author-item">
    <div class="author-item-left">
      <a-avatar :size="40" class="author-item-left-avatar">
        <img src="../assets/Avatar.png" />
      </a-avatar>
      <div class="author-item-left-author">
        <div>{{ authorItem.name }}</div>
        <div class="author-item-left-author-sign">
          {{ authorItem.signature }}
        </div>
      </div>
    </div>
    <a-button type="outline">关注</a-button>
  </div>
</template>

<script lang="ts">
import { Author } from "@/utils/constants";
import { defineComponent, PropType, ref } from "@vue/runtime-core";
export default defineComponent({
  name: "AuthorItem",
  props: {
    authorItem: Object as PropType<Author>,
  },
  setup(props) {
    const authorItem = ref(props.authorItem);
    return {
      authorItem,
    };
  },
});
</script>

<style lang="less" scoped>
.author-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  &-left {
    display: flex;
    margin-right: 2px;
    &-avatar {
      margin-left: 16px;
      min-width: 40px;
    }
    &-author {
      margin: 0 0 0 12px;
      line-height: 20px;
      box-sizing: border-box;
      &-sign {
        margin-right: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
  }
}
.author-item:hover {
  background-color: rgb(var(--gray-1));
}
.arco-btn-size-medium {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 16px;
  height: 25px;
  width: 50px;
}
</style>
