<!--
 * @Author: STATICHIT
 * @Date: 2023-06-14 22:04:36
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-18 20:46:09
 * @FilePath: \resume_analysis\src\views\page\Visualization.vue
 * @Description: 自定义
-->
<template>
  <div class="box cur">
    <div class="bigTitle">人才库招聘数据分析</div>
    <div class="board">
      <div class="card card1">
        <b>需求数</b>
        <div class="num">{{ num1 }}</div>
      </div>
      <div class="card card1">
        <b>offer数</b>
        <div class="num">{{ num2 }}</div>
      </div>
      <div class="card card1">
        <b>入职数</b>
        <div class="num">{{ num3 }}</div>
      </div>
      <div class="card card1">
        <b>完成率</b>
        <div class="num">{{ num4 }}</div>
      </div>
    </div>
    <div class="board">
      <div class="card" style="width: 45%">
        <div><b>年龄分布</b></div>
        <br />
        <div id="mychart3"></div>
      </div>
      <div class="card" style="width: 23%">
        <div><b>性别结构</b></div>
        <br />
        <div id="mychart4"></div>
      </div>
      <div class="card" style="width: 23%">
        <div><b>学历分布</b></div>
        <br />
        <div id="mychart5"></div>
      </div>
    </div>
    <div class="board">
      <div class="card" style="width: 30%">
        <div><b>招聘环节效率</b></div>
        <br />
        <div>
          <el-table
            :data="tableData2"
            stripe
            style="width: 100"
            :header-cell-style="{ background: '#7a83eb', color: '#fff' }"
          >
            <el-table-column prop="state" label="需求部门" width="170" />
            <el-table-column prop="nums" label="需求数" width="170" />
            <el-table-column prop="result" label="完成率" />
          </el-table>
        </div>
      </div>
      <div class="card" style="width: 68%">
        <div><b>招聘漏斗</b></div>
        <div id="mychart2"></div>
        <br />
      </div>
    </div>
    <div class="board">
      <div class="card" style="width: 30%">
        <div><b>部门完成率</b></div>
        <br />
        <div>
          <el-table
            :data="tableData1"
            stripe
            style="width: 100"
            :header-cell-style="{ background: '#7a83eb', color: '#fff' }"
          >
            <el-table-column prop="department" label="需求部门" width="140" />
            <el-table-column prop="needs" label="需求数" width="105" />
            <el-table-column prop="offers" label="入职数" width="105" />
            <el-table-column prop="result" label="完成率" />
          </el-table>
        </div>
      </div>
      <div class="card" style="width: 68%">
        <div><b>部门完成进度</b></div>
        <br />
        <div id="mychart1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts"; //引入echarts
import theme from "../../utils/echarts"; //引入主题
let num1 = ref(40);
let num2 = ref(39);
let num3 = ref(17);
let num4 = ref("42.5%");
onMounted(() => {
  initEcharts();
});
const tableData1 = [
  {
    department: "产品部",
    needs: "5",
    offers: "3",
    result: "60.0%",
  },
  {
    department: "人力资源部",
    needs: "3",
    offers: "2",
    result: "66.7%",
  },
  {
    department: "销售部",
    needs: "18",
    offers: "5",
    result: "75.0%",
  },
  {
    department: "市场部",
    needs: "8",
    offers: "4",
    result: "80.0%",
  },
  {
    department: "售后部",
    needs: "6",
    offers: "3",
    result: "50.0%",
  },
];
const tableData2 = [
  {
    state: "投递数",
    nums: "175",
    result: "100.0%",
  },
  {
    state: "筛选通过数",
    nums: "74",
    result: "42.3%",
  },
  {
    state: "进面数",
    nums: "63",
    result: "36.0%",
  },
  {
    state: "offer数",
    nums: "39",
    result: "22.3%",
  },
  {
    state: "入职数",
    nums: "17",
    result: "9.7%",
  },
];
// 初始化表格
const initEcharts = () => {
  const echarts1 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["需求数", "入职数"],
      orient: "vertical",
      left: 10,
      top: 80,
    },
    grid: {
      left: "10%",
      right: "5%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["产品部", "人力资源部", "销售部", "市场部", "售后部"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "需求数",
        type: "line",
        smooth: false,
        areaStyle: {},
        data: [5, 3, 18, 8, 6],
      },
      {
        name: "入职数",
        type: "line",
        smooth: false,
        areaStyle: {},
        data: [3, 2, 5, 4, 3],
      },
    ],
  };
  const echarts2 = {
    tooltip: {
      trigger: "item",
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    legend: {
      orient: "vertical",
      right: 10,
      top: 60,
      data: ["投递数", "筛选通过数", "进面数", "offer数", "入职数"],
    },
    series: [
      {
        name: "指标人数",
        type: "funnel",
        left: "10%",
        top: 60,
        width: "80%",
        max: 100,
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 17, name: "入职数" },
          { value: 39, name: "offer数" },
          { value: 63, name: "进面数" },
          { value: 74, name: "筛选通过数" },
          { value: 175, name: "投递数" },
        ],
      },
    ],
  };
  const echarts3 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["26以下", "26-30", "30-34", "34-38", "38-42", "42以上"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "年龄分布",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [12, 24, 18, 18, 8, 3],
      },
    ],
  };
  const echarts4 = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "简历数",
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 11, name: "男" },
          { value: 20, name: "女" },
        ],
      },
    ],
  };
  const echarts5 = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "简历数",
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 11, name: "博士" },
          { value: 20, name: "硕士" },
          { value: 43, name: "本科" },
          { value: 3, name: "大专" },
        ],
      },
    ],
  };
  echarts.registerTheme("theme", theme); //注册主题
  const myChart = echarts.init(document.getElementById("mychart1"), "theme"); // 图标初始化
  const myChart2 = echarts.init(document.getElementById("mychart2"), "theme");
  const myChart3 = echarts.init(document.getElementById("mychart3"), "theme");
  const myChart4 = echarts.init(document.getElementById("mychart4"), "theme");
  const myChart5 = echarts.init(document.getElementById("mychart5"), "theme");
  myChart.setOption(echarts1); // 渲染页面
  myChart2.setOption(echarts2);
  myChart3.setOption(echarts3);
  myChart4.setOption(echarts4);
  myChart5.setOption(echarts5);
};
</script>

<style lang="scss" scoped>
.box {
  height: 1400px;
  padding: 0 140px;
}
.cur {
  background: url("../../assets/imgs/波纹背景.png") no-repeat;
  background-size: 100%;
  background-position-y: bottom;
}
.bigTitle {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin-top: 90px;
  margin-bottom: 70px;
}

.board {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
}

.card {
  padding: 10px;
  border-top: 4px solid #6671e3;
  border-radius: 3px;
  background-color: rgba(242, 242, 253, 0.295);
}
.card1 {
  width: 350px;
  height: 110px;
}
.num {
  font-size: 35px;
  font-weight: 550;
  margin-top: 7px;
  text-align: center;
}
#mychart1 {
  width: 100%;
  height: 250px;
}
#mychart2 {
  width: 100%;
  height: 300px;
}
#mychart3 {
  width: 100%;
  height: 250px;
}
#mychart4 {
  width: 100%;
  height: 250px;
}
#mychart5 {
  width: 100%;
  height: 250px;
}
</style>