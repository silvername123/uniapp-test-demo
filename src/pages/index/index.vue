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
  <view class="flex h-full items-center justify-center">
    <view class="rounded-sm w-4/5 sm:w-96">
      <view
        class="w-32 h-32 mx-auto rounded-full shadow-md overflow-hidden mt-20"
      >
        <img class="w-full" src="https://img.dowebok.com/8390.jpg" />
      </view>
      <uni-forms ref="formRef" :rules="formRules" :model="formValues">
        <uni-forms-item
          label="账号"
          name="user"
          id="lest"
          class="mt-20 p-4 rounded-2xl bg-white shadow-md"
          label-position="top"
          required
        >
          <view class="flex items-center">
            <view class="iconfont icon-zhihangren"></view>
            <uni-easyinput
              type="text"
              class="flex-1 mr-3 outline-none bg-transparent"
              placeholder="输入账号"
              :inputBorder="false"
              v-model="formValues.userName"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item
          class="mt-4 p-4 rounded-2xl bg-white shadow-md"
          label="密码"
          name="password"
          label-position="top"
        >
          <view class="flex items-center">
            <view class="iconfont icon-mima"></view>
            <uni-easyinput
              class="flex-1 mr-3 outline-none bg-transparent"
              type="password"
              placeholder="输入密码"
              :inputBorder="false"
              v-model="formValues.password"
            />
          </view>
        </uni-forms-item>
      </uni-forms>
      <view class="mt-7 shadow-md rounded-full overflow-hidden">
        <button class="w-full p-3 rounded-full login" @click="changeC()">
          提交
        </button>
      </view>
      <view class="flex justify-between text-xs mt-8">
        <a href="" class="text-gray-500">注册</a>
        <a href="" class="text-gray-500">忘记密码</a>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const title = ref("Hello");
const data = reactive({
  date: "1",
});
const formValues = reactive({ userName: "", password: "" });
const formRef = ref(null);

const changeC = () => {
  title.value = "test ref";
  data.date = "test reactive";
  console.log("user", formValues.userName);
  formRef.value?.validate().then(()=>{
    console.log(formValues.userName);
    console.log(formValues.password);
  })
  // console.log("")
  // uni.navigateTo({
  //   url: "/pages/test/index",
  //   success: () => {
  //     console.log("page");
  //   },
  // });
};
const formRules = reactive({
  user: {
    rules: [
      {
        required: true,
        errorMessage: "请输入用户名",
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
.login {
  border: none;
  background-color: #3e4685;
  color: white;
}
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
::v-deep .uni-forms-item__label {
  font-size: 18px;
  font-weight: bold;
}
</style>
