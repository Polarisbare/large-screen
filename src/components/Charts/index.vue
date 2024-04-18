<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 14:39:05
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-18 14:45:44
 * @FilePath: /main-project-front/src/components/Charts/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="comp-charts" ref="chartRef" style="height: 100%; width: 100%"></div>
</template>

<script setup name="MyEcharts">
import { onMounted, ref, onUnmounted, watch, markRaw } from 'vue';
import * as echarts from 'echarts';
const chartRef = ref(null);
const instance = ref(null);
const props = defineProps({
  // 抽屉是否显示
  options: {
    type: Object,
    default() {
      return {};
    },
    require: true,
  },
});

const initChart = () => {
  if (chartRef.value && !instance.value) {
    setTimeout(() => {
      instance.value = markRaw(echarts.init(chartRef.value, props.options)); //这里是为了获得容器所在位置
      instance.value.setOption(props.options, true);
      window.onresize = () => {
        instance.value.resize();
      };
    }, 1000);
  }
};

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  if (!instance.value) {
    return;
  } else {
    instance.value.dispose();
  }
});
watch(
  () => props.options,
  (newVal) => {
    if (instance.value) {
      instance.value.setOption(newVal, true);
    }
  },
  { deep: true },
);
</script>

<style lang="less" scoped>
.comp-charts {
  width: 100%;
  height: 100%;
  :deep(& > div) {
    width: 100%;
    height: 100% !important;
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
}
</style>
