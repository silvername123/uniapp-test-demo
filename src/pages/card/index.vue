<template>
  <view class="flex flex-col">
    <view class="w-auto mx-2 mt-2 bg-white shadow-md pb-7 firstBodyBox overflow-hidden">
      <image class="w-full mt-1" src="@/static/cat.jpg" mode="scaleToFill" />
      <view class="flex justify-between mt-3 mx-4">
        <view class="flex items-baseline">
          <view
            class="titleFontSize pb-1"
            style="border-bottom-color: black; border-bottom-style: solid"
            >某某某</view
          >
          <view class="ml-2 text-gray-400" :style="{ fontSize: '24rpx' }"
            >项目经理</view
          >
        </view>
        <view class="numberPhoneStyle">12345678901</view>
      </view>
      <view class="mt-8 mx-4" :style="{ fontSize: '14rpx' }">
        <view class="">浙江智点数字科技有限公司</view>
        <view class="">温州鹿城区飞霞桥国信大厦三楼</view>
      </view>
    </view>
    <view class="flex w-full flex-wrap justify-evenly mt-2 secondBodyBox">
      <view class="functionModule smallBox"><img />分享名片</view>
      <view class="functionModule smallBox"><img />名片夹</view>
      <view class="functionModule smallBox bg-blue-500 text-white"
        ><img />存入手机</view
      >
      <view
        class="functionModule middleBox bg-blue-400 text-white flex justify-center"
      >
        <view class="ml-2 border-solid iconfont icon-mima" />
        <view class="flex flex-col items-start">
          <view>名片码</view>
          <view class="boxBottomText">二维码查看</view>
        </view>
      </view>
      <view class="functionModule middleBox flex justify-center">
        <view class="flex flex-col items-start">
          <view>微信</view>
          <view class="boxBottomText">微信号:123456780</view>
        </view></view
      >
      <view class="functionModule middleBox"><img />电话号码</view>
    </view>
    <view class="w-auto shadow-md mt-2 mx-2 py-2 px-2 thirdBox">
      <view class="titleFontSize">自我介绍</view>
      <view class="mt-2"> 测试介绍 </view>
    </view>
    <view class="w-auto shadow-md mt-2 mx-2 py-2 px-2 fourthBox">
      <view class="titleFontSize mt-2">个人风采</view>
        <uni-swiper-dot
          :info="data.info"
          :current="data.current"
          field="content"
          :mode="data.mode"
        >
          <swiper class="swiper-box" @change="change">
            <swiper-item v-for="(item, index) in data.info" :key="index">
              <view class="swiper-item">
                {{ item.content }}
              </view>
            </swiper-item>
          </swiper>
        </uni-swiper-dot>
    </view>
  </view>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  info: [
    {
      content: "内容 A",
    },
    {
      content: "内容 B",
    },
    {
      content: "内容 C",
    },
  ],
  current: 0,
  mode: "round",
});
const change = (e: any) => {
  data.current = e.detail.current;
};
</script>
<style lang="scss" scoped>
// .firstBodyBox {
//   flex-grow: 2;
// }
// .secondBodyBox {
//   flex-grow: 1;
// }
// .thirdBox {
//   flex-grow: 1;
// }
// .fourthBox {
//   flex-grow: 1;
// }
.titleFontSize,
.numberPhoneStyle {
  font-size: 40rpx;
  font-weight: bold;
}
.functionModule {
  width: 30%;
  /* border: solid ; */
  border-radius: 8rpx;
  box-shadow: 0rpx 8rpx 12rpx rgb(0 0 0 / 0.1);
}
.smallBox {
  margin-top: 4rpx;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  font-size: 24rpx;
  text-align: center;
}
.middleBox {
  margin-top: 24rpx;
  padding: 20rpx 0rpx;
  text-align: center;
  .boxBottomText {
    font-size: 24rpx;
  }
}
</style>
