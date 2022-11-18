<template>
  <view>name : {{ item.name }} </view>
</template>
<script lang="ts" setup>
interface itemType {
  item: Record<string, any>;
}
const listData = defineProps<itemType>();
</script>
