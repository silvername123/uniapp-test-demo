<template>
  <div class="flex h-screen items-center justify-center" id="dowebok">
    <div class="w-4/5 sm:w-96 text-sm">
      <div class="w-32 h-32 mx-auto rounded-full shadow-md overflow-hidden">
        <img class="w-full" src="https://img.dowebok.com/8390.jpg" alt="" />
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
