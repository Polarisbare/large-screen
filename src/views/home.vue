<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 15:25:53
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-18 10:51:04
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
          <div style="width: 1216px">
            <ChartItem title="贷款市场报价利率(LPR)" :type="0"></ChartItem>
          </div>
          <div style="width: calc(100% - 1216px); margin-left: 30px">
            <ChartItem title="中国国债收益率曲线" :type="1" />
          </div>
        </div>
        <!-- 第三部分 -->
        <div class="three-box">
          <div class="three-left">
            <ChartItem title="人民币汇率" :type="2" />
          </div>
          <div class="three-right">
            <ChartItem title="行业分析报告" :type="2" more />
          </div>
        </div>
        <!-- 第四部分 -->
        <div class="four-box">
          <ChartItem title="上市公司股价" :type="3">
            <template #box>
              <div class="mian-box">1</div>
            </template>
          </ChartItem>
        </div>
      </div>
    </div>
  </v-scale-screen>
</template>
<script setup>
// components
import VScaleScreen from 'v-scale-screen';
import ChartItem from '@/components/ChartItem.vue';
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
  height: 100%;
  width: 100%;
  overflow: hidden;
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
    height: calc(100% - 200px);
    padding: 40px;
    overflow: auto;
    .two-box {
      display: flex;
    }
    .three-box {
      display: flex;
      justify-content: space-between;
      margin-top: 35px;
      .three-left {
        width: calc(50% - 15px);
      }
      .three-right {
        width: calc(50% - 15px);
      }
    }
    .four-box {
      margin-top: 35px;
      .mian-box {
        height: 780px;
      }
    }
  }
}
</style>
