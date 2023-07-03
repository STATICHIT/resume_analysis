<!--
 * @Author: STATICHIT
 * @Date: 2023-05-31 22:30:09
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-02 21:00:08
 * @FilePath: \resume_analysis\src\views\page\Self.vue
 * @Description: 自定义
-->
<template>
  <div class="box cur">
    <div>
      <img class="head" src="../../assets/imgs/10.png" alt="图片加载出错" />
    </div>
    <div class="main">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
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
          <div
            class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
            style="padding: 30px 80px"
          >
            <ul class="timeline" v-for="(item, i) in logs" :key="i">
              <li class="timeline-item">
                <div>
                  <span>{{ item.time }}</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">{{ item.action }}</h3>
                  <div>
                    <p>
                      {{ item.detail }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="简历去重" name="third">
          <div style="height: 100%; min-height: 800px; padding: 20px">
            <h2>
              已检测到
              <span style="color: #5959f1"> {{ num }} </span> 组简历可能重复
            </h2>
            <br />
            <div v-for="(resume, index) in resumes" :key="index">
              <div class="line">
                <span class="text"
                  ><h3>第{{ index + 1 }}组</h3></span
                >
              </div>
              <div v-for="(re, idx) in resume" :key="idx" class="resume_show">
                <img class="resumeImg" :src="re.imgSrc" alt="显示出错" />
              </div>
              <div class="mybutton">
                <button class="detail">查看详细</button>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts"; //引入echarts
import theme from "../../utils/echarts"; //引入主题
const activeName = ref("first");
onMounted(() => {
  // pre();
});
let logs = [
  {
    time: "2023年6月18日 22点17分",
    action: "发送面试邀约",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月18日 11点26分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月17日 9点23分",
    action: "发送入职邀约",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月16日 7点11分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月16日 7点11分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月16日 7点11分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
];
let num = ref(4);
onMounted(() => {
  initEcharts();
});
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

.timeline {
  line-height: 1.4em;
  list-style: none;
}

.timeline-item {
  padding-left: 40px;
  position: relative;
}

.timeline-marker:before {
  background: #ff6b6b;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
}

.timeline-marker:after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}

.timeline-content {
  padding-top: 20px;
  padding-bottom: 40px;
}
.timeline-title {
  margin-bottom: 10px;
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
  width: 300px;
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
.resumeImg {
  height: 200px;
  margin-right: 20px;
  height: 250px;
  box-shadow: rgba(99, 99, 99, 0.452) 0px 2px 8px 0px;
}
.detail {
  margin-right: 80px;
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
  height: 200px;
  display: inline-block;
}
.mybutton {
  float: right;
  margin-top: -220px;
}
</style>