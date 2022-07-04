<template>
  <div class="Label">
    <a-button
      type="text"
      v-for="item in labels"
      :key="item.index"
      style="padding: 0"
    >
      {{ item.name }}
    </a-button>
  </div>
</template>

<script>
export default {
  name: "Label",
  data() {
    return {
      labels: [
        { name: "JavaScript" },
        { name: "Html" },
        { name: "Css" },
        { name: "Vue" },
        { name: "React" },
        { name: "UI库" },
        { name: "Java" },
        { name: "C++" },
        { name: "Python" },
        { name: "云计算" },
        { name: "数据库" },
        { name: "超前沿" },
      ],
    };
  },
};
</script>

<style>
.Label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 83vw;
  max-width: 1200px;
  height: 42px;
  margin: 0 0 16px ;
  background-color: var(--color-bg-2);
  box-shadow: 0px 4px 36px -8px rgba(var(--gray-10), 0.04);
  border-radius: 4px;
  box-sizing: border-box;
  padding-top: 2px;
}
.arco-btn-text:hover {
  color: rgb(var(--primary-5)) !important;
  background: transparent !important;
} 
</style>