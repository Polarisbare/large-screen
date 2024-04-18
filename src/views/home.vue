<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 15:25:53
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-18 09:21:57
 * @FilePath: /large-screen/src/views/home.vue
 * @Description: 
-->
<template>
  <v-scale-screen class="screenBac" width="1920" height="1080">
    <div class="home">
      <!-- 头部 -->
      <div class="one-box">
        <div class="back">返回</div>
        <div class="back">4月16日 &nbsp; 11:24</div>
      </div>
      <!-- main -->
      <div class="main">
        <!-- 第二部分 -->
        <div class="two-box">
          <div class="left-two">
            <!-- 左侧头部 -->
            <div class="two-head">
              <div class="two-head-left">
                <div class="son">
                  <img src="@/assets/star.svg" alt="" />
                  <span class="title">贷款市场报价利率(LPR)</span>
                </div>
              </div>
              <div class="two-head-right"></div>
            </div>
            <!-- 左侧图表 -->
            <div class="two-main">11</div>
          </div>
          <div class="right-two"></div>
        </div>
        <div></div>
      </div>
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
  .one-box {
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
  .main {
    padding: 40px;
    .two-box {
      .left-two {
        width: 1216px;
        .two-head {
          width: 100%;
          display: flex;
          .two-head-left {
            width: 363px;
            height: 32px;
            background: url('@/assets/left.svg');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-attachment: fixed;
            padding-left: 16px;
            .son {
              bottom: 10px;
              position: relative;
              .title {
                color: rgba(255, 255, 255, 1);
                font-family: AlibabaPuHuiTi2.0-95ExtraBold;
                font-size: 24px;
                margin-left: 16px;
              }
            }
          }
          .two-head-right {
            position: relative;
            bottom: -8px;
            left: -6px;
            width: calc(100% - 363px);
            background: url('@/assets/right.svg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 20px;
          }
        }
        .two-main {
          width: 100%;
          height: 336px;
          margin-top: 4px;
          background: url('@/assets/main.svg') no-repeat;
          background-size: cover;
        }
      }
    }
  }
}
</style>
