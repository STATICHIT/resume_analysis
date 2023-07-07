<!--
 * @Author: STATICHIT
 * @Date: 2023-05-24 22:26:39
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-07 17:28:11
 * @FilePath: \resume_analysis\src\views\page\TalentPool.vue
 * @Description: 人才库
-->
<template>
  <div class="box">
    <div class="board1">
      <h1 style="text-align: center">云简人才库</h1>
      <br />
      <p style="text-align: center">
        帮助企业对现有人才库进行有效管理，实时监控招聘流程，制定更优的招聘策略。<br />
        基于大数据及AI简历解析技术，高效对简历库候选人进行多维度的筛选，搜索与评分。<br />
        用最灵活精准的搜索引擎来为用户打造最符合要求的候选人列表。
      </p>
      <div>
        <Search></Search>
      </div>
    </div>
    <div>
      <SearchType></SearchType>
    </div>
    <div class="stage">
      <Stage></Stage>
    </div>
    <div>
      <!-- <TalentList v-if="flag" :result="result"></TalentList> -->
      <div class="result">
        <h2 style="float: left">共为您查询到 {{ state.total }} 条查找结果</h2>
        <el-pagination
          style="float: right"
          layout="prev, pager, next"
          :total="state.total"
          :page-size="state.pageSize"
          :current-page="state.currentPage"
          @current-change="changePage"
        />
      </div>
      <div class="all-openings">
        <div @list="list" v-for="item in list" :key="item">
          <!-- <div class="job-board-category">
          <img class="job-img" :src="item.avatar" alt="暂无证件照" />
        </div> -->
          <div class="postings">
            <div class="leftPart">
              <div class="single-posting">
                <h2 class="names">{{ item.content.name }}</h2>
                <!-- <h2 class="names">{{ item.name }} {{ item.englishname }}</h2> -->
                <el-tooltip v-for="tag in item.tags" :key="tag">
                  <template #content> 相关技能 </template>
                  <el-button class="tooltip color1">{{ tag }}</el-button>
                </el-tooltip>
                <el-tooltip
                  v-for="tag in item.content.labelProcessing.jobTags"
                  :key="tag"
                >
                  <template #content> 工作经验 </template>
                  <el-button class="tooltip color3">{{ tag }}</el-button>
                </el-tooltip>

                <div class="posting-detail">
                  <p>
                    {{ item.content.gender || "未知" }} |
                    {{ item.content.age || " - " }}岁 |
                    {{ item.content.education || "未知" }} |
                    {{ item.experience || "0" }}年工作经验
                  </p>
                  <br />
                  <p>
                    电话: {{ item.content.phone }} &nbsp;&nbsp; | 邮箱:
                    {{ item.email }}
                  </p>
                </div>
              </div>
              <div class="single-posting">
                <div class="post">应聘岗位：{{ item.content.expectedJob }}</div>
              </div>
            </div>
            <div class="rightPart">
              <a href="/analysisPage" target="_blank">查看简历分析结果</a>
            </div>
          </div>
          <div class="border"></div>
        </div>
        <div class="talent-pool">
          <p>
            活：人才是“活”的 简：找人是简单的 通：人才管道是通的
            准：目标人才库是准的
          </p>
          <br />
          <button class="my-button" @click="router.push('/visualization')">
            查看人才库管理可视化图
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from "../../components/Search.vue";
import Stage from "../../components/Stage.vue";
import SearchType from "../../components/SearchType.vue";
// import TalentList from "../../components/TalentList.vue";
import { onMounted, reactive, ref } from "vue";
import apiFun from "../../utils/api";
import router from "../../router";
onMounted(() => {
  Pre();
});
//加载搜索列表数据
function getAll() {
  apiFun.search.getResumeList(1, 5).then((res) => {
    state.total = res.data.total;
    state.currentPage = res.data.current;
    state.pageSize = res.data.size;
    res.data.records.forEach((r) => {
      list.value.push({
        content: JSON.parse(r.content),
        email: r.email,
        tags: JSON.parse(r.content).labelProcessing.skillTags.slice(0, 6),
      });
    });
  });
  console.log("list:", list.value);
}
function Pre() {
  //state状态选项导入

  //全部候选人导入
  getAll();
}
let list = ref([
  // {
  //   name: "王鹤棣",
  //   phone: "19806520243",
  //   email: "248568722@qq.com",
  //   englishname: "ChenJingDe",
  //   country: "中国",
  //   area: "湖南省长沙市",
  //   gender: "男",
  //   age: 24,
  //   education: "本科",
  //   experience: 4,
  //   work: "客户解决方案主管",
  //   goal: "全职",
  // },
  // {
  //   name: "杨 颖",
  //   phone: "19806520243",
  //   email: "248568722@qq.com",
  //   englishname: "AngelBaby",
  //   country: "中国",
  //   area: "上海市",
  //   gender: "女",
  //   age: 22,
  //   education: "硕士",
  //   experience: 2,
  //   work: "用户界面开发人员",
  //   goal: "实习",
  // },
  // {
  //   name: "陈伟霆",
  //   phone: "19806520243",
  //   email: "248568722@qq.com",
  //   englishname: "ChenWeiTing",
  //   country: "中国",
  //   area: "上海市",
  //   gender: "男",
  //   age: 22,
  //   phone: "15905895217",
  //   email: "2394412110@qq.com",
  //   education: "硕士",
  //   experience: 2,
  //   work: "用户服务开发人员",
  //   goal: "兼职",
  // },
  // {
  //   name: "陈翔",
  //   phone: "19806520243",
  //   email: "248568722@qq.com",
  //   englishname: "ChenXiang",
  //   country: "中国",
  //   area: "上海市",
  //   gender: "男",
  //   age: 22,
  //   phone: "15905895217",
  //   email: "2394412110@qq.com",
  //   education: "硕士",
  //   experience: 2,
  //   work: "用户服务开发人员",
  //   goal: "兼职",
  // },
  // {
  //   name: "李珊",
  //   phone: "19806520243",
  //   email: "248568722@qq.com",
  //   englishname: "LiShan",
  //   country: "中国",
  //   area: "上海市",
  //   gender: "男",
  //   age: 22,
  //   phone: "15905895217",
  //   email: "2394412110@qq.com",
  //   education: "硕士",
  //   experience: 2,
  //   work: "用户服务开发人员",
  //   goal: "兼职",
  // },
]);
const state = reactive({
  total: 200, // 总条数
  currentPage: 1, // 当前页
  pageSize: 5,
});
const state2 = reactive({
  lights: [
    "熟练掌握英语",
    "技术达标",
    "本科毕业",
    "双一流大学",
    "大厂实习经历",
  ],
});
</script>

<style lang="scss" scoped>
.box {
  background-color: rgb(242, 247, 252);
}
.board1 {
  background-image: url("../../assets/imgs/10.png");
  text-align: center;
  width: 100%;
  height: 270px;
  padding: 50px 0 0 0;
}
.stage {
  margin: 0 auto;
  width: 1200px;
  height: 70px;
}
* {
  text-align: left;
}
h2 {
  font-weight: 600;
  font-size: 20px;
  color: #333;
  line-height: 24px;
}

h3 {
  font-weight: 600;
  font-size: 16px;
  color: #999;
  line-height: 22px;
}

p {
  font-weight: 300;
  font-size: 16px;
  color: #333;
  line-height: 25px;
}

a {
  color: #7a83e7;
  text-decoration: underline;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}

a:hover {
  color: #442adb;
}

.tooltip {
  margin-right: 10px;
  margin-top: 4px;
  margin-bottom: 10px;
  height: 22px;
  font-size: 13px;

  border: 0;
}
.color1 {
  color: #3370ff;
  background-color: rgb(229, 245, 255);
}
.color2 {
  color: #4bad42;
  background-color: rgb(237, 255, 229);
}
.color3 {
  color: #e6a23c;
  background-color: #fcf4e9;
}
button {
  background: #7a83e7;
  border: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 30px;
  padding: 0px 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.my-button:hover {
  background: #444fcf;
}

.my-button {
  display: inline-block;
  margin-top: 15px;
  margin-right: 15px;
}
.all-openings {
  width: 75%;
  min-width: 800px;
  max-width: 1220px;
  background: #fff;
  margin: 0 auto;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  padding: 50px 100px;
}

.single-posting {
  display: block;
  margin-bottom: 20px;
}
.names {
  margin-bottom: 10px;
  margin-right: 20px;
  display: inline-block;
}
.post {
  color: #118db9;
  display: inline-block;
}
.result {
  background-color: #fff;
  width: 1220px;
  height: 40px;
  padding: 40px;
  margin: 0 auto;
}
.postings {
  width: 100%;
  float: left;
  position: relative;
}

.postings h2 {
  margin-bottom: 0;
}

.postings p {
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: break-word;
  width: 100%;
}
.leftPart {
  width: 100%;
  float: left;
  text-align: center;
}
.rightPart {
  position: absolute;
  top: 45%;
  left: 80%;
}
.talent-pool {
  text-align: center;
  margin: 0 auto;
  width: 600px;
  float: none;
}
.talent-pool h2 {
  margin: 0 0 25px 0;
}

.talent-pool button {
  margin: 25px auto;
  float: none;
}
.posting-detail {
  margin-bottom: 10px;
}
.posting-detail p {
  margin-bottom: -5px;
}
.border {
  width: 100%;
  height: 1px;
  background: #ccc;
  margin-top: 15px;
  margin-bottom: 40px;
  float: left;
}
</style>