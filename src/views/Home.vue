<template>
  <div class="home">
    <Label class="mda" />
    <a-row :gutter="16" class="home-blog-row">
      <a-col :md="18" :sm="24" :xs="24" :lg="18">
        <Card
          :title="['推荐', '关注', '热榜']"
          style="min-height: 75vh"
        >
          <template #推荐>
            <BlogItem
              v-for="item in blogRecommendList"
              :key="item"
              :blogItem="item"
            />
            <div class="blogloading" v-if="authorLoading">
              <icon-loading />努力加载中
            </div>
          </template>
          <template #关注>
            <BlogItem
              v-for="item in blogRecommendList"
              :key="item"
              :blogItem="item"
            />
            <div class="blogloading" v-if="authorLoading">
              <icon-loading />努力加载中
            </div></template
          >
          <template #热榜
            >3
            <div class="blogloading" v-if="authorLoading">
              <icon-loading />努力加载中
            </div></template
          >
        </Card>
      </a-col>
      <a-col :md="6" :sm="24" :xs="24" :lg="6">
        <Card title="推荐作者">
          <AuthorItem
            v-for="item in authorList"
            :key="item"
            :authorItem="item"
          />
          <div class="loading" v-if="authorLoading"><icon-loading />加载中</div>
        </Card>
        <Card title="高赞回答">
          <AnswerItem
            v-for="item in answerList"
            :key="item"
            :answerItem="item"
          />
          <div class="loading" v-if="answerLoading"><icon-loading />加载中</div>
        </Card>
      </a-col>
      <a-col> </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "@vue/runtime-core";
import Card from "@/components/Card.vue";
import type { Blog, Author, Answer } from "@/utils/constants";
import BlogItem from "../components/BlogItem.vue";
import AuthorItem from "../components/AuthorItem.vue";
import Label from "../components/Label.vue";
import AnswerItem from "../components/AnswerItem.vue";
import cloudBase from "../utils/cloudBase";
export default defineComponent({
  components: {
    Card,
    BlogItem,
    Label,
    AuthorItem,
    AnswerItem,
  },
  setup() {
    //首页请求
    //请求博客列表
    //推荐列表
    const blogRecommendList = ref<Array<Blog>>();
    const blogRecommendLoading = ref<Boolean>(true);
    const getRecommendBlogList = (): void => {
      cloudBase
        .callFunction({
          name: "getBlogList",
        })
        .then((res) => {
          blogRecommendList.value = res.result;
          blogRecommendLoading.value = false;
        });
    };
    //关注列表
    const blogFollowList = ref<Array<Blog>>();
    const blogFollowLoading = ref<Boolean>(true);
    const getFollowBlogList = (): void => {
      cloudBase
        .callFunction({
          name: "getBlogList",
        })
        .then((res) => {
          blogFollowList.value = res.result;
          blogFollowLoading.value = false;
        });
    };
    //请求作者列表
    const authorList = ref<Array<Author>>();
    const authorLoading = ref<Boolean>(true);
    const getAuthorList = (): void => {
      cloudBase
        .callFunction({
          name: "getAuthorList",
        })
        .then((res) => {
          authorList.value = res.result;
          authorLoading.value = false;
        });
    };

    //请求问答列表
    const answerList = ref<Array<Answer>>();
    const answerLoading = ref<Boolean>(true);
    const getAnswerList = (): void => {
      cloudBase
        .callFunction({
          name: "getAnswerList",
        })
        .then((res) => {
          answerList.value = res.result;
          answerLoading.value = false;
        });
    };
    onBeforeMount(() => {
      getFollowBlogList;
      getRecommendBlogList();
      getAuthorList();
      getAnswerList();
    });
    return {
      blogRecommendList,
      authorList,
      answerList,
      blogRecommendLoading,
      blogFollowLoading,
      authorLoading,
      answerLoading,
    };
  },
});
</script>

<style lang="less" scoped>
@import "../utils/media.less";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-blog-row {
    width: 100vw;
    max-width: 1440px;
    padding: 0 8px;
    box-sizing: border-box;
    min-height: 90vh;
  }
}
.loading {
  width: 100%;
  height: 216px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blogloading {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
