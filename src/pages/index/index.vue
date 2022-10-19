<template>
  <!-- <view class="content"> -->
  <!-- <view class="font-black">工作他</view>
    <image class="logo" src="/static/logo.png" />
    <view>
      <text class="text-9xl">{{ data.date }}</text>
      <text class="title">{{ title }}</text>
      <button @click="changeC()">change text</button>
    </view> -->
  <!-- <view class="uni-form-item uni-column">
      <uni-forms ref="formRef" :rules="rules" label-width="80px">
        <uni-forms-item label="账号" required name="userName">
          <uni-easyinput placeholder="请输入账号" />
        </uni-forms-item>
        <uni-forms-item label="密码" required name="password">
          <uni-easyinput type="password" placeholder="请输入密码" />
        </uni-forms-item>
      </uni-forms>
      <button class=""></button>
    </view> -->
  <!-- </view> -->
  <view class="flex items-center justify-center h-full ">
    <view class="bg-white rounded-sm" >
      <image src="" mode="scaleToFill" />
      <uni-forms ref="" :rules="rules" label-width="80px">
        <uni-forms-item required label="账号" name="user">
          <uni-easyinput
            type="text"
            placeholder="输入账号"
            @confirm=""
          />
        </uni-forms-item>
        <uni-forms-item required label="密码" name="password">
          <uni-easyinput
            type="password"
            placeholder="输入密码"
            @confirm=""
          />
        </uni-forms-item>
        <!-- <button class="" @click="">提交</button> -->
      </uni-forms>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const title = ref("Hello");
const data = reactive({
  date: "1",
});
const changeC = () => {
  title.value = "test ref";
  data.date = "test reactive";
};
const rules = reactive({});
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
}

input[type="password"]::-ms-reveal {
  display: none;
}



a:hover {
  color: #3e4685;
} */
body {
  background-color: #f3f8fe;
}
.login button {
  background-color: #3e4685;
} 
/* .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */

/* page {
  height: 100%;
  overflow: hidden;
  background: linear-gradient(140deg, rgb(105 168 222) 40%, rgb(25 97 160));
} */
/* .logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
} */
</style>
