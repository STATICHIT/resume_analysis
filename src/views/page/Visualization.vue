<!--
 * @Author: STATICHIT
 * @Date: 2023-06-14 22:04:36
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-12 21:41:04
 * @FilePath: \resume_analysis\src\views\page\Visualization.vue
 * @Description: 可视化数据大屏
-->
<template>
  <div class="box cur" style="position: relative">
    <div @click="router.go(-1)" class="back">⬅ 返回</div>
    <div class="bigTitle">人才库招聘数据分析</div>
    <div class="board">
      <div class="card card1">
        <b>人才库简历总数</b>
        <div class="num">{{ data.num1 }}</div>
      </div>
      <div class="card card1">
        <b>现有岗位总数</b>
        <div class="num">{{ data.num2 }}</div>
      </div>
      <div class="card card1">
        <b>公司需求数</b>
        <div class="num">{{ data.num3 }}</div>
      </div>
      <div class="card card1">
        <b>完成率</b>
        <div class="num">{{ data.num4 }}</div>
      </div>
    </div>
    <div class="board">
      <div class="card" style="width: 45%">
        <div><b>人才年龄分布</b></div>
        <br />
        <div id="mychart3"></div>
      </div>
      <div class="card" style="width: 23%">
        <div><b>人才性别结构</b></div>
        <br />
        <div id="mychart4"></div>
      </div>
      <div class="card" style="width: 23%">
        <div><b>人才教育背景分布</b></div>
        <br />
        <div id="mychart5"></div>
      </div>
    </div>
    <div class="board">
      <div class="card" style="width: 30%">
        <div><b>工作经验统计</b></div>
        <br />
        <div>
          <el-table
            :data="tableData2"
            stripe
            style="width: 100"
            :header-cell-style="{ background: '#7a83eb', color: '#fff' }"
          >
            <el-table-column prop="time" label="工作经验时长" width="170" />
            <el-table-column prop="nums" label="人数" width="170" />
            <el-table-column prop="result" label="占比" />
          </el-table>
        </div>
      </div>
      <div class="card" style="width: 68%">
        <div><b>人简历状态漏斗</b></div>
        <div id="mychart2"></div>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "../../router";
import * as echarts from "echarts"; //引入echarts
import theme from "../../utils/echarts"; //引入主题
import apiFun from "../../utils/api";
let data = ref({
  num1: 225, //人才库简历总数
  num2: 11, //现有岗位总数
  num3: 176, //公司需求数
  num4: "42.5%", //完成率
  num5: 195, //男性人数
  num6: 132, //女性人数
  stages: [
    //状态结点
    { value: 17, name: "入职数" },
    { value: 39, name: "offer数" },
    { value: 63, name: "进面数" },
    { value: 74, name: "筛选通过数" },
    { value: 175, name: "投递数" },
  ],
  //按照后面条件的年龄分布["26以下", "26-30", "30-34", "34-38", "38-42", "42以上"]
  ages: [12, 24, 18, 18, 8, 3],
  //按照后面条件顺序的学历分布情况 ["博士","硕士","本科","大专"]
  educations: [11, 20, 43, 3],
  //按照后面条件的工作经验时长分布["0经验", "(0,3]年", "(3,5]年经验", "(5,10]年经验", "(10,~]年经验"]
  experiences: [42, 74, 63, 39, 7],
});
onMounted(() => {
  initEcharts();
});
const tableData2 = [
  {
    time: "0经验",
    nums: data.value.experiences[0],
    result:
      ((data.value.experiences[0] / data.value.num1) * 100).toFixed(2) + "%",
  },
  {
    time: "(0,3]年经验",
    nums: data.value.experiences[1],
    result:
      ((data.value.experiences[1] / data.value.num1) * 100).toFixed(2) + "%",
  },
  {
    time: "(3,5]年经验",
    nums: data.value.experiences[2],
    result:
      ((data.value.experiences[2] / data.value.num1) * 100).toFixed(2) + "%",
  },
  {
    time: "(5,10]年经验",
    nums: data.value.experiences[3],
    result:
      ((data.value.experiences[3] / data.value.num1) * 100).toFixed(2) + "%",
  },
  {
    time: "(10,~]年经验",
    nums: data.value.experiences[4],
    result:
      ((data.value.experiences[4] / data.value.num1) * 100).toFixed(2) + "%",
  },
];
// 初始化表格
const initEcharts = () => {
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
        data: data.value.stages,
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
        data: data.value.ages,
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
          { value: data.value.num5, name: "男" },
          { value: data.value.num6, name: "女" },
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
          { value: data.value.educations[0], name: "博士" },
          { value: data.value.educations[1], name: "硕士" },
          { value: data.value.educations[2], name: "本科" },
          { value: data.value.educations[3], name: "大专" },
        ],
      },
    ],
  };
  echarts.registerTheme("theme", theme); //注册主题
  const myChart2 = echarts.init(document.getElementById("mychart2"), "theme");
  const myChart3 = echarts.init(document.getElementById("mychart3"), "theme");
  const myChart4 = echarts.init(document.getElementById("mychart4"), "theme");
  const myChart5 = echarts.init(document.getElementById("mychart5"), "theme");
  myChart2.setOption(echarts2);
  myChart3.setOption(echarts3);
  myChart4.setOption(echarts4);
  myChart5.setOption(echarts5);
};
</script>

<style lang="scss" scoped>
.box {
  height: 1000px;
  padding: 0 140px;
}
.cur {
  background: url("../../assets/imgs/波纹背景.png") no-repeat;
  background-size: 100%;
  background-position-y: bottom;
}
.back {
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 140px;
  width: 100px;
  height: 100px;
  font-size: 25px;
  font-weight: 700;
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