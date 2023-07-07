<!--
 * @Author: STATICHIT
 * @Date: 2023-05-25 19:44:37
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-07 17:30:43
 * @FilePath: \resume_analysis\src\components\TalentList.vue
 * @Description: 人才列表
-->
<template>
  <div>
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
              <h2 class="names">{{ item.name }}</h2>
              <!-- <h2 class="names">{{ item.name }} {{ item.englishname }}</h2> -->
              <el-tooltip v-for="item in state2.lights" :key="item">
                <template #content> 简历亮点 </template>
                <el-button class="tooltip">{{ item }}</el-button>
              </el-tooltip>
              <div class="posting-detail">
                <p>
                  {{ item.gender }} | {{ item.age }}岁 | {{ item.degree }} |
                  {{ item.experience }}年工作经验
                </p>
                <br />
                <p>
                  电话: {{ item.phone }} &nbsp;&nbsp; | 邮箱: {{ item.email }}
                </p>
              </div>
            </div>
            <div class="single-posting">
              <div class="post">应聘岗位：{{ item.work }}</div>
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
</template>

<script setup>
import { reactive, ref } from "vue";
import { defineProps } from "vue";
import router from "../router";
const props = defineProps({
  result: {
    type: Object,
    default: "",
  },
});

let list = ref([
  {
    name: "王鹤棣",
    phone: "19806520243",
    email: "248568722@qq.com",
    englishname: "ChenJingDe",
    country: "中国",
    area: "湖南省长沙市",
    gender: "男",
    age: 24,
    degree: "本科",
    experience: 4,
    work: "客户解决方案主管",
    goal: "全职",
  },
  {
    name: "杨 颖",
    phone: "19806520243",
    email: "248568722@qq.com",
    englishname: "AngelBaby",
    country: "中国",
    area: "上海市",
    gender: "女",
    age: 22,
    degree: "硕士",
    experience: 2,
    work: "用户界面开发人员",
    goal: "实习",
  },
  {
    name: "陈伟霆",
    phone: "19806520243",
    email: "248568722@qq.com",
    englishname: "ChenWeiTing",
    country: "中国",
    area: "上海市",
    gender: "男",
    age: 22,
    phone: "15905895217",
    email: "2394412110@qq.com",
    degree: "硕士",
    experience: 2,
    work: "用户服务开发人员",
    goal: "兼职",
  },
  {
    name: "陈翔",
    phone: "19806520243",
    email: "248568722@qq.com",
    englishname: "ChenXiang",
    country: "中国",
    area: "上海市",
    gender: "男",
    age: 22,
    phone: "15905895217",
    email: "2394412110@qq.com",
    degree: "硕士",
    experience: 2,
    work: "用户服务开发人员",
    goal: "兼职",
  },
  {
    name: "李珊",
    phone: "19806520243",
    email: "248568722@qq.com",
    englishname: "LiShan",
    country: "中国",
    area: "上海市",
    gender: "男",
    age: 22,
    phone: "15905895217",
    email: "2394412110@qq.com",
    degree: "硕士",
    experience: 2,
    work: "用户服务开发人员",
    goal: "兼职",
  },
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
  background-color: rgb(229, 245, 255);
  color: rgb(51, 112, 255);
  border: 0;
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

.label {
  padding: 0px 5px;
  margin-left: 10px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  margin: 0 0 0 5px;
}

.label-full-time {
  background: #239e9a;
}

.label-internship {
  background: #00aeef;
}

.label-part-time {
  background: #fbb03b;
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
  width: 83%;
  float: left;
  text-align: center;
}
.rightPart {
  width: 17%;
  padding: 80px 20px;
  float: right;
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