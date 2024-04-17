<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 15:25:53
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-17 17:03:43
 * @FilePath: /large-screen/src/views/home.vue
 * @Description: 
-->
<template>
  <v-scale-screen class="screenBac" width="1920" height="1080">
    <div class="home">
      <!-- 头部 -->
      <div class="top">
        <div class="back">返回</div>
        <div class="back">4月16日 &nbsp; 11:24</div>
      </div>
      <div></div>
      <div></div>
    </div>
  </v-scale-screen>
</template>
<script setup>
import VScaleScreen from 'v-scale-screen';
</script>
<style lang="less" scoped>
.screenBac {
  background: linear-gradient(
    269.26deg,
    rgba(5, 21, 34, 1) 0.64%,
    rgba(12, 59, 98, 1) 43.98%,
    rgba(12, 59, 98, 1) 55.83%,
    rgba(7, 22, 36, 1) 99.37%
  ) !important;
}
.home {
  height: 100vh;
  width: 100%;
  // padding-top: 30px;
  .top {
    height: 112px;
    background: url('@/assets/top.svg');
    // 剧中
    background-position: center center;
    // 大小伸缩
    background-size: cover;
    display: flex;
    justify-content: space-between;
    padding: 0 56px 0;
    .back {
      text-align: center;
      background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(91, 224, 243, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 25px;
      margin-top: 35px;
    }
  }
}
</style>
