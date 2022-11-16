<template>
  <view>
    <view>父组件</view>
    <child>
      <template #first>{{ test1 }}</template>
      <template #second>测试</template>
      <template #child="val"> {{ val.value1 }}</template>
    </child>
  </view>
</template>

<script setup lang="ts">
import child from "./testSlotChild.vue";
import { ref } from "vue";
const test1 = ref<number>(2);
const change = () => {
  test1.value = test1.value + 1;
};
</script>
