<template>
  <button open-type="" hover-class="button-hover" @click="testClick">
    {{ props.text }}
  </button>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { dataRefType } from "./index.vue";
interface datatype {
  title: string;
  datalist: string[];
  propF: {
    type: number;
    default: (rawProps: any) => { message: string };
  };
}
interface emitType {
  (text: any): void;
}
const data = reactive<datatype>({
  title: "",
  datalist: [],
  propF: {
    type: 1,
    default: (text) => {
      return { message: "2" };
    },
  },
});
const props = withDefaults(
  defineProps<{
    text: string;
    data: dataRefType;
  }>(),
  {
    text: "测试",
  }
);
const displayText = () => {
  console.log(props.text);
  console.log(props.data);
};

const emit = defineEmits<emitType>();
// const emit = defineEmits(["inFocus", "submit", "testB"]);
const buttonClick = () => {
  console.log("in");
  //   emit("inFocus");
};
const testClick = () => {
  // 声明事件并且接收父传来的事件
  emit("testB");
  console.log("list");
};
</script>
