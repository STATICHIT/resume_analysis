<!--
 * @Author: STATICHIT
 * @Date: 2023-06-10 11:18:26
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-15 22:05:43
 * @FilePath: \resume_analysis\src\views\page\Matching.vue
 * @Description: 自定义
-->
<template>
  <div class="box cur">
    <div class="bigTitle">人岗匹配</div>
    <div class="main">
      <div class="left">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="选择现有岗位" name="first">
            <div style="padding: 20px 0 20px 20px">
              <div class="selectBox1">
                <div
                  v-for="(item, i) in jobs"
                  :key="i"
                  :class="item.name == selectJob ? 'checkstyle' : ''"
                  @click="changeJob(item)"
                  class="jobCard"
                >
                  <p>
                    <!-- {{ i + 1 }}.&nbsp;&nbsp; -->
                    {{ item.name }}
                  </p>
                </div>
              </div>
              <button @click="openFullScreen">开始匹配</button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手动输入岗位" name="second">
            <div style="padding: 20px">
              <label for="name" style="text-align: left">岗位名:</label>
              <input type="text" id="name" name="user_name" />
              <label for="bio" style="text-align: left">岗位描述:</label>
              <textarea id="bio" name="user_bio"></textarea>
              <button>开始匹配</button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right" v-loading.lock="fullscreenLoading">
        <div class="selectBox selectBox2">
          <div
            v-for="(item, i) in talents"
            :key="i"
            :class="item.name == selectTalent ? 'checkstyle2' : ''"
            @click="intoTalent(item)"
            class="TalentCard"
          >
            <div>
              <div class="title">{{ item.title }}</div>
              <div>
                匹配度：
                <el-rate
                  v-model="item.value"
                  disabled
                  text-color="#ff9900"
                  score-template="{value} points"
                />
              </div>
              <div class="littleTitle">
                {{ item.name }} | {{ item.score }} | {{ item.expr }}年工作经验
              </div>
              <div v-for="(x, ii) in item.tags" :key="ii" class="tags">
                <el-tag>{{ x }}</el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../../router";
const activeName = ref("first");
const jobs = [
  { name: "web前端开发工程师" },
  { name: "FPGA原型验证工程师" },
  { name: "解决方案工程师" },
  { name: "全物屋定制家具设计师" },
  { name: "Kubernetes开发工程师" },
  { name: "B端产品经理" },
  { name: "Java开发工程师" },
  { name: "C++开发工程师" },
  { name: "Bweb前端开发工程师" },
  { name: "BFPGA原型验证工程师" },
  { name: "B解决方案工程师" },
  { name: "B全物屋定制家具设计师" },
  { name: "BKubernetes开发工程师" },
  { name: "BB端产品经理" },
  { name: "BJava开发工程师" },
  { name: "BC++开发工程师" },
  { name: "Cweb前端开发工程师" },
  { name: "CFPGA原型验证工程师" },
  { name: "C解决方案工程师" },
  { name: "C全物屋定制家具设计师" },
  { name: "CKubernetes开发工程师" },
  { name: "CB端产品经理" },
  { name: "CJava开发工程师" },
  { name: "CC++开发工程师" },
];
let selectJob = ref();
let changeJob = (item) => {
  selectJob.value = item.name;
};
const fullscreenLoading = ref(false);
const openFullScreen = () => {
  fullscreenLoading.value = true;
  setTimeout(() => {
    fullscreenLoading.value = false;
  }, 2000);
};

const talents = [
  {
    name: "彭于晏",
    score: "硕士",
    expr: "4",
    value: 5.0,
    title: "机器学习算法工程师",
    tags: [
      "人脸识别",
      "训练",
      "机器学习",
      "svm",
      "sql数据库",
      "linux",
      "语音识别",
      "matlab",
      "算法研究",
      "语音识别",
    ],
  },
  {
    name: "陈翔",
    score: "硕士",
    expr: "3",
    value: 4.7,
    title: "ISP算法工程师",
    tags: [
      "摄影",
      "ubuntu",
      "仿真",
      "分类器",
      "opencv",
      "AI",
      "训练",
      "语音识别",
      "based",
      "ssm",
    ],
  },
  {
    name: "李珊",
    score: "硕士",
    expr: "3",
    value: 4.4,
    title: "机器学习算法工程师",
    tags: [
      "svm",
      "sql数据库",
      "linux",
      "语音识别",
      "matlab",
      "算法研究",
      "语音识别",
      "人脸识别",
      "训练",
      "机器学习",
    ],
  },
  {
    name: "陈静",
    score: "硕士",
    expr: "2",
    value: 3.9,
    title: "ISP算法工程师",
    tags: ["吃", "喝", "玩", "乐"],
  },
  {
    name: "周雷鸣",
    score: "硕士",
    expr: "2",
    value: 3.9,
    title: "机器学习算法工程师",
    tags: [
      "人脸识别",
      "训练",
      "机器学习",
      "svm",
      "sql数据库",
      "linux",
      "语音识别",
    ],
  },
  {
    name: "易烊千玺",
    score: "硕士",
    expr: "4",
    value: 2.6,
    title: "ISP算法工程师",
    tags: ["人脸识别", "算法研究", "语音识别"],
  },
];
let selectTalent = ref();
let intoTalent = (item) => {
  console.log(item.name);
  router.push({ path: "/analysisPage" });
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.box {
  padding: 30px 0;
  background-color: #fff;
  height: 1000px;
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
  margin-top: 100px;
}
.main {
  margin: 50px auto;
  width: 75%;
  height: 600px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.left {
  width: 40%;
  height: 600px;
  float: left;
  padding: 30px;
}
.right {
  width: 60%;
  height: 600px;
  padding: 30px;
  background-color: rgba(218, 238, 247, 0.466);
  float: left;
}
.selectBox1 {
  height: 420px;
  overflow: auto;
}
.selectBox2 {
  height: 540px;
  overflow: auto;
}
.selectBox::-webkit-scrollbar {
  width: 5px;
  overflow-y: scroll;
}
.selectBox::-webkit-scrollbar-thumb {
  background: #92d4f3;
}
.selectBox::-webkit-scrollbar-track {
  background: #c4dfeb;
}
.bigTitle {
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}
input,
textarea {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #f6f9fc;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}
input {
  height: 20px;
}
textarea {
  height: 270px;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
}

label {
  display: block;
  margin-bottom: 8px;
}
.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #fff;
}
.jobCard {
  cursor: pointer;
  padding: 0 0 0 125px;
  height: 40px;
  width: 93%;
  line-height: 40px;
  border-radius: 5px;
  font-size: 16px;
  text-align: left;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.TalentCard {
  cursor: pointer;
  height: 140px;
  padding: 10px;
  width: 97%;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #fff;
}
.TalentCard:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
.jobCard:hover {
  box-shadow: rgba(0, 0, 0, 0.356) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.checkstyle {
  border: 1px solid rgb(160, 157, 157);
  box-shadow: rgba(0, 0, 0, 0.521) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.title {
  font-size: 20px;
  font-weight: 700;
}
.littleTitle {
  color: #444fcf;
  font-weight: 550;
}
.tags {
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
}
button {
  background: #7a83e7;
  border: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 35px;
  padding: 0px 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 200;
  width: 180px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 25%;
}

button:hover {
  background: #444fcf;
}
</style>