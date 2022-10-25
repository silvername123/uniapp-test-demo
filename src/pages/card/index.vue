<template>
  <view class="flex flex-col">
    <view class="w-auto mx-2 mt-2 border-2 h-1/3 bg-white shadow-md pb-7">
      <image class="w-full mt-1" src="@/static/cat.jpg" mode="scaleToFill" />
      <view class="flex justify-between mt-3 mx-4">
        <view class="flex items-baseline">
          <view
            class="titleFontSize pb-1"
            style="border-bottom-color: black; border-bottom-style: solid"
            >某某某</view
          >
          <view class="ml-2 text-gray-400" :style="{ fontSize: '10px' }"
            >项目经理</view
          >
        </view>
        <view class="numberPhoneStyle">12345678901</view>
      </view>
      <view class="mt-8 mx-4" :style="{ fontSize: '14px' }">
        <view class="">浙江智点数字科技有限公司</view>
        <view class="">温州鹿城区飞霞桥国信大厦三楼</view>
      </view>
    </view>
    <view class="flex w-full flex-wrap justify-evenly mt-2">
      <view class="functionModule smallBox"><img />分享名片</view>
      <view class="functionModule smallBox"><img />名片夹</view>
      <view class="functionModule smallBox bg-blue-500 text-white"
        ><img />存入手机</view
      >
      <view class="functionModule middleBox bg-blue-400 text-white "
        ><img class="iconfont icon-mima" /><view
          ><view>名片码</view><view>名片二维码</view></view
        ></view
      >
      <view class="functionModule middleBox"><img />微信</view>
      <view class="functionModule middleBox"><img />电话号码</view>
    </view>
    <view class="">自我介绍</view>
    <view>个人风采</view>
  </view>
</template>
<script></script>
<style>
.titleFontSize,
.numberPhoneStyle {
  font-size: 20px;
  font-weight: bold;
}
.functionModule {
  width: 30%;
  /* border: solid ; */
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgb(0 0 0 / 0.1);
}
.smallBox {
  margin-top: 2px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  text-align: center;
}
.middleBox {
  margin-top: 12px;
  padding: 20px 0px;
  text-align: center;
}
</style>
