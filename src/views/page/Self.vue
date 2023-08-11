<!--
 * @Author: STATICHIT
 * @Date: 2023-05-31 22:30:09
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-08-11 16:11:35
 * @FilePath: \resume_analysis\src\views\page\Self.vue
 * @Description: 账号个体主页，包含三个模块（数据大屏，操作日志，简历去重）
-->
<template>
  <div class="box cur">
    <div>
      <img class="head" src="../../assets/imgs/10.png" alt="图片加载出错" />
    </div>
    <div class="main">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="数据检测" name="first">
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
            <div class="card" style="width: 35%">
              <div><b>部门完成率</b></div>
              <br />
              <div>
                <el-table
                  :data="tableData1"
                  stripe
                  style="width: 100"
                  :header-cell-style="{ background: '#7a83eb', color: '#fff' }"
                >
                  <el-table-column
                    prop="department"
                    label="需求部门"
                    width="140"
                  />
                  <el-table-column prop="needs" label="需求数" width="105" />
                  <el-table-column prop="offers" label="入职数" width="105" />
                  <el-table-column prop="result" label="完成率" />
                </el-table>
              </div>
            </div>
            <div class="card" style="width: 63%">
              <div><b>部门完成进度</b></div>
              <br />
              <div id="mychart1"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="操作日志" name="second">
          <log :logs="logs"></log>
        </el-tab-pane>
        <el-tab-pane label="简历去重" name="third">
          <div style="height: 100%; min-height: 800px; padding: 20px">
            <h2>
              已检测到
              <span style="color: #5959f1"> {{ num }} </span> 组简历可能重复
            </h2>
            <br />
            <div v-for="(resume, index) in resumedemo" :key="index">
              <div class="line">
                <span class="text"
                  ><h3>
                    第{{ index + 1 }}组 &nbsp;&nbsp;<span style="color: #617eec"
                      >相似度：{{ resume.score }}</span
                    >
                  </h3></span
                >
              </div>
              <div class="resume_show">
                <img
                  class="resumeImg"
                  src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?"
                  alt="显示出错"
                />
                <img
                  class="resumeImg"
                  src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?"
                  alt="显示出错"
                />
                <div class="describe">
                  <div class="uppart" style="height: 100px">
                    <div
                      class="resume1"
                      style="display: inline-block; margin-right: 100px"
                    >
                      <h3 style="color: #617eec; margin-bottom: 10px">
                        Resume1
                      </h3>
                      <b>{{ resume.resume1.fullName }}</b>
                      <br />
                      <b>{{ resume.resume1.processStage }}</b>
                    </div>
                    <div class="resume2" style="display: inline-block">
                      <h3 style="color: #617eec; margin-bottom: 10px">
                        Resume2
                      </h3>
                      <b>{{ resume.resume2.fullName }}</b>
                      <br />
                      <b>{{ resume.resume2.processStage }}</b>
                    </div>
                  </div>
                  <hr style="width: 70%" />
                  <div class="downpart" style="height: 100px; padding: 20px">
                    <ul v-for="(item, i) in resume.label" :key="i">
                      <li>
                        <div>
                          <span>{{ item }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- <div v-for="(re, idx) in resume" :key="idx" class="resume_show">
                <img class="resumeImg" :src="re.imgSrc" alt="显示出错" />
              </div> -->

              <div class="mybutton">
                <button class="detail" @click="intoDetail">查看详细</button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="邀约模板" name="fourth">
          <!-- <div
            style="height: 100%; min-height: 800px; padding: 20px; float: left"
          > -->
            <invite></invite>
          <!-- </div> -->
          <!-- <div class="tembutton">
            <div class="mybutton2">
              <button class="detail">切换模板</button>
              <button class="detail">确认模板</button>
            </div>
          </div> -->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts"; //引入echarts
import theme from "../../utils/echarts"; //引入主题
import invite from "../../components/Invitation.vue";
import log from "../../components/Log.vue";
import apiFun from "../../utils/api";
import router from "../../router";
const activeName = ref("first");
let num = ref(4);

const logs = ref([])

const getLogs = () => {
  apiFun.log.getLogByUser().then((res) => {
    logs.value = res.data;
  });
};


onMounted(() => {
  getLogs()
  initEcharts();
});




const resumedemo = ref([
  {
    resume1: {
      id: 1,
      fullName: "黎芸贵",
      processStage: "投递人选", //流程状态
    },
    resume2: {
      id: 2,
      fullName: "江奕云",
      processStage: "笔试阶段", //流程状态
    },
    label: ["项目经历相似", "工作经历相似"],
    score: 9.2,
  },
  {
    resume1: {
      id: 3,
      fullName: "吉茹定",
      processStage: "笔试阶段", //流程状态
    },
    resume2: {
      id: 4,
      fullName: "张子航",
      processStage: "面试阶段", //流程状态
    },
    label: ["教育经历相似", "项目经历相似", "工作经历相似"],
    score: 8.5,
  },
  {
    resume1: {
      id: 5,
      fullName: "黄乙轩",
      processStage: "offer阶段", //流程状态
    },
    resume2: {
      id: 6,
      fullName: "黄乙轩",
      processStage: "候选人阶段", //流程状态
    },
    label: ["姓名相同", "工作经历相似"],
    score: 7.3,
  },
  {
    resume1: {
      id: 7,
      fullName: "陈翔",
      processStage: "offer阶段", //流程状态
    },
    resume2: {
      id: 8,
      fullName: "陈翔",
      processStage: "候选人阶段", //流程状态
    },
    label: ["姓名相同", "项目经历相似", "工作经历相似"],
    score: 7.3,
  },
  {
    resume1: {
      id: 9,
      fullName: "李珊",
      processStage: "offer阶段", //流程状态
    },
    resume2: {
      id: 10,
      fullName: "李珊",
      processStage: "候选人阶段", //流程状态
    },
    label: ["姓名相同", "项目经历相似"],
    score: 7.3,
  },
]);

//跳转到详细页
function intoDetail() {
  router.push({ path: "/sameResume" });
}
const resumes = [
  [
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
  ],
  [
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
  ],
  [
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
  ],
  [
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
    {
      imgSrc:
        "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/108587e5aac04e5e8de293824f8c2950~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",
    },
  ],
];
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
  height: 100%;
}
.head {
  width: 100%;
  height: 250px;
}
.main {
  height: 100%;
  padding: 20px 200px 0 200px;
}
.cur {
  background: url("../../assets/imgs/波纹背景.png") no-repeat;
  background-size: 100%;
  background-position-y: bottom;
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
  width: 90%;
  height: 250px;
}
#mychart5 {
  width: 100%;
  height: 250px;
}
.line {
  border-top: 1px solid rgba(145, 143, 143, 0.308);
  text-align: left;
  margin-top: 20px;
  margin-bottom: 30px;
}
.text {
  position: relative;
  top: -14px;
  color: rgb(163, 159, 159);
}
.resume_show .describe {
  float: right;
  background-color: rgba(242, 245, 245, 0.575);
  width: 500px;
  height: 250px;
  padding: 40px 10px;
  box-shadow: rgba(99, 99, 99, 0.252) 0px 2px 8px 0px;
}
.resumeImg {
  margin-right: 60px;
  height: 250px;
  box-shadow: rgba(99, 99, 99, 0.452) 0px 2px 8px 0px;
}
.detail {
  margin-top: 20px;
  width: 200px;
  background: #1de9b6;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
}

.detail:hover {
  background: #64ffda;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
}
.resume_show {
  height: 250px;
  display: inline-block;
}
.mybutton {
  float: right;
  margin-top: -220px;
}
// .mybutton2 {
//   height: 200px;
//   margin-top: 160%;
// }
// .tembutton {
//   width: 350px;
//   height: 100%;
//   min-height: 800px;
//   padding: 20px;
//   float: right;
// }
</style>