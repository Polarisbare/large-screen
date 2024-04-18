<template>
  <div class="left-chart-1">
    <div class="lc1-title">XXX指标完成情况</div>
    <div class="lc1-content">
      <CusEchart :options="options" class="lc1-chart" />
    </div>
  </div>
</template>

<script setup name="EchartDemo">
import CusEchart from './index.vue';
import { ref } from 'vue';

const options = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
});
</script>

<style lang="less" scoped>
.left-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .lc1-title {
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }

  .lc1-content {
    width: 600px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
