<template>
  <view class="flex h-full items-center justify-center">
    <view class="rounded-sm w-4/5 sm:w-96">
      <view
        class="w-32 h-32 mx-auto rounded-full shadow-md overflow-hidden mt-20"
      >
        <img class="w-full" src="https://img.dowebok.com/8390.jpg" />
      </view>
      <view class="mt-8 p-4 rounded-2xl bg-white shadow-md">
        <label class="text-gray-500">账号</label>
        <view class="flex items-center mt-4">
          <view class="iconfont icon-zhihangren"></view>
          <input
            class="ml-2"
            type="text"
            v-model="formValues.userName"
            placeholder="please input user name "
            placeholder-class="input-placeholder"
            @input=""
          />
        </view>
      </view>
      <view class="mt-8 p-4 bg-white rounded-2xl shadow-md">
        <label class="text-gray-500">密码</label>
        <view class="flex items-center mt-4">
          <view class="iconfont icon-mima"></view>
          <input
            class="ml-2"
            v-model="formValues.password"
            type="password"
            placeholder="please input password"
            @input=""
          />
          <!-- <view
            v-show="data.eyeStatus"
            class="iconfont icon-eye_protection eyeIcon"
            @click="changeEyeStatus()"
          ></view>
          <view
            v-show="!data.eyeStatus"
            class="iconfont icon-visible eyeIcon"
            @click="changeEyeStatus()"
          ></view> -->
        </view>
      </view>
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
  <view>
    <uni-transition
      :mode-class="data.modeClass"
      :show="data.isShow"
      class="rounded-2xl bg-gray-300 text-center shadow-md modal w-4/5"
    >
      {{ data.modalText }}
    </uni-transition>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const title = ref("Hello");
const data = reactive({
  date: "122222222",
  modalText: "测试",
  isError: true,
  isShow: false,
  modeClass: "fade",
  eyeStatus: true,
});
const formValues = reactive({ userName: "", password: "" });
const formRef = ref(null);

const modalRef = ref(null);
const handleTransition = (type: any) => {
  data.modeClass = type;
};
const changeC = () => {
  title.value = "test ref";
  data.date = "test reactive";
  console.log("user", formValues.userName);
  // handleTransition(["slide-top"]);
  if (!formValues.userName || !formValues.password) {
    if (!formValues.userName && !formValues.password) {
      data.modalText = "请输入账号和密码";
    } else {
      if (!formValues.userName) {
        data.modalText = "请输入账号";
      } else {
        data.modalText = "请输入密码";
      }
    }
  } else {
    data.isError = false;
  }
  if (data.isError) {
    uni.showToast({
      title: data.modalText,
      icon: "none",
    });
    // data.isShow = true;
    // setTimeout(() => {
    //   data.isShow = false;
    // }, 2000);
    return;
  } else {
    data.isShow = false;
    uni.navigateTo({ url: "/pages/test/index" });
  }
};
const formRules = reactive({
  user: {
    rules: [
      {
        required: true,
      },
      {
        minLength: 3,
        maxlength: 11,
        errorMessage: "no length",
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
.eyeIcon {
  transform: scale(1.8);
  // transform: translateY(-200%);
}
@keyframes modal {
  // 0%{
  //   transform: translateY(0);
  // }
  // 100% {
  //   transform: translateY(100%);
  // }
}
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
