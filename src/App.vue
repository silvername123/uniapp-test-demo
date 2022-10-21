<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import url("tailwindcss/tailwind.css");
@import url("@/static/iconfont/iconfont.css");

/* #ifdef H5 */
uni-page-head {
  display: none;
}
uni-page-head[uni-page-head-type="default"] ~ uni-page-wrapper {
  height: calc(100% - env(safe-area-inset-top));
  overflow: auto;
}


/* #endif */
</style>
