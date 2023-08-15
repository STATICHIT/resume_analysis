<!--
 * @Author: STATICHIT
 * @Date: 2023-06-10 11:18:26
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-15 20:57:40
 * @FilePath: \resume_analysis\src\views\page\Matching.vue
 * @Description: 人岗匹配
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
                    {{ item.name }}
                  </p>
                </div>
              </div>
              <button @click="lastMatching">开始匹配</button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手动输入岗位" name="second">
            <div style="padding: 20px">
              <label for="name" style="text-align: left">岗位名:</label>
              <input
                type="text"
                id="name"
                name="user_name"
                v-model="moreText1"
              />
              <label for="bio" style="text-align: left">岗位描述:</label>
              <textarea id="bio" name="user_bio" v-model="moreText2"></textarea>
              <button @click="curMatching">开始匹配</button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right" v-loading.lock="Loading">
        <img
          v-if="initialImg"
          src="../../assets//search.png"
          alt=""
          class="searchImg"
        />
        <empty-data v-if="isEmptys === true" msg="暂无匹配简历"></empty-data>
        <div class="selectBox selectBox2">
          <div
            v-for="(item, i) in talents"
            :key="i"
            :class="item.name == selectTalent ? 'checkstyle2' : ''"
            @click="intoTalent(item)"
            class="TalentCard"
          >
            <div>
              <div class="title">{{ item.title || "暂无专业数据" }}</div>
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
                {{ item.name || "暂无姓名数据" }} |
                {{ item.score || "暂无学历数据" }} |
                {{ item.expr + "年工作经验" || "暂无工作经验年限数据" }}
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
import { ref, onMounted } from "vue";
import apiFun from "../../utils/api";
import router from "../../router";
import EmptyData from "@/components/EmptyData.vue";
const activeName = ref("first");
const isEmptys = ref(false);
onMounted(() => {
  Per();
});
function Per() {
  //获取现有岗位
  apiFun.job.getAll().then((res) => {
    console.log(res.data);
    if (res.data) {
      jobs.value = [];
      res.data.forEach((j) => {
        jobs.value.push({ name: j.name, id: j.id });
      });
    }
  });
}

const jobs = ref([
  { id: 1, name: "产品运营" },
  { id: 2, name: "平面设计师" },
  { id: 3, name: "财务" },
  { id: 4, name: "市场营销" },
  { id: 5, name: "项目主管" },
  { id: 6, name: "开发工程师" },
  { id: 7, name: "文员" },
  { id: 8, name: "电商运营" },
  { id: 9, name: "人力资源管理" },
  { id: 10, name: "风控专员" },
]);
let selectJob = ref();
let selectId = ref();
let changeJob = (item) => {
  selectJob.value = item.name;
  selectId.value = item.id;
};
const Loading = ref(false); //Loading动画
const initialImg = ref(true);
//选择现有岗位匹配
const lastMatching = () => {
  Loading.value = true;
  apiFun.job.PJMatch(selectId.value).then((res) => {
    console.log("匹配结果:", res);
    talents.value = [];
    if (res.data.list === null || res.data.list.length === 0) {
      isEmptys.value = true; //空
    } else {
      isEmptys.value = false; //非空
      res.data.list.forEach(function (j) {
        let content = JSON.parse(j.resume.content);
        talents.value.push({
          id: j.resume.id,
          name: j.resume.fullName,
          score: content.education,
          expr: content.workYears,
          value: (j.score * 5).toFixed(2),
          title: content.major,
          tags: j.skills.slice(0, 8),
        });
      });
    }
    Loading.value = false;
    initialImg.value = false;
  });
};
//手动输入岗位匹配
let moreText1 = ref();
let moreText2 = ref();
const curMatching = () => {
  Loading.value = true;
  console.log(moreText1.value);
  console.log(moreText2.value);
  let jobContent = "岗位名：" + moreText1.value + ";" + moreText2.value;
  console.log("拼接字符串:", jobContent);
  apiFun.job.jobAnalysis(jobContent).then((res) => {
    console.log("字段匹配结果", res);
    talents.value = [];
    if (res.data.list === null || res.data.list.length === 0) {
      isEmptys.value = true; //空
    } else {
      res.data.list.forEach((j) => {
        let content = JSON.parse(j.resume.content);
        console.log(j.score);
        talents.value.push({
          id: j.resume.id,
          name: j.resume.fullName,
          score: content.education,
          expr: content.workYears,
          value: (j.score * 5).toFixed(2),
          title: content.major,
          tags: j.skills.slice(0, 8),
        });
      });
    }
    Loading.value = false;
    initialImg.value = false;
  });
};

const talents = ref([
  // {
  //     name: "李明",
  //     score: "本科",
  //     expr: "3",
  //     value: 5.0,
  //     title: "后端开发",
  //     tags: [
  //       "数据库管理",
  //       "网络安全",
  //       "敏捷开发",
  //       "后端开发",
  //       "系统架构",
  //       "Flutter",
  //       "Rust",
  //       "React",
  //       "Angular",
  //     ],
  //   },
  //   {
  //     name: "张旭",
  //     score: "硕士",
  //     expr: "5",
  //     value: 4.7,
  //     title: "数据工程",
  //     tags: [
  //       "软件调试",
  //       "性能优化",
  //       "多线程编程",
  //       "安全漏洞分析",
  //       "自动化测试",
  //       "后端框架",
  //       "Spring",
  //       "Django",
  //     ],
  //   },
  //   {
  //     name: "王乐洋",
  //     score: "博士",
  //     expr: "2",
  //     value: 4.2,
  //     title: "项目开发",
  //     tags: [
  //       "Java",
  //       "Python",
  //       "C++",
  //       "前端框架",
  //       "安全防护",
  //       "性能调优",
  //       "Keras",
  //       "scikit-learn",
  //       "内部工具开发",
  //     ],
  //   },
  //   {
  //     name: "刘芳语",
  //     score: "硕士",
  //     expr: "2",
  //     value: 3.9,
  //     title: "软件质量保证",
  //     tags: [
  //       "备份策略",
  //       "系统管理员",
  //       "日志分级",
  //       "缓存技术",
  //       "性能监测",
  //       "数据可视化",
  //       "虚拟化技术",
  //       "容错设计",
  //     ],
  //   },
  //   {
  //     name: "陈宇",
  //     score: "硕士",
  //     expr: "2",
  //     value: 3.2,
  //     title: "数据工程",
  //     tags: [
  //       "Python",
  //       "Git",
  //       "SVN",
  //       "敏捷开发",
  //       "面向服务架构",
  //       "软件安全",
  //       "大数据处理",
  //       "容器技术",
  //       "Docker",
  //     ],
  //   },
  //   {
  //     name: "杨洋",
  //     score: "本科",
  //     expr: "4",
  //     value: 2.6,
  //     title: "网络安全",
  //     tags: [
  //       "Java",
  //       "Python",
  //       "C++",
  //       "PHP",
  //       "软件开发流程",
  //       "网络拓扑设计",
  //       "数据库备份恢复",
  //       "软件故障处理",
  //     ],
  //   },
]);

//查看人文详细跳转
let selectTalent = ref();
let intoTalent = (item) => {
  window.open(`/analysisPage?id=${item.id}`, "_blank"); //另外起新页面进行跳转
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
  margin-top: 80px;
  margin-bottom: 10px;
}
.main {
  margin: 50px auto;
  width: 75%;
  height: 630px;
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
  color: black;
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
  margin-left: 10px;
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
  background-color: #ecf5ff;
  color: #409eff;
  font-weight: 600;
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
  height: 35px;
  width: 180px;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
  margin-left: 25%;
}

button:hover {
  background: #444fcf;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
}
.searchImg {
  margin-top: 40px;
  height: 90%;
  width: 90%;
}
</style>