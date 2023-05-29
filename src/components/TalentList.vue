<template>
  <div>
    <div class="result">
      <h2 style="float: left">共为您查询到 {{state.total}} 条查找结果</h2>
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
      <div class="talentCard" @list="list" v-for="item in list" :key="item">
        <div class="job-board-category">
          <img class="job-img" :src="item.avatar" alt="暂无证件照" />
        </div>
        <div class="postings">
          <div class="single-posting">
            <h2 style="margin-bottom: 5px">
              姓名：{{ item.name }} {{ item.englishname }}
            </h2>
            <h3>{{ item.country }} · {{ item.area }}</h3>
            <div class="posting-detail">
              <!-- 电话: {{ item.phone }} &nbsp;&nbsp; | 邮箱: {{ item.email }} -->
              <!-- <br /> -->
              {{ item.gender }} | {{ item.age }}岁 | {{ item.degree }} |
              {{ item.experience }}年工作经验
            </div>
          </div>
          <div class="single-posting">
            <h2>
              <a href="" target="_blank">应聘岗位：{{ item.work }}</a>

              <span class="label label-full-time">全职</span>
            </h2>
            <p>
              本职位公司预计招聘3个实习生，要求本科及以上毕业学历。招聘截止于2023年12月12日，预计本年
            </p>
          </div>
          <a href="" target="_blank">查看岗位分析结果</a
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" target="_blank">查看简历分析结果</a>
        </div>
        <div class="border"></div>
      </div>
      <div class="talent-pool">
        <p>
          活：人才是“活”的 简：找人是简单的 通：人才管道是通的
          准：目标人才库是准的
        </p>
        <br />
        <button>查看人才库管理可视化图</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
// let name=ref("\u{20BB7}")
// let name=ref("\uD842\uDFB7")
let list = [
  {
    name: "王鹤棣",
    avatar:
      "https://p9.itc.cn/images01/20210311/82e8db2177114f5ca3b4eb156d7ce3b3.jpeg",
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
    avatar:
      "https://p4.itc.cn/images01/20210311/941dab3331cf4f179b53961e84bafa23.jpeg",
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
    avatar:
      "https://p0.itc.cn/images01/20210311/5b0e13d226904cb5ab6d4f7919a4ae5d.png",
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
];
const state = reactive({
  tableData: [],
  total: 200, // 总条数
  currentPage: 1, // 当前页
  pageSize: 8,
});
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 36px;
  color: #333;
  line-height: 36px;
  display: block;
}

h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #333;
  line-height: 24px;
  display: inline-block;
  margin: 0;
}

h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #999;
  line-height: 22px;
  display: inline-block;
  margin: 0;
}

p {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #333;
  line-height: 25px;
  display: inline-block;
  margin: 0;
}

a {
  color: #7a83e7;
  text-decoration: underline;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
}

a:hover {
  color: #442adb;
}

h2 a {
  color: #333;
  text-decoration: none;
  font-size: 17px;
  margin-right: 8px;
  line-height: 24px;
}

.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #fff;
}

/* Demo-Specific CSS */

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

button:hover {
  background: #444fcf;
}

body {
  background: #f2f2f2;
  margin: 0;
}

header {
  background: #fff;
  width: 100%;
  padding-bottom: 25px;
}

button {
  float: right;
  display: inline-block;
  margin-top: 15px;
  margin-right: 15px;
}
.name {
  float: left;
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
  margin-bottom: 25px;
}

.job-board-category {
  width: 24%;
  float: left;
  padding-right: 40px;
  display: inline-block;
}

.job-img {
  width: 170px;
  height: 230px;
}
.job-board-category h2 {
  text-transform: uppercase;
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;
}

.job-board-category p {
  font-style: italic;
  color: #999999;
  margin: 0;
}
.result {
  background-color: #fff;
  width: 1220px;
  height: 40px;
  padding: 40px;
  margin: 0 auto;
}
.postings {
  width: 68%;
  float: left;
}

.postings h2 {
  margin-bottom: 0;
}

.postings h3 {
  margin: 0 0 10px 0;
  display: block;
}

.postings p {
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: break-word;
  width: 100%;
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
.border {
  width: 100%;
  height: 1px;
  background: #ccc;
  margin-top: 15px;
  margin-bottom: 40px;
  float: left;
}
</style>