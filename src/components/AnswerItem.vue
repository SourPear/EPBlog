<template>
  <div class="answer">
    <div class="answer-like">
      <svg
        width="30"
        height="30"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          r="13.25"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.4649 4.14645C19.2674 3.94889 18.9462 3.95155 18.752 4.15235L12.9453 10.1548L10.7095 7.919C10.5142 7.72373 10.1977 7.72373 10.0024 7.919L9.14645 8.77494C8.95118 8.9702 8.95118 9.28678 9.14645 9.48204L12.347 12.6826C12.3597 12.6953 12.373 12.7072 12.3867 12.7183L12.6137 12.9453C12.8112 13.1428 13.1323 13.1402 13.3266 12.9394L20.3266 5.70349C20.5163 5.50734 20.5137 5.19527 20.3208 5.00229L19.4649 4.14645Z"
          fill="currentColor"
        />
      </svg>
      <div class="answer-like-nums">{{ answerItem.like }}</div>
      <span class="answer-like-title">{{ answerItem.title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Answer } from "@/utils/constants";
import { defineComponent, PropType, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "AnswerItem",
  props: {
    answerItem: Object as PropType<Answer>,
  },
  setup(props) {
    const answerItem = ref(props.answerItem);
    return { answerItem };
  },
});
</script>

<style lang="less" scoped>
.answer {
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  transition: 340ms border-bottom;
}
.answer:hover {
  background-color: rgb(var(--gray-1));
}
.answer-like {
  position: relative;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  margin-top: 4px;
  cursor: pointer;
  &-nums {
    font-size: 1px;
    position: absolute;
    top: 14px;
    left: 23px;
  }
  &-title {
    position: absolute;
    top: 8px;
    left: 56px;
    margin-right: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
</style>