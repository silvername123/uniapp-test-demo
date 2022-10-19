<template>
    <view class="content">
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
      <div class="flex h-screen items-center justify-center" id="dowebok">
        <div class="w-4/5 sm:w-96 text-sm">
          <div class="w-32 h-32 mx-auto rounded-full shadow-md overflow-hidden">
            <!-- <img class="w-full" src="https://img.dowebok.com/8390.jpg" alt="" /> -->
          </div>
          <div class="mt-20 p-4 rounded-2xl bg-white shadow-md">
            <label for="username" class="text-gray-500">电子邮箱</label>
            <div class="flex items-center mt-4">
              <i class="fa fa-fw fa-envelope-o text-gray-500"></i>
              <input
                type="text"
                id="username"
                class="flex-1 mx-3 outline-none bg-transparent"
                placeholder="请输入电子邮箱"
              />
            </div>
          </div>
          <div class="mt-7 p-4 rounded-2xl bg-white shadow-md">
            <label for="password">密码</label>
            <div class="flex items-center mt-4">
              <i class="fa fa-fw fa-lock text-gray-500"></i>
              <input
                type="password"
                id="password"
                class="flex-1 mx-3 outline-none bg-transparent"
                placeholder="请输入密码"
              />
              <i class="fa fa-fw fa-eye text-gray-500"></i>
            </div>
          </div>
          <div class="login mt-7 shadow-md rounded-full overflow-hidden">
            <button class="w-full p-3 rounded-full text-white hover:opacity-90">
              登 录
            </button>
          </div>
          <div class="flex justify-between mt-7 text-xs">
            <a href="javascript:" class="text-gray-500">注册</a>
            <a href="javascript:" class="text-gray-500">忘记密码？</a>
          </div>
        </div>
      </div>
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
  