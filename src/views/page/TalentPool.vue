<!--
 * @Author: STATICHIT
 * @Date: 2023-05-24 22:26:39
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-12 16:59:46
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

      <!-- 搜索框组件 -->
      <div>
        <!-- <Search></Search> -->
        <div style="margin-top: 30px">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              v-model="condition.fullText"
              placeholder="请输入关键字"
            />
            <button type="submit" class="searchButton" @click="searchTalent">
              <el-icon size="25"><Search /></el-icon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 条件选择筛选框 -->
    <!-- <SearchType></SearchType>-->
    <div>
      <div class="so_condition" style="margin-top: 40px">
        <div class="lefttit">行业类型</div>
        <div class="rs">
          <div
            v-for="(item, i) in curtypeList"
            :key="i"
            :class="item.name == curtype ? 'li select' : 'li'"
            @click="select1(item)"
          >
            <div>{{ item.name }}</div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>

        <div class="lefttit">工作经验</div>
        <div class="rs">
          <div
            v-for="(item, i) in experienceList"
            :key="i"
            :class="item.name == experience ? 'li select' : 'li'"
            @click="select2(item)"
          >
            <div>{{ item.name }}</div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>

        <div class="lefttit">实际年龄</div>
        <div class="rs">
          <div
            v-for="(item, i) in ageList"
            :key="i"
            :class="item.name == age ? 'li select' : 'li'"
            @click="select3(item)"
          >
            <div>{{ item.name }}</div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>

        <div class="lefttit">更多筛选</div>
        <div class="rs">
          <div class="bli" style="">
            <el-select v-model="sex" placeholder="性别" style="width: 150px">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <div class="clear"></div>
          </div>

          <div class="bli">
            <el-select
              v-model="graduationInstitution"
              placeholder="学历要求"
              style="width: 200px"
            >
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>

            <div class="clear"></div>
          </div>
          <button class="moreButton" @click="moreCheck">更多条件筛选</button>
        </div>
      </div>

      <!-- 抽屉 -->
      <el-drawer v-model="drawer" direction="ltr" size="27%">
        <!-- 头部 -->
        <template #header>
          <h3 style="text-align: left">具名搜索(不填入即为不进行约束)</h3>
        </template>
        <!-- 内容 -->
        <template #default>
          <div class="content">
            <div class="line">
              <span class="text"><h3>基础信息</h3></span>
            </div>

            <div class="rows">
              <span class="littleTitle">姓名</span>
              <span v-if="disabled1">*</span>
              <el-input style="width: 57%" v-model="condition.basic.name" />
            </div>

            <div class="rows">
              <span class="littleTitle">性别</span>
              <el-radio-group v-model="condition.basic.sex" class="ml-4">
                <el-radio label="true" size="large" style="width: 90px"
                  >男</el-radio
                >
                <el-radio label="false" size="large" style="width: 130px"
                  >女</el-radio
                >
              </el-radio-group>
            </div>

            <div class="rows">
              <span class="littleTitle">年龄</span>
              <el-input
                style="width: 24%"
                v-model="condition.basic.minAge"
                placeholder="年龄下限"
              />
              &nbsp; —— &nbsp;
              <el-input
                style="width: 24%"
                v-model="condition.basic.maxAge"
                placeholder="年龄上限"
              />
              岁
            </div>

            <div class="rows">
              <span class="littleTitle">专业</span>
              <el-input style="width: 57%" v-model="condition.basic.major" />
            </div>

            <div class="rows">
              <span class="littleTitle">投递岗位</span>
              <el-input
                style="width: 50%"
                v-model="condition.basic.expectedJob"
              />
            </div>
            <div class="rows">
              <span class="littleTitle">毕业学校</span>
              <el-input
                style="width: 50%"
                v-model="condition.basic.graduationInstitution"
              />
            </div>
            <br />

            <div class="line">
              <span class="text"><h3>联系方式</h3></span>
            </div>

            <div class="rows">
              <span class="littleTitle">邮箱</span>
              <el-input style="width: 57%" v-model="condition.contact.email" />
            </div>
            <div class="rows">
              <span class="littleTitle">电话</span>
              <el-input style="width: 57%" v-model="condition.contact.phone" />
            </div>
            <br />
            <div class="line">
              <span class="text"><h3>工作经验</h3></span>
            </div>
            <div class="rows">
              <span class="littleTitle">工作经验</span>
              <el-input
                style="width: 24%"
                v-model="condition.workYear.lowerLimit"
                placeholder="最低年限"
              />
              &nbsp; —— &nbsp;
              <el-input
                style="width: 24%"
                v-model="condition.workYear.upperLimit"
                placeholder="最高年限"
              />
              年
            </div>
            <div class="rows">
              <span class="littleTitle">就职公司</span>
              <el-input
                style="width: 50%"
                v-model="condition.workExperience.company"
              />
            </div>
            <div class="rows">
              <span class="littleTitle">就职岗位</span>
              <el-input
                style="width: 50%"
                v-model="condition.workExperience.jobName"
              />
            </div>
            <div class="rows">
              <span class="littleTitle">附加描述</span>
              <el-input
                style="width: 50%"
                v-model="condition.workExperience.description"
              />
            </div>
            <br />
            <div class="line">
              <span class="text"><h3>其他</h3></span>
            </div>

            <div class="rows">
              <span class="littleTitle">技能证书</span>
              <el-input
                style="width: 52%"
                v-model="condition.other.skillsCertificate"
              />
            </div>
            <div class="rows">
              <span class="littleTitle">荣誉奖项</span>
              <el-input
                style="width: 52%"
                v-model="condition.other.awardsHonors"
              />
            </div>
            <div class="rows">
              <span class="littleTitle">项目经验</span>
              <el-input
                class="textarea"
                v-model="condition.other.projectExperiences"
                :rows="3"
                type="textarea"
                style="width: 350px"
              />
            </div>
          </div>
        </template>
        <!-- 尾部 -->
        <template #footer>
          <div style="flex: auto">
            <el-button @click="cancelClick">取消</el-button>
            <el-button type="primary" @click="confirmClick">确定</el-button>
          </div>
        </template>
      </el-drawer>
    </div>

    <!-- 人才状态栏 -->
    <div class="stage">
      <Stage @reLoading="reLoading" @changeStage="changeStage"></Stage>
    </div>

    <!-- 人才列表 -->
    <div>
      <!-- <TalentList v-if="flag" :result="result"></TalentList> -->
      <div class="result">
        <h2 style="float: left">
          <!-- 共为您查询到 {{ condition.total }} 条查找结果 -->
          共为您查询到 {{ state.total }} 条查找结果
        </h2>
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
                <div class="post">
                  应聘岗位：{{ item.content.expectedJob || "暂无意向" }}
                </div>
              </div>
            </div>
            <div class="rightPart">
              <a target="_blank" @click="intoTalentDetial(item.id)"
                >查看简历分析结果</a
              >
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
// import Search from "../../components/Search.vue";
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
    state.currentPage = res.data.pageNum;
    state.pageSize = res.data.pageSize;
    res.data.list.forEach((r) => {
      list.value.push({
        content: JSON.parse(r.content),
        email: r.email,
        tags: JSON.parse(r.content).labelProcessing.skillTags.slice(0, 6),
      });
    });
  });
}
function Pre() {
  //state状态选项导入
  //全部候选人导入
  search();
}
/**
 * 流程管理
 */
function reLoading() {
  // 在这里处理事件逻辑
  Pre(); //重新加载
}
function changeStage(id) {
  condition.value.processStage = id;
  search();
}

//查看简历详细分析页面
function intoTalentDetial(id) {
  router.push({
    path: "/analysisPage",
    query: {
      resumeId: id,
    },
  });
}

/**
 * 条件搜索
 */
let list = ref([]); //人才列表
const drawer = ref(false); //抽屉控件
const sex = ref(""); //性别
const graduationInstitution = ref(""); //学历要求
//条件搜索字段
const condition = ref({
  basic: {
    name: null,
    sex: null,
    minAge: null,
    maxAge: null,
    major: null,
    expectedJob: null,
    graduationInstitution: null,
  },
  contact: {
    email: null,
    phone: null,
  },
  workYear: {
    lowerLimit: null,
    upperLimit: null,
  },
  workExperience: {
    company: null,
    jobName: null,
    description: null,
  },
  other: {
    skillsCertificate: null,
    projectExperiences: null,
    awardsHonors: null,
  },
  fullText: null,
  processStage: null,
  // total: 200,
  pageNum: 1,
  pageSize: 7,
});
//打卡抽屉
function moreCheck() {
  drawer.value = true;
}

//条件搜索
function search() {
  console.log(condition.value);
  apiFun.search.conditionSearch(condition.value).then((res) => {
    console.log("数据：", res);
    state.total = res.data.total;
    state.currentPage = res.data.pageNum;
    state.pageSize = res.data.pageSize;
    list.value = [];
    if (res.data.list) {
      res.data.list.forEach((r) => {
        console.log("测试：", r.content);
        list.value.push({
          content: JSON.parse(r.content),
          email: r.email,
          tags: JSON.parse(r.content).labelProcessing.skillTags.slice(0, 5),
        });
      });
    }
  });
}
//取消具名搜索
function cancelClick() {
  drawer.value = false;
}
//确定具名搜索
function confirmClick() {
  drawer.value = false;
  search(); //搜索
}
const state = ref({
  total: 0, // 总条数
  currentPage: 1, // 当前页
  pageSize: 7, //一页的数据量
});
//换页
const changePage = (val) => {
  condition.pageNum = val;
  search();
};
//fulltext搜索
function searchTalent() {
  search();
}
/**
 * 选项数据
 */
//性别
const options1 = [
  {
    value: "Option0",
    label: "不限",
  },
  {
    value: "Option1",
    label: "男",
  },
  {
    value: "Option2",
    label: "女",
  },
];
//学历要求
const options2 = [
  {
    value: "Option0",
    label: "不限",
  },
  {
    value: "Option1",
    label: "初中",
  },
  {
    value: "Option2",
    label: "高中",
  },
  {
    value: "Option3",
    label: "本科",
  },
  {
    value: "Option4",
    label: "硕士",
  },
  {
    value: "Option5",
    label: "博士",
  },
  {
    value: "Option6",
    label: "博士后",
  },
  {
    value: "Option7",
    label: "211",
  },
  {
    value: "Option8",
    label: "双一流",
  },
  {
    value: "Option9",
    label: "留学生",
  },
  {
    value: "Option10",
    label: "在读",
  },
];
//任职时间类型
const options3 = [
  {
    value: "Option1",
    label: "全职",
  },
  {
    value: "Option2",
    label: "兼职",
  },
  {
    value: "Option3",
    label: "实习",
  },
];
//行业类型
const curtype = ref("不限");
let select1 = (item) => {
  curtype.value = item.name;
  console.log(curtype.value);
};
//工作经验
const experience = ref("不限");
let select2 = (item) => {
  experience.value = item.name;
};
//实际年龄
const age = ref("不限");
let select3 = (item) => {
  age.value = item.name;
};
//行业类型选项
const curtypeList = [
  { name: "不限" },
  { name: "IT/互联网" },
  { name: "电子/通信/硬件" },
  { name: "金融" },
  { name: "交通/贸易/物流" },
  { name: "消费品" },
  { name: "机械/制造" },
  { name: "能源/矿产环保" },
  { name: "制药/医疗" },
  { name: "专业服务" },
  { name: "教育/培训" },
  { name: "广告/媒体/娱乐/出版" },
  { name: "房地产/建筑" },
  { name: "其他" },
];
//工作经验选项
const experienceList = [
  { name: "不限" },
  { name: "无经验" },
  { name: "1年以下" },
  { name: "1-3年" },
  { name: "3-5年" },
  { name: "5-7年" },
  { name: "8-10年" },
  { name: "10年以上" },
];
//实际年龄选项
const ageList = [
  { name: "不限" },
  { name: "16-20岁" },
  { name: "21-25岁" },
  { name: "25-30岁" },
  { name: "31-35岁" },
  { name: "36-40岁" },
  { name: "41-45岁" },
  { name: "46-50岁" },
  { name: "50岁以上" },
];
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
  cursor: pointer;
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

//fulltext搜索模块样式
.search {
  width: 700px;
  margin: 0 auto;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #b7bbec;
  border-right: none;
  padding: 5px;
  height: 50px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #2a2b2a;
  font-size: 20px;
  text-indent: 10px;
}

.searchTerm:focus {
  color: rgb(141, 148, 235);
}

.searchButton {
  width: 110px;
  height: 50px;
  border: 1px solid #b7bbec;
  background: #b7bbec;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.searchButton:hover {
  background: #8991ec;
}

//条件搜索
.so_condition {
  width: 1200px;
  height: 260px;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px #eeeeee solid;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: #fff;
}
.so_condition .lefttit {
  width: 90px;
  font-weight: 900;
  padding-right: 15px;
  float: left;
  text-align: right;
  padding-top: 8px;
  margin-top: 15px;
}

.so_condition .rs {
  width: 1010px;
  margin-top: 15px;
  float: left;
}

.so_condition .rs .li {
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  height: 26px;
  line-height: 26px;
  float: left;
  border: 1px #ffffff solid;
  background-color: #ffffff;
  margin-right: 8px;
  border-radius: 3px;
  margin-top: 5px;
}
.so_condition .rs .li:hover {
  color: #a75b5b;
  border: 1px #a75b5b solid;
  background-color: #d6cdcd;
}
.clear {
  clear: both;
  height: 0px;
  font-size: 0px;
  line-height: 0px;
}

.so_condition .rs .bli {
  height: 30px;
  line-height: 30px;
  margin-right: 25px;
  float: left;
  cursor: pointer;
  margin-top: 3px;
}
.so_condition .rs .li.select {
  border: 1px #ff6600 solid;
  background-color: #fff7ee;
  color: #ff6600;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.moreButton {
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  color: rgb(117, 117, 117);
  border: none;
  cursor: pointer;
  outline: none;
}

// 抽屉

.rows {
  margin-bottom: 15px;
}
.content {
  text-align: left;
}

.littleTitle {
  font-weight: bold;
  margin-right: 20px;
}

// 分界线
.line {
  border-top: 1px solid rgba(145, 143, 143, 0.308);
  text-align: left;
  margin-bottom: 10px;
}
.text {
  position: relative;
  top: -14px;
  color: rgb(163, 159, 159);
}
</style>