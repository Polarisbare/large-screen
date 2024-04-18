<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-18 09:25:05
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-18 10:52:38
 * @FilePath: /large-screen/src/components/ChartItem.vue
 * @Description: 图表组件
-->
<template>
  <div class="left-two">
    <!-- 左侧头部 -->
    <div class="two-head">
      <div class="two-head-left">
        <div class="son">
          <img src="@/assets/star.svg" alt="" />
          <span class="title">{{ props.title }}</span>
        </div>
      </div>
      <div class="two-head-right" :style="{ left: arr[type].value }">
        <div v-if="more" class="more" @click="handleMore">更多 ></div>
      </div>
    </div>
    <!-- 左侧图表 -->

    <div class="two-main">
      <slot name="box"></slot>
    </div>
  </div>
  <div class="right-two"></div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  more: {
    default: false,
    type: Boolean,
  },
  type: {
    type: Number,
  },
});
const arr = [
  { id: 0, value: '-6px' },
  { id: 1, value: '-3.3px' },
  { id: 2, value: '-5px' },
  { id: 3, value: '-7px' },
];
const emits = defineEmits(['handleMore']);
const handleMore = () => {
  emits('handleMore');
};
</script>
<style lang="less" scoped>
.left-two {
  width: 100%;
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
      // left: -6px;
      width: calc(100% - 363px);
      background: url('@/assets/right.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 20px;
      .more {
        position: absolute;
        right: 18px;
        color: rgba(255, 255, 255, 1);
        font-family: AlibabaPuHuiTi2.0-65Medium;
        font-size: 16px;
      }
    }
  }
  .two-main {
    width: 100%;
    min-height: 336px;
    // height: 100%;
    margin-top: 4px;
    background: url('@/assets/main.svg') no-repeat;
    background-size: cover;
  }
}
</style>
