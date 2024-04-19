<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 15:25:53
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-19 11:19:28
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
            <ChartItem title="贷款市场报价利率(LPR)" :type="0">
              <template #box>
                <div class="mian-box">
                  <CusEchart :options="loanOption" class="two-chart" />
                </div>
              </template>
            </ChartItem>
          </div>
          <div style="width: calc(100% - 1216px); margin-left: 30px">
            <ChartItem title="中国国债收益率曲线" :type="1">
              <template #box>
                <div class="mian-boxs">
                  <div>日期</div>
                  <CusEchart :options="chinaOption" class="two-chart" style="height: calc(100% - 20px)" />
                </div>
              </template>
            </ChartItem>
          </div>
        </div>
        <!-- 第三部分 -->
        <div class="three-box">
          <div class="three-left">
            <ChartItem title="人民币汇率" :type="2">
              <template #box>
                <div class="mian-box">
                  <div class="titleToday">
                    今日汇率：1 美元 ≈ 7.2387 人民币；1 欧元 ≈ 7.6969 人民币；1 澳元 ≈ 4.6454 人民币；1 港币 ≈ 0.9243
                    人民币
                  </div>
                  <CusEchart :options="rmbOption" class="three-chart" />
                </div>
              </template>
            </ChartItem>
          </div>
          <div class="three-right">
            <ChartItem title="行业分析报告" :type="2" more>
              <template #box>
                <div class="three-right-box">
                  <div
                    class="report-item"
                    v-for="(item, index) in reportList"
                    :key="item.id"
                    :style="{ background: computeBackgroundColor(index) }"
                  >
                    <p class="titles">
                      {{ item.fileName }}
                    </p>
                  </div>
                </div>
              </template>
            </ChartItem>
          </div>
        </div>
        <!-- 第四部分 -->
        <div class="four-box">
          <ChartItem title="上市公司股价" :type="3">
            <template #box>
              <div class="mian-box">
                <a href="http://192.168.252.232:8015/pdffile/11111.pdf">hahahahahahaha</a>
              </div>
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
import CusEchart from '@/components/Charts/index.vue';
// api
import { getRmbInfo, getReport } from '@/api/home-page';
import { ref } from 'vue';
const getRmbInfoFn = async () => {
  const res = await getRmbInfo();
  console.log('============>res', res);
};
getRmbInfoFn();
// 报告列表
const reportList = ref([]);
const getReportFn = async () => {
  const res = await getReport({
    modelName: 'base_board_infoModel',
    topicConditionGroupMapping: {
      base_user_link_role: [],
    },
    dataMap: {},
    parentModelName: '',
  });
  reportList.value = res.data.slice(0, 6);
};
// 背景色
const computeBackgroundColor = (index) => {
  return index % 2 === 0
    ? 'linear-gradient(90deg, rgba(36, 188, 177, 0.2) 0%, rgba(53, 157, 255, 0.2) 100%)'
    : 'transparent';
};
getReportFn();
// 贷款图表
const loanOption = ref({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '',
    right: '0%',
    itemHeight: 5,
    textStyle: {
      color: '#ccccea',
    },
    data: [
      {
        name: '贷款1年',
        icon: 'rect',
        itemStyle: {
          color: '#FAF347',
        },
      },

      {
        name: '贷款5年',
        icon: 'rect',
        itemStyle: {
          color: '#30B4FF',
        },
      },
    ],
  },
  grid: {
    left: '0',
    right: '15',
    bottom: '0',
    containLabel: true,
  },

  xAxis: {
    name: '日期',
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
      color: 'rgba(204, 204, 234, 1)', // 设置 X 轴文字颜色为灰色
    },
  },
  yAxis: {
    name: '利率',
    type: 'value',
    nameTextStyle: {
      color: '#ccccea',
    },
    axisLabel: {
      color: 'rgba(204, 204, 234, 1)', // 设置 X 轴文字颜色为灰色
    },
    splitLine: {
      lineStyle: {
        type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
        color: '#999',
      },
      show: true,
    },
  },
  series: [
    {
      name: '贷款1年',
      type: 'line',
      color: '#FAF347',
      lineStyle: { width: 3 },
      smooth: true,
      label: {
        show: true,
        formatter: '{c}', // 显示节点的值
        borderWidth: 0,
        color: '#FAF347',
      },
      symbolSize: 10,
      data: [120, 132, 101, 134, 290, 230, 210],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(250, 178, 71, 0.2)', // 起始颜色
            },
            {
              offset: 1,
              color: 'rgba(238, 159, 42, 0.05)', // 结束颜色
            },
          ],
        },
      },
    },
    {
      name: '贷款5年',
      type: 'line',
      color: '#30B4FF',
      lineStyle: { width: 3 },
      smooth: true,
      data: [220, 182, 191, 234, 290, 330, 310],
      stack: 'Total',
      symbolSize: 10,
      label: {
        show: true,
        formatter: '{c}', // 显示节点的值
        borderWidth: 0,
        color: '#30B4FF',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(14, 156, 255, 0.2)', // 起始颜色
            },
            {
              offset: 1,
              color: 'rgba(8, 94, 153, 0.05)', // 结束颜色
            },
          ],
        },
      },
    },
  ],
});
// 中国国债收益率曲线
const chinaOption = ref({
  tooltip: {
    trigger: 'item',
  },

  grid: {
    left: '0',
    right: '15',
    bottom: '0',
    containLabel: true,
  },

  xAxis: {
    name: '日期',
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
      color: 'rgba(204, 204, 234, 1)', // 设置 X 轴文字颜色为灰色
    },
  },
  yAxis: {
    name: '利率',
    type: 'value',
    nameTextStyle: {
      color: '#ccccea',
    },
    axisLabel: {
      color: 'rgba(204, 204, 234, 1)', // 设置 X 轴文字颜色为灰色
    },
    splitLine: {
      lineStyle: {
        type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线、
        color: '#999',
      },
      show: true,
    },
  },
  series: [
    {
      name: '贷款5年',
      type: 'line',
      color: 'rgba(25, 232, 192, 1)',
      lineStyle: { width: 3 },
      smooth: true,
      data: [220, 182, 191, 234, 290, 330, 310],
      stack: 'Total',
      symbolSize: 10,
      label: {
        show: true,
        formatter: '{c}', // 显示节点的值
        borderWidth: 0,
        color: '#30B4FF',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(25, 232, 192, 0.2)', // 起始颜色
            },
            {
              offset: 1,
              color: ' rgba(11, 180, 147, 0.05)', // 结束颜色
            },
          ],
        },
      },
    },
  ],
});
// 人民币汇率
const rmbOption = ref({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '0',
    right: '0%',
    itemHeight: 5,
    textStyle: {
      color: '#ccccea',
    },
    data: [
      {
        name: '美元',
        icon: 'rect',
        itemStyle: {
          color: 'rgba(255, 103, 55, 1)',
        },
      },

      {
        name: '欧元',
        icon: 'rect',
        itemStyle: {
          color: 'rgba(250, 243, 71, 1)',
        },
      },
      {
        name: '澳元',
        icon: 'rect',
        itemStyle: {
          color: 'rgba(25, 232, 192, 1)',
        },
      },
      {
        name: '港币',
        icon: 'rect',
        itemStyle: {
          color: 'rgba(78, 191, 255, 1)',
        },
      },
    ],
  },
  grid: {
    left: '0',
    right: '15',
    bottom: '30',
    containLabel: true,
  },

  xAxis: {
    name: '日期',
    type: 'category',
    boundaryGap: false,
    data: ['1', '1', '1'],
    axisLabel: {
      color: 'rgba(204, 204, 234, 1)', // 设置 X 轴文字颜色为灰色
    },
  },
  yAxis: {
    name: '利率',
    type: 'value',
    nameTextStyle: {
      color: '#ccccea',
    },
    axisLabel: {
      color: 'rgba(204, 204, 234, 1)', // 设置 X 轴文字颜色为灰色
    },
    splitLine: {
      lineStyle: {
        type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
        color: '#999',
      },
      show: true,
    },
  },
  series: [
    {
      name: '美元',
      type: 'line',
      color: 'rgba(255, 103, 55, 1)',
      lineStyle: { width: 3 },
      smooth: true,
      symbolSize: 0,
      data: [100, 200, 1],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255, 103, 55, 0.1)', // 起始颜色
            },
            {
              offset: 1,
              color: 'rgba(153, 62, 33, 0.05)', // 结束颜色
            },
          ],
        },
      },
    },
    {
      name: '欧元',
      type: 'line',
      color: 'rgba(250, 243, 71, 1)',
      lineStyle: { width: 3 },
      smooth: true,
      symbolSize: 0,
      data: [2, 150, 300],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(250, 178, 71, 0.2)', // 起始颜色
            },
            {
              offset: 1,
              color: 'rgba(238, 159, 42, 0.05)', // 结束颜色
            },
          ],
        },
      },
    },
    {
      name: '澳元',
      type: 'line',
      color: 'rgba(25, 232, 192, 1)',
      lineStyle: { width: 3 },
      smooth: true,
      symbolSize: 0,
      data: [50, 100, 0],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(155, 245, 237, 0.1)', // 起始颜色
            },
            {
              offset: 1,
              color: 'rgba(90, 143, 138, 0.05)', // 结束颜色
            },
          ],
        },
      },
    },
    {
      name: '港币',
      type: 'line',
      color: 'rgba(78, 191, 255, 1)',
      lineStyle: { width: 3 },
      smooth: true,
      symbolSize: 0,
      data: [50, 100, 0],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(2, 164, 255, 0.1)', // 起始颜色
            },
            {
              offset: 1,
              color: 'rgba(1, 98, 153, 0.05)', // 结束颜色
            },
          ],
        },
      },
    },
  ],
});
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
      .mian-box {
        padding: 15px;
        height: 336px;
        .two-chart {
          height: 100%;
        }
      }
      .mian-boxs {
        padding: 15px;
        height: 336px;
        .two-chart {
          height: calc(100% - 40px);
        }
      }
    }
    .three-box {
      display: flex;
      justify-content: space-between;
      margin-top: 35px;
      .three-left {
        height: 100%;
        width: calc(50% - 15px);
        .mian-box {
          padding: 15px;
          height: 336px;
          .titleToday {
            padding: 4px;
            background: rgba(5, 62, 107, 1);
            color: rgba(234, 234, 234, 1);
            font-family: AlibabaPuHuiTi2.0-65Medium;
            font-size: 14px;
            border-radius: 4px;
          }
          .three-chart {
            height: 308px;
          }
        }
      }
      .three-right {
        width: calc(50% - 15px);
        .three-right-box {
          padding: 20px;
          height: 326px;
          display: flex;
          align-items: center;
          flex-direction: column;
          .report-item {
            display: flex;
            align-items: center;
            overflow: hidden;
            height: 16.1%;
            width: 820px;
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            padding: 0 12px 0;
            .titles {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
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
