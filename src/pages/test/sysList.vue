<template>
  <view>
    <view v-for="item in listData">
      <sys-list-item :item="item"></sys-list-item>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import sysListItem from "./sysListItem.vue";
interface listType {
  name: string;
  key: number;
}
const list = [{ key: 1 }, { key: 2 }];
const listData = ref<listType[]>([
  {
    name: "1-n",
    key: 1,
  },
  {
    name: "2-n",
    key: 2,
  },
  {
    name: "3-n",
    key: 3,
  },
  {
    name: "4-n",
    key: 4,
  },
]);
</script>
