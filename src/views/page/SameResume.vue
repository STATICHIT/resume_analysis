<!--
 * @Author: STATICHIT
 * @Date: 2023-06-07 20:06:01
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-18 14:00:37
 * @FilePath: \resume_analysis\src\views\page\SameResume.vue
 * @Description: 查看相似简历详细页面
-->
<!-- 查看相似简历页面 -->
<template>
  <div class="box">
    <!-- <div style="display:flex;flex-direction:row ;gap: 10px;color: rgb(51, 51, 51);font-weight: bold;margin-top: 20px;margin-bottom: -10px;">
      <el-icon><ArrowLeftBold /></el-icon>
      返回
    </div> -->
    <div class="same-point">
      <div style="display: flex; flex-direction: row; gap: 10px">
        <img src="../../assets/imgs/icon05.png" />
        <span>简历相似度</span>
        <el-tag type="warning" class="mx-1" effect="dark">
          {{ ((currentSame.score / 3) * 100).toFixed(2) }}%
        </el-tag>
      </div>
      <ul>
        <li v-for="item in currentSame.label" :key="item">{{ item }}</li>
      </ul>
    </div>
    <!-- <button class="returnBtn" :disabled="getUp" @click="returnResume(-1)">
      <el-icon><ArrowLeftBold /></el-icon>
    </button> -->
    <div class="page animate__animated animate__fadeIn">
      <el-button
        type="danger"
        class="goBack"
        @click="deleteResume(currentSame.resume1.id)"
        style="position: absolute; right: 40px; top: 60px"
        >删除该简历
      </el-button>
      <div class="avatar">
        <img src="../../assets/avatar.png" />
        <div>
          <div class="user-tip" v-if="!currentSame.label.includes('姓名相同')">
            <h2>{{ userMsg.name }}</h2>
          </div>
          <div class="user-tip" v-else>
            <h2 style="color: red">{{ userMsg.name }}</h2>
          </div>
          <div class="user-msg">
            <el-icon><Iphone /></el-icon>
            <span>{{ userMsg.phone }}</span>
            <el-icon><Message /></el-icon>
            <span>{{ userMsg.mailBox }}</span>
            <el-icon><Briefcase /></el-icon>
            <span> {{ userMsg.workYears }}年工作经验</span>
            <img src="..\..\assets\student-icon.png" />
            <span>{{ userMsg.education }}</span>
          </div>
        </div>
      </div>
      <resume-page
        :userMsg="userMsg"
        :showReturn="false"
        :showTags="false"
        :showText="true"
        :label1="currentSame.label.includes('教育背景相似')"
        :label2="currentSame.label.includes('工作经历相似')"
        :label3="currentSame.label.includes('项目经历相似')"
        :label4="currentSame.label.includes('姓名相同')"
      ></resume-page>
    </div>
    <div class="page animate__animated animate__fadeIn">
      <el-button
        type="danger"
        class="goBack"
        @click="deleteResume(currentSame.resume2.id)"
        style="position: absolute; right: 10px; top: 60px"
        >删除该简历
      </el-button>
      <div class="avatar">
        <img src="../../assets/avatar.png" />
        <div>
          <div class="user-tip" v-if="!currentSame.label.includes('姓名相同')">
            <h2>{{ userMsg1.name }}</h2>
          </div>
          <div class="user-tip" v-else>
            <h2 style="color: red">{{ userMsg1.name }}</h2>
          </div>
          <div class="user-msg">
            <el-icon><Iphone /></el-icon>
            <span>{{ userMsg1.phone }}</span>
            <el-icon><Message /></el-icon>
            <span>{{ userMsg1.mailBox }}</span>
            <el-icon><Briefcase /></el-icon>
            <span> {{ userMsg1.workYears }}年工作经验</span>
            <img src="..\..\assets\student-icon.png" />
            <span>{{ userMsg1.education }}</span>
          </div>
        </div>
      </div>
      <resume-page
        :userMsg="userMsg1"
        :showReturn="false"
        :showTags="true"
        :showText="true"
        :label="currentSame.label"
        :label1="currentSame.label.includes('教育背景相似')"
        :label2="currentSame.label.includes('工作经历相似')"
        :label3="currentSame.label.includes('项目经历相似')"
        :label4="currentSame.label.includes('姓名相同')"
      ></resume-page>
    </div>
    <!-- <button :disabled="getNext" class="returnBtn1" @click="returnResume(1)">
      <el-icon><ArrowRightBold /></el-icon>
    </button> -->
  </div>
</template>

<script setup>
import ResumePageVue from "@/components/ResumePage.vue";
import ResumePage from "@/components/ResumePage.vue";
import ResumePortraitVue from "@/components/ResumePortrait.vue";
import animated from "animate.css";
import { computed, onMounted, reactive, ref } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { ArrowDown } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import { ElNotification } from "element-plus";
import apiFun from "@/utils/api";
import { FixedDir } from "element-plus/es/components/table-v2/src/constants";

const route = useRoute();
const query = route.query;
const same = JSON.parse(query.sameResume);
//  [ //相似度较高的简历对数组
//              {
//                  resume1: {
//                      id: 23,
//                      fullName: "", //z
//                      processStage:66 //流程状态
//                  },
//                  resume2: {
//                      id: 28,
//                      fullName: "", //z
//                      processStage: 67 //流程状态
//                  },
//                  label: [
//                      "项目经历相似",
//                      "工作经历相似",
//                  ],
//                  score: 6.7
//              },
//              {
//                  resume1: {
//                      id: 23,
//                      fullName: "", //z
//                      processStage:66 //流程状态
//                  },
//                  resume2: {
//                      id: 28,
//                      fullName: "", //z
//                      processStage: 67 //流程状态
//                  },
//                  label: [
//                      "工作经历相似",
//                  ],
//                  score: 6.5
//              }
//          ]
const index = query.index;
// 0

console.log(route.query);
const getUp = computed(() => {
  if (index === 0) return true;
  else false;
});

const getNext = computed(() => {
  console.log(index + same.length - 1);
  if (index === same.length - 1) return false;
  else true;
});

const currentSame = ref(same[index]);
console.log(currentSame.value);

/* 返回json数据 */
const state = reactive({
  lights: ["熟练掌握英语", "技术达标"],
  warns: ["本科学历异常"],
  selectTime: 1,
  selectItem: [
    {
      value: 1,
      name: "简历推荐",
    },
    {
      value: 2,
      name: "笔试阶段",
    },
    {
      value: 3,
      name: "面试阶段",
    },
    {
      value: 4,
      name: "轮岗",
    },
    {
      value: 5,
      name: "offer阶段",
    },
    {
      value: 6,
      name: "入职",
    },
    {
      value: 7,
      name: "已转正",
    },
    {
      value: 8,
      name: "淘汰",
    },
  ],
  //  state:{
  //    id:'',
  //    name:'黎芸贵',

  //    dateOfBirth:'1984.04.06',
  //    graduationInstitution:'华中师范大学',
  //    sex:'', age:'',
  //     phone:'13800138000',
  //      mailBox:'service@500d.me',
  //       education:'硕士', major:'市场营销',
  //       expectedJob:'市场总监-专注品牌方',
  //       practiceExperiences:'远亚集团品牌升级发布会\n\uf06c 集团全新品牌logo及VI上线，在多渠道进行了传播；\n\uf06c 企业VIP客户群体逾60人，结合了线上发布、线下体验；\n\uf06c 后续媒体报道持续升温，子品牌结合明星代言人制造话题营销，为期3周。\n翔震商业模式发布会\n\uf06c 整场活动以会议+洽谈双重模式进行，首日以介绍翔震内部平台资源优势，政府背\n景优势等为主，一对多推介会进行推广普及；\n\uf06c 现场签署地方合作意向书，如：新疆、江西、浙江等优秀企业商户；\n\uf06c 以中国的波尔多为宣传点，主推旗下新疆大型项目，制造营销、品牌热点。\n田海投资控股集团6A自媒体生态圈建设\n\uf06c 本项目重构了公司现有微信企业号的功能与架构；\n\uf06c 提高公众号的关注粉丝量的同时，对于有客户进行统一宣传，统一管理。',
  //       workYears:'',
  //       workExperiences:[WorkExperience(startTime:'2016.08', endTime:'至今', jobName:{'text': '副总监', 'start': 18},
  //        companyName:{'text': '田海控股集团', 'start': 11},
  //        description:'\uf06c 负责协助集团旗下事业部开展各项工作，制定品牌传播方案；\n\uf06c 结合集团与事业部发展，制定营销策略、广告策略，并组织推进执行；\n\uf06c 制定和执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析与撰写报告；\n\uf06c 研究行业发展动态，定期进行市场调查,为产品更新提供建议。'),
  //        WorkExperience(startTime:'2015.08', endTime:'2016.08', jobName:{'text': '市场及运营总监', 'start': 179}, companyName:{'text': '翔震有限公司', 'start': 172}, description:'\uf06c 根据公司发展情况进行战略调整，配合前端销售部门搭建销售渠道；\n\uf06c 研究行业发展动态，定期进行市场调查,为产品更新提供建议。'), WorkExperience(startTime:'2014.08', endTime:'2015.08', jobName:{'text': '市场副总监', 'start': 273}, companyName:{'text': '远亚俱乐部', 'start': 267}, description:'\uf06c 负责事业部产品对外推广和宣传，制定各种整合营销的活动；\n\uf06c 执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析撰写报告；\n\uf06c 向市场总监提供营销支持，并协助相关的公关事宜。')], skillsCertificate:'普通话一级甲等\n通过全国计算机二级考试，熟练运用office相关软件。\n熟练使用绘声绘色软件，剪辑过各种类型的电影及班级视频。\n大学英语四/六级（CET-4/6），良好听说读写能力，快速浏览英语专业书籍。', awardsHonors:'2013年 新长城中国地质大学自强社“优秀社员”\n2012年 三下乡”社会实践活动“优秀学生”\n2011年 中国地质大学学生田径运动会10人立定跳远团体赛第三名\n2010年 学生军事技能训练“优秀学员”\n2009年 中国地质大学盼盼杯烘焙食品创意大赛优秀奖\n2008年 西部高校大学生主题征文一等奖\n2008年 中国地质大学“点燃川大梦 畅享我青春”微博文征集大赛二等奖'},
});
function handleCommand(command) {
  state.selectItem = command;
}

/* 进行翻页操作 */
const returnResume = (num) => {
  router.push({
    path: "/sameResume",
    query: { sameResume: same, index: index + num },
  });
};

const goBack = () => {
  router.push("/self");
};

const userMsg = ref({
  id: "",
  name: "黎芸贵",
  dateOfBirth: "1984.04.06",
  graduationInstitution: "华中师范大学",
  sex: "女",
  age: "23",
  phone: "13800138000",
  mailBox: "service@500d.me",
  education: "硕士",
  major: "市场营销",
  expectedJob: "市场总监-专注品牌方",
  projectExperiences:
    "宇翰集团品牌升级发布会\nl 集团全新品牌logo及VI上线，在多渠道进行了传播；\nl 企业VIP客户群体逾60人，结合了线上发布、线下体验；\nl 后续媒体报道持续升温，子品牌结合明星代言人制造话题营销，为期3周；\n欧成商业模式发布会\nl 整场活动以会议+洽谈双重模式进行，首日以介绍欧成内部平台资源优势，政府背景优势等为主，一对多推介会\n进行推广普及；\nl 现场签署地方合作意向书，如：新疆、江西、浙江等优秀企业商户；\nl 以中国的波尔多为宣传点，主推旗下新疆大型项目，制造营销、品牌热点。\n锦伟投资控股集团6A自媒体生态圈建设\nl 本项目重构了公司现有微信企业号的功能与架构。\nl 提高公众号的关注粉丝量的同时，对于有客户进行统一宣传，统一管理。",
  workYears: 14,
  workExperiences: [
    {
      startTime: "2015.12",
      endTime: "至今",
      jobName: "副总监",
      companyName: "锦伟控股集团",
      description:
        "l 负责协助集团旗下事业部开展各项工作，制定品牌传播方案；\nl 结合集团与事业部发展，制定营销策略、广告策略、品牌策略和公关策略，并组织推进执行；\nl 制定和执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析与撰写报告；\nl 研究行业发展动态，定期进行市场调查,为产品更新提供建议。",
    },
    {
      startTime: "2013.12",
      endTime: "2015.12",
      jobName: "市场及运营总监",
      companyName: "欧成有限公司",
      description:
        "l 根据公司发展情况进行战略调整，配合前端销售部门搭建销售渠道；\nl 研究行业发展动态，定期进行市场调查,为产品更新提供建议；\nl 负责公司部门(营运、品牌策划)制度规范，负责组织及监管市场部关于对外合作、推广策划以相关工作的落实。",
    },
    // {
    //   startTime: "2009.12",
    //   endTime: "2013.12",
    //   jobName: "市场副总监",
    //   companyName: "宇翰俱乐部",
    //   description:
    //     "l 负责事业部产品对外推广和宣传，制定各种整合营销的活动；\nl 执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析撰写报告；\nl 向市场总监提供营销支持，并协助相关的公关事宜。",
    // },
  ],
  skillsCertificate:
    "普通话一级甲等\n通过全国计算机二级考试，熟练运用office相关软件。\n熟练使用绘声绘色软件，剪辑过各种类型的电影及班级视频。\n大学英语四/六级（CET-4/6），良好听说读写能力，快速浏览英语专业书籍。",
  awardsHonors:
    "2006年 新长城华中师范大学自强社“优秀社员”\n2005年 三下乡”社会实践活动“优秀学生”\n2005年 华中师范大学学生田径运动会10人立定跳远团体赛第三名\n2005年 学生军事技能训练“优秀学员”\n2005年 华中师范大学盼盼杯烘焙食品创意大赛优秀奖\n2004年 西部高校大学生主题征文一等奖\n2003年 华中师范大学“点燃川大梦 畅享我青春”微博文征集大赛二等奖",
  labelProcessing: {
    backgroundIndustry: {
      product: 1,
      engineer: 2,
      advertisement: 0,
      internet: 2,
      build: 3,
      educationTranslate: 7,
      finance: 4,
      medium: 0,
      logisticsProcure: 1,
      treatPharmacy: 1,
      marketOperations: 18,
      administration: 15,
      legalAdvice: 6,
    },
    comprehensiveAbility: {
      honorsReceived: 5,
      educationalBackground: 4,
      languageAbility: 5,
      leadership: 4,
      serviceYears: 0,
      skill: 5,
    },
    skillTags: [
      "office",
      "管理信息系统",
      "消费者行为",
      "品牌传播",
      "数据分析",
      "品牌策略",
      "市场调查",
      "logo",
      "品牌策划",
      "前端销售",
      "媒体报道",
      "商务谈判",
      "宏观经济",
      "营销策略",
      "领导能力",
      "财务管理",
      "市场营销",
      "推广策划",
      "销售渠道",
      "人际关系",
      "市场开拓",
      "团队建设",
      "商业模式",
      "公众号",
      "策划",
      "沟通",
      "激励",
      "推广",
      "会计",
      "公关",
      "宣传",
      "运营",
      "营销",
      "规划",
      "目标",
      "监督",
      "管理",
      "培训",
      "团队",
      "协调",
    ],
    educationTags: ["华中师范大学", "硕士", "市场营销"],
    jobTags: ["副总监", "市场及运营总监", "市场营销", "市场副总监"],
  },
});

const userMsg1 = ref({
  id: 24,
  userId: 1,
  fullName: "江奕云",
  email: "nesson@91muban.cn",
  phone: "13812138123",
  content:
    '{"name":"江奕云","dateOfBirth":"1996.05","graduationInstitution":"华中师范大学","sex":"","age":"","phone":"13812138123","mailBox":"nesson@91muban.cn","education":"硕士","major":"市场营销","expectedJob":"市场总监-专注品牌方向","projectExperiences":"华拓科技有限公司品牌升级发布会\\n 集团全新品牌logo及VI上线，在多渠道进行了传播；\\n 企业VIP客户群体逾60人，结合了线上发布、线下体验；\\n 后续媒体报道持续升温，子品牌罄玉结合代言人罗嘉良制造话题营销，为期3周；\\n华拓招商模式发布会\\n 整场活动以会议+洽谈双重模式进行，首日以介绍华拓内部平台资源优势，政府背景优势等为主，一对多推介会\\n进行推广普及；\\n 现场签署地方合作意向书，如：新疆、江西、浙江等优秀企业商户；\\n 中国的波尔多为宣传点，主推旗下新疆大型项目，罄玉生态葡萄庄园、沙漠主题俱乐部等，制造营销、品牌热点。\\n锦伟控股集团6A自媒体生态圈建设\\n 本项目重构了公司现有微信企业号的功能与架构。\\n 提高公众号的关注粉丝量的同时，对于有客户进行统一宣传，统一管理。","workYears":4,"workExperiences":[{"startTime":"2016.11","endTime":"至今","jobName":"副总监","companyName":"锦伟控股集团","description":" 负责协助集团旗下事业部开展各项工作，制定品牌传播方案；\\n 结合集团与事业部发展，制定营销策略、广告策略、品牌策略和公关策略，并组织推进执行；\\n 制定和执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析与撰写报告；\\n 负责公司品牌形象和价值提升的持续优化，提高品牌知名度；\\n 研究行业发展动态，定期进行市场调查,为产品更新提供建议。"},{"startTime":"2014.01","endTime":"2015.11","jobName":"市场及运营总监","companyName":"欧成有限公司","description":" 根据公司发展情况进行战略调整，配合前端销售部门搭建销售渠道；\\n 负责公司品牌形象和价值提升的持续优化，提高品牌知名度；\\n 研究行业发展动态，定期进行市场调查,为产品更新提供建议；\\n 负责公司部门(营运、品牌策划)制度规范，负责组织及监管市场部关于对外合作、渠道管理、媒体合作、推广策\\n划以相关工作的落实。"}],"skillsCertificate":"通过全国计算机二级考试，熟练运用office相关软件。\\n熟练使用绘声绘色软件，剪辑过各种类型的电影及班级视频。\\n大学英语四/六级（CET-4/6），良好听说读写能力，快速浏览英语专业书籍。","awardsHonors":"2017年 华中师范大学自强社“优秀社员”\\n2017年 三下乡”社会实践活动“优秀学生”\\n2016年 华中师范大学学生田径运动会10人立定跳远团体赛第三名\\n2015年 华中师范大学盼盼杯烘焙食品创意大赛优秀奖\\n2015年 华中师范大学“点燃中国梦 畅享我青春”微博文征集大赛二等奖\\n所获证书\\n计算机四级证书\\n大学英语四、六级证书 (CET-4，CET-6)","labelProcessing":{"backgroundIndustry":{"product":1,"engineer":2,"advertisement":0,"internet":2,"build":3,"educationTranslate":6,"finance":4,"medium":0,"logisticsProcure":1,"treatPharmacy":1,"marketOperations":18,"administration":14,"legalAdvice":5},"comprehensiveAbility":{"honorsReceived":5,"educationalBackground":3,"languageAbility":5,"leadership":4,"serviceYears":0,"skill":5},"skillTags":["office","管理信息系统","财务管理","logo","渠道管理","品牌策略","销售渠道","团队建设","市场营销","宏观经济","媒体合作","品牌策划","媒体报道","数据分析","商务谈判","品牌传播","市场调查","领导能力","市场开拓","品牌形象","前端销售","营销策略","公众号","监督","宣传","策划","营销","管理","会计","培训","运营","激励","公关","推广","沟通","团队","规划","协调","目标"],"educationTags":["市场营销","硕士","华中师范大学"],"jobTags":["副总监","市场营销","市场及运营总监"]}}',
  path: "E:/img2/ab2dbce7-e3d7-415b-b552-a3cc377ac5bd.png",
  resumeStatus: 1,
  processStage: 65,
  labelProcessing:
    '{"backgroundIndustry":{"administration":14,"advertisement":0,"build":3,"educationTranslate":6,"engineer":2,"finance":4,"internet":2,"legalAdvice":5,"logisticsProcure":1,"marketOperations":18,"medium":0,"product":1,"treatPharmacy":1},"comprehensiveAbility":{"educationalBackground":3,"honorsReceived":5,"languageAbility":5,"leadership":4,"serviceYears":3,"skill":5},"educationTags":["市场营销","硕士","华中师范大学"],"jobTags":["副总监","市场营销","市场及运营总监"],"skillTags":["office","管理信息系统","财务管理","logo","渠道管理","品牌策略","销售渠道","团队建设","市场营销","宏观经济","媒体合作","品牌策划","媒体报道","数据分析","商务谈判","品牌传播","市场调查","领导能力","市场开拓","品牌形象","前端销售","营销策略","公众号","监督","宣传","策划","营销","管理","会计","培训","运营","激励","公关","推广","沟通","团队","规划","协调","目标"]}',
  createTime: "2023-07-08T16:24:04",
  updateTime: "2023-07-08T16:46:16",
});
/* 删除简历 */
const deleteResume = (id) => {
  ElMessageBox.confirm(`确定删除该简历吗?`)
    .then(() => {
      /* 删除后翻页 */
      // returnResume(1);
      apiFun.resume.deleteResume(id).then((res) => {
        open();
        goBack();
      });
    })
    .catch(() => {});
};
onMounted(() => {
  getResume();
});

const open = () => {
  ElNotification({
    title: "删除简历成功！",
    type: "success",
  });
};

const getResume = () => {
  console.log(currentSame.value);
  apiFun.resume.analysis(currentSame.value.resume1.id).then((res) => {
    console.log(currentSame.value.resume1.id);
    userMsg.value = JSON.parse(res.data.content);
  });
  apiFun.resume.analysis(currentSame.value.resume2.id).then((res) => {
    console.log(currentSame.value.resume2.id);
    userMsg1.value = JSON.parse(res.data.content);
  });
};
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.box {
  padding: 10px;
  background-color: #f3fcfa;
  display: flex;
  flex-direction: row;
  gap: 1%;
  justify-content: center;
}

.goBack {
  font-weight: bold;
  margin-left: 48%;
  margin-top: 20px;
}
.page {
  margin-top: 6%;
  width: 40%;
  padding: 30px 20px;
  height: auto;
  box-shadow: 14px 12px 24px -6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.same-point img {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
.tag {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
  margin-top: 7px;
  height: 22px;
  font-size: 13px;
}
.same-point > div > span {
  font-weight: bold;
}
.same-point > ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #f4af48;
  position: absolute;
  top: 40%;
  left: 40%;
}
.avatar {
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 20px;
}
.avatar > img {
  height: 60px;
}
.avatar > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-tip {
  display: flex;
  flex-direction: row;
}
.same-point {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 14px 12px 24px -6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: #fff;
  position: fixed;
  right: 20px;
  top: 70px;
  width: 20%;
  height: 15%;
  z-index: 30;
  opacity: 0.8;
}
.user-tip > h2 {
  margin-right: 30px;
}
.user-msg {
  color: #848484;
  font-size: 14px;
}
.user-msg img {
  height: 10px;
}
.tooltip {
  margin-top: 7px;
  height: 22px;
  font-size: 13px;
  background-color: rgb(229, 245, 255);
  color: rgb(51, 112, 255);
  border: 0;
}
.user-msg :deep(.el-icon) {
  color: #929292;
}
.user-msg span {
  margin-right: 20px;
}
.el-dropdown {
  margin-left: 25%;
  margin-bottom: 1%;
  background-color: #7060ee;
  color: #7060ee;
}

.selector {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.returnBtn {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 0;
  background-color: #fff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #f0f0f0;
  }
  position: fixed;
  top: 49%;
  left: 1%;
  z-index: 30;
}
.returnBtn1 {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 0;
  background-color: #fff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #f0f0f0;
  }
  position: fixed;
  top: 49%;
  right: 1%;
  z-index: 30;
}
</style>
