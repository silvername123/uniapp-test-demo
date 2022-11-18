<template>
  <input
    placeholder="text input"
    placeholder-class="input-placeholder"
    @input="onInput"
    class="inputC"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
interface inputType {
  set: any;
}
const inputProps = defineProps(['text']);
const emit = defineEmits(['onInput'])
const onInput = () => {
    console.log("input",inputProps.text)
    emit('onInput');
    console.log("input test",inputProps.text)
    
};
</script>
<style>
.inputC {
  border: 1px solid black;
}
</style>
