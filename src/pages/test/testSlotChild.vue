<template>
  <div class="button">
    <button>子组件按钮</button>
    <!-- 接收父组件传过来值 -->
    <slot name="first"> 这就是默认值 </slot>
    <br />
    <slot name="second">第二插槽</slot>
    <slot name="child" :value1="data.child1"></slot>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
const data = reactive({
  child1: "子数据出现",
  child2: 2,
});
</script>
