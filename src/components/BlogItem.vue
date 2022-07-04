<template>
  <div class="blog">
    <div class="blog-title">
      {{ blogItem.title }}
    </div>
    <div class="blog-article">
      {{ blogItem.content }}
    </div>
    <div class="blog-btns">
      <a-button type="text" class="blog-btns-user">
        <icon-user size="16" />
        <span class="blog-btns-space">{{ blogItem.author }}</span>
      </a-button>
      <a-button class="blog-btns-like" type="text">
        <icon-thumb-up size="16" fill="rgb(var(--primary-5)" />
        <span class="blog-btns-space">{{ blogItem.like + "赞" }}</span>
      </a-button>
      <a-button type="text" class="blog-btns-other mda">
        <icon-thumb-down size="16" />
        <span class="blog-btns-space">{{ "踩" }}</span>
      </a-button>
      <a-button type="text" class="blog-btns-other">
        <icon-message size="16" />
        <span class="blog-btns-space">{{
          blogItem.commentNum + "条评论"
        }}</span>
      </a-button>
      <a-button type="text" class="blog-btns-other mda">
        <icon-star size="16" />
        <span class="blog-btns-space">{{ blogItem.star }}收藏</span>
      </a-button>
      <span class="blog-btns-views">浏览量 {{ blogItem.views }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Blog } from "@/utils/constants";
import { defineComponent, PropType, ref } from "@vue/runtime-core";

export default defineComponent({
  props: {
    blogItem: Object as PropType<Blog>,
  },
  name: "blogItem",
  setup(props) {
    const blogItem = ref(props.blogItem);
    return {
      blogItem,
    };
  },
});
</script>

<style lang="less" scoped>
@import "../utils/media.less";
.blog {
  width: 100%;
  height: 120px;
  border-bottom: 1px solid var(--color-border);
  transition: 340ms border;
  position: relative;
  &-title {
    padding: 16px 16px 20px;
    margin-bottom: 12px;
    box-sizing: border-box;
    font-size: 18px;
    color: var(--color-text-1);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    max-height: 1px;
    cursor: pointer;
  }
  &-article {
    line-height: 24px;
    padding: 0 16px 16px;
    box-sizing: content-box;
    max-height: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    cursor: pointer;
  }
  &-btns {
    padding: 0 0 0 12px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 80px;
    box-sizing: border-box;
    &-views {
      text-align: right;
      width: 100%;
      margin: 0 16px 0 0;
      font-size: 12px;
      user-select: none;
    }
    &-space {
      margin-left: 4px;
    }
  }
}
.blog:hover {
  background-color: rgb(var(--gray-1));
}
.arco-btn-text {
  color: var(--color-text-2) !important;
  :focus {
    color: rgb(var(--primary-5)) !important;
  }
}
.arco-btn {
  margin: 0;
  padding: 0;
}
.arco-btn:focus {
  color: rgb(var(--primary-5));
}
.blog-btns-like {
  margin-left: 9px;
  color: rgb(var(--primary-5)) !important;
}
.blog-btns-other {
  margin-left: 9px;
}
@media @mda {
  .blog-btns {
    padding: 0 0 0 12px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 80px;
    box-sizing: border-box;
    &-user {
      margin-left: 4px;
    }
    &-space {
      margin-left: 4px;
    }
    &-other {
      margin-left: 28px;
    }
  }
  .blog-btns-like {
    margin-left: 28px;
    color: rgb(var(--primary-5)) !important;
  }
}
</style>>