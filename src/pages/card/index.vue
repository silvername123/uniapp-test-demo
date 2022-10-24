<template>
  <view class="flex flex-col">
    <view class="w-auto mx-2 mt-2 border-2 h-1/3 bg-white shadow-md pb-7">
      <image class="w-full mt-1" src="@/static/cat.jpg" mode="scaleToFill" />
      <view
        class="flex justify-between mt-3 mx-4"
        style="background-color: pink"
      >
        <view class="flex items-baseline">
          <view
            class="titleFontSize pb-1"
            style="border-bottom-color: black; border-bottom-style: solid"
            >某某某</view
          >
          <view :style="{ fontSize: '12px' }">项目经理</view>
        </view>
        <view class="titleFontSize">12345678901</view>
      </view>
      <view class="mt-8 mx-4">
        <view class="">浙江智点数字科技有限公司</view>
        <view class="">温州鹿城区飞霞桥国信大厦三楼</view>
      </view>
    </view>
    <view>
      <view><img />分享名片</view>
      <view><img />名片夹</view>
      <view><img />存入手机</view>
      <view><img />名片码</view>
      <view><img />微信</view>
      <view><img />电话号码</view>
    </view>
    <view>自我介绍</view>
    <view>个人风采</view>
  </view>
</template>
<script></script>
<style>
.titleFontSize {
  font-size: 24px;
}
</style>
