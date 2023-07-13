<!--
 * @Author: STATICHIT
 * @Date: 2023-06-07 20:06:01
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-07-13 21:24:07
 * @FilePath: \resume_analysis\src\views\page\AnalysisPage.vue
 * @Description: 简历分析页面
-->
<!-- 简历分析页面 -->
<template>
  <div class="box">
    <div class="selector">
       
      <el-dropdown>
        <el-button
          type="primary"
          color="#8e95f8"
          size="large"
          style="
            border-radius: 8px 0px 0px 8px;
            width: 130px;
            color: #fff;
            box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.15);
          "
        >
          {{ state.selectItem[resume.resumeStatus].name
          }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu @command="handleCommand">
            <el-dropdown-item
              @click="updateResumeStatus(item.value)"
              v-for="item in state.selectItem"
              :key="item.value"
              :command="item.value"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-popover
        placement="bottom"
        :width="200"
        trigger="hover"
        content="切换到下一阶段"
      >
        <template #reference>
          <el-button
            type="primary"
            color="#8e95f8"
            @click="updateResumeStatus(resume.resumeStatus + 1)"
            size="large"
            style="
              border-radius: 0px 8px 8px 0px;
              width: 15px;
              color: #fff;
              box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.15);
            "
          >
            <el-icon><ArrowRightBold /></el-icon>
          </el-button>
        </template>
      </el-popover>
      <el-button
      v-show="resume.resumeStatus === 5"
      color="#8E95F8"
      size="large"
      style="font-weight: bold;color: #fff;margin-left: 39%;"
      @click="sendEmail"
      ><el-icon><Position /></el-icon>发送入职邀约</el-button
    >
    <el-button
      v-show="resume.resumeStatus === 3"
      color="#8E95F8"
      size="large"
      style="font-weight: bold;color: #fff;margin-left: 39%;"
      @click="sendEmail"
      ><el-icon><Position /></el-icon>发送面试邀约</el-button
    >
    </div>
    <div class="page animate__animated animate__fadeIn">
      <div class="avatar">
        <img src="../../assets/avatar.png" />
        <div>
          <div class="user-tip">
            <h2>{{ resume.fullName }}</h2>
            <!-- <el-tooltip
              v-for="item in state.lights"
              :key="item"
              placement="top"
            >
              <template #content> 简历亮点 </template>
              <el-button class="tooltip">{{ item }}</el-button>
            </el-tooltip>
            <el-tooltip v-for="item in state.warns" :key="item" placement="top">
              <template #content> 简历风险点 </template>
              <el-button class="tag">{{ item }}</el-button>
            </el-tooltip> -->
          </div>
          <div class="user-msg">
            <el-icon><Iphone /></el-icon>
            <span>{{ resume.phone }}</span>
            <el-icon><Message /></el-icon>
            <span>{{ resume.email }}</span>
            <el-icon><Briefcase /></el-icon>
            <span> {{ userMsg.workYears }}年工作经验</span>
            <img src="..\..\assets\student-icon.png" />
            <span>{{ userMsg.education }}</span>
          </div>
        </div>
      </div>
      <el-tabs
        v-model="state.isVisit"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane
          class="animate__animated animate__slideInLeft"
          :lazy="true"
          label="中文简历"
          name="first"
        >
          <resume-page
            :userMsg="userMsg"
            :showReturn="true"
            :schoolList="list"
          ></resume-page>
        </el-tab-pane>
        <el-tab-pane
          class="animate__animated animate__slideInRight"
          :lazy="true"
          label="候选人画像"
          name="second"
        >
          <ResumePortraitVue
            :labelProcessing="labelProcessing"
          ></ResumePortraitVue>
        </el-tab-pane>
        <el-tab-pane
          class="animate__animated animate__slideInRight"
          :lazy="true"
          label="推荐岗位"
          name="third"
        >
          <postPage></postPage>
        </el-tab-pane>
        <el-tab-pane
          class="animate__animated animate__slideInRight"
          :lazy="true"
          label="操作日志"
          name="forth"
        >
          <Log :logs="logs"></Log>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-button
      color="#626aef"
      size="large"
      class="goBack"
      style="font-weight: bold"
      >返回文件上传页面</el-button
    >
  </div>
</template>

<script setup>
import ResumePageVue from "@/components/ResumePage.vue";
import ResumePage from "@/components/ResumePage.vue";
import ResumePortraitVue from "@/components/ResumePortrait.vue";
import animated from "animate.css";
import { onMounted, reactive, ref } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { ArrowDown } from "@element-plus/icons-vue";
import apiFun from "@/utils/api";
import { ElMessage, ElMessageBox } from "element-plus";
import Log from "@/components/Log.vue";
import postPage from "@/components/PostPage.vue";
import axios from "axios";
import { ElNotification } from 'element-plus'

const route = useRoute();
const query = route.query;
const resumeId = query["id"];

/* 返回json数据 */
const state = reactive({
  lights: ["熟练掌握英语", "技术达标"],
  warns: ["本科学历异常"],
  isVisit: "first",
  selectItem: [
    {
      value: 0,
      name: "投递人选",
      color: "",
      userId: "",
    },
    {
      value: 1,
      name: "简历推荐",
      color: "",
      userId: "",
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
  resumeState: 0,
});

let resume = ref({
  id: 14,
  userId: 1,
  fullName: "黎芸贵",
  email: "service@500d.me",
  phone: "13800138000",
  content:
    '{"id": "", "name": "黎芸贵", "dateOfBirth": "1984.04.06", "graduationInstitution": "华中师范大学", "sex": "女", "age": "24", "phone": "13800138000", "mailBox": "service@500d.me", "education": "硕士", "major": "市场营销", "expectedJob": "市场总监-专注品牌方", "projectExperiences": "宇翰集团品牌升级发布会\\nl 集团全新品牌logo及VI上线，在多渠道进行了传播；\\nl 企业VIP客户群体逾60人，结合了线上发布、线下体验；\\nl 后续媒体报道持续升温，子品牌结合明星代言人制造话题营销，为期3周；\\n欧成商业模式发布会\\nl 整场活动以会议+洽谈双重模式进行，首日以介绍欧成内部平台资源优势，政府背景优势等为主，一对多推介会\\n进行推广普及；\\nl 现场签署地方合作意向书，如：新疆、江西、浙江等优秀企业商户；\\nl 以中国的波尔多为宣传点，主推旗下新疆大型项目，制造营销、品牌热点。\\n锦伟投资控股集团6A自媒体生态圈建设\\nl 本项目重构了公司现有微信企业号的功能与架构。\\nl 提高公众号的关注粉丝量的同时，对于有客户进行统一宣传，统一管理。", "workYears": 0, "workExperiences": [{"startTime": "2015.12", "endTime": "至今", "jobName": "副总监", "companyName": "锦伟控股集团", "description": "l 负责协助集团旗下事业部开展各项工作，制定品牌传播方案；\\nl 结合集团与事业部发展，制定营销策略、广告策略、品牌策略和公关策略，并组织推进执行；\\nl 制定和执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析与撰写报告；\\nl 研究行业发展动态，定期进行市场调查,为产品更新提供建议。"}, {"startTime": "2013.12", "endTime": "2015.12", "jobName": "市场及运营总监", "companyName": "欧成有限公司", "description": "l 根据公司发展情况进行战略调整，配合前端销售部门搭建销售渠道；\\nl 研究行业发展动态，定期进行市场调查,为产品更新提供建议；\\nl 负责公司部门(营运、品牌策划)制度规范，负责组织及监管市场部关于对外合作、推广策划以相关工作的落实。"}, {"startTime": "2009.12", "endTime": "2013.12", "jobName": "市场副总监", "companyName": "宇翰俱乐部", "description": "l 负责事业部产品对外推广和宣传，制定各种整合营销的活动；\\nl 执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析撰写报告；\\nl 向市场总监提供营销支持，并协助相关的公关事宜。"}], "skillsCertificate": "普通话一级甲等\\n通过全国计算机二级考试，熟练运用office相关软件。\\n熟练使用绘声绘色软件，剪辑过各种类型的电影及班级视频。\\n大学英语四/六级（CET-4/6），良好听说读写能力，快速浏览英语专业书籍。", "awardsHonors": "2006年 新长城华中师范大学自强社“优秀社员”\\n2005年 三下乡”社会实践活动“优秀学生”\\n2005年 华中师范大学学生田径运动会10人立定跳远团体赛第三名\\n2005年 学生军事技能训练“优秀学员”\\n2005年 华中师范大学盼盼杯烘焙食品创意大赛优秀奖\\n2004年 西部高校大学生主题征文一等奖\\n2003年 华中师范大学“点燃川大梦 畅享我青春”微博文征集大赛二等奖", "labelProcessing": {"backgroundIndustry": {"product": 1, "engineer": 2, "advertisement": 0, "internet": 2, "build": 3, "educationTranslate": 7, "finance": 4, "medium": 0, "logisticsProcure": 1, "treatPharmacy": 1, "marketOperations": 18, "administration": 15, "legalAdvice": 6}, "comprehensiveAbility": {"honorsReceived": 5, "educationalBackground": 4, "languageAbility": 5, "leadership": 4, "serviceYears": 0, "skill": 5}, "skillTags": ["office", "管理信息系统", "消费者行为", "品牌传播", "数据分析", "品牌策略", "市场调查", "logo", "品牌策划", "前端销售", "媒体报道", "商务谈判", "宏观经济", "营销策略", "领导能力", "财务管理", "市场营销", "推广策划", "销售渠道", "人际关系", "市场开拓", "团队建设", "商业模式", "公众号", "策划", "沟通", "激励", "推广", "会计", "公关", "宣传", "运营", "营销", "规划", "目标", "监督", "管理", "培训", "团队", "协调"], "educationTags": ["华中师范大学", "硕士", "市场营销"], "jobTags": ["副总监", "市场及运营总监", "市场营销", "市场副总监"]}}',
  path: "E:/img2/e8800689-ac0f-4e9d-9fca-ce8fabf76ca5.png",
  resumeStatus: 1,
  labelProcessing:
    '{"backgroundIndustry":{"administration":15,"advertisement":0,"build":3,"educationTranslate":0,"engineer":2,"finance":0,"internet":0,"legalAdvice":0,"logisticsProcure":1,"marketOperations":18,"medium":0,"product":1,"treatPharmacy":1},"comprehensiveAbility":{"educationalBackground":4,"honorsReceived":5,"languageAbility":5,"leadership":4,"serviceYears":0,"skill":5},"educationTags":["华中师范大学","硕士","市场营销"],"jobTags":["副总监","市场及运营总监","市场营销","市场副总监"],"skillTags":["office","管理信息系统","消费者行为","品牌传播","数据分析","品牌策略","市场调查","logo","品牌策划","前端销售","媒体报道","商务谈判","宏观经济","营销策略","领导能力","财务管理","市场营销","推广策划","销售渠道","人际关系","市场开拓","团队建设","商业模式","公众号","策划","沟通","激励","推广","会计","公关","宣传","运营","营销","规划","目标","监督","管理","培训","团队","协调"]}',
  createTime: "2023-07-06T15:14:07",
  updateTime: "2023-07-06T15:15:03",
});

const userMsg = ref({
  id: "",
  name: "贵",
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
    {
      startTime: "2009.12",
      endTime: "2013.12",
      jobName: "市场副总监",
      companyName: "宇翰俱乐部",
      description:
        "l 负责事业部产品对外推广和宣传，制定各种整合营销的活动；\nl 执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析撰写报告；\nl 向市场总监提供营销支持，并协助相关的公关事宜。",
    },
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
      "ofce",
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
const list = ref([]);
const labelProcessing = ref({
  backgroundIndustry: {
    administration: 15,
    advertisement: 0,
    build: 3,
    educationTranslate: 7,
    engineer: 2,
    finance: 4,
    internet: 2,
    legalAdvice: 6,
    logisticsProcure: 1,
    marketOperations: 18,
    medium: 0,
    product: 1,
    treatPharmacy: 1,
  },
  comprehensiveAbility: {
    educationalBackground: 4,
    honorsReceived: 5,
    languageAbility: 5,
    leadership: 4,
    serviceYears: 0,
    skill: 5,
  },
  educationTags: ["华中师范大学", "硕士", "市场营销"],
  jobTags: ["副总监", "市场及运营总监", "市场营销", "市场副总监"],
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
});

const logs = ref([
  {
    id: 1,
    action: '应聘人状态修改',
    detail: "从投递人选切换至简历推荐",
    time: "2023-07-08 17:11:46",
    resumeId: 22,
  },
  {
    id: 2,
    action: '应聘人状态修改',
    detail: "从简历推荐切换至笔试阶段",
    time: "2023-07-09 19:24:58",
    resumeId: 22,
  },
  {
    id: 3,
    action: '应聘人状态修改',
    detail: "从笔试阶段切换至面试阶段",
    time: "2023-07-11 22:23:38",
    resumeId: 22,
  },
  {
    id: 4,
    action: '发送面试邀约',
    detail: "从笔试阶段切换至面试阶段",
    time: "2023-07-11 22:23:45",
    resumeId: 22,
  },

]);
onMounted(() => {
  // apiFun.process.flowPathNotOrder().then((res) => {
  //   state.selectItem = res.data;
  // });

  // axios.get(`http://192.168.50.237:5555/log/${resumeId}`).then((res) => {
  //   console.log(res.data);
  // });

  console.log(resumeId);
  apiFun.resume.analysis(resumeId).then((res) => {
    console.log(res.data);
    resume.value = res.data;
    labelProcessing.value = JSON.parse(resume.value.labelProcessing);
    for (let key in labelProcessing.value.backgroundIndustry) {
      if (labelProcessing.value.backgroundIndustry[key] < 8) {
        labelProcessing.value.backgroundIndustry[key] = 8;
      }
    }
    userMsg.value = JSON.parse(resume.value.content);
  });
  apiFun.resume.graph(resumeId).then((res) => {
    console.log(res.data);
    list.value = res.data.schoolVoList;
  });
});
const updateResumeStatus = (value) => {
  if (value > 8) value = 0;
  ElMessageBox.confirm("确定修改该简历状态吗？")
    .then(() => {
      console.log(value)
      resume.value.resumeStatus = value;
      // apiFun.process.updateStatus(resumeId, value).then((res) => {
        
      //   console.log(resume.value.resumeStatus)
      open1()
      // });
    })
    .catch(() => {});
};
function handleCommand(command) {
  state.selectItem = command;
}

const returnNextState = () => {
  state.resumeState++;
  console.log(state.content);
};

const open = () => {
  ElNotification({
    title: "发送邀约成功",
    type: "success",
  });
};
const open1 = () => {
  ElNotification({
    title: "修改状态成功",
    type: "success",
  });
};

const sendEmail = ()  => {
  ElMessageBox.confirm("确定对该候选人发送邀约吗？")
    .then(() => {
      open()
    })
    .catch(() => {});
}


const handleClick = (tab, event) => {};
</script>

<style lang="scss">
@import "../../style/base.scss";
.box {
  padding: 60px;
  background-color: #f3fcfa;
}
.demo-tabs {
  padding: 20px;
}

.demo-tabs el-tab-pane {
  color: $primary-color;
}
.goBack {
  font-weight: bold;
  margin-left: 48%;
  margin-top: 20px;
}
.page {
  width: 57%;
  padding: 30px 20px;
  margin-left: 25%;
  height: auto;
  box-shadow: 14px 12px 24px -6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
.tag {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
  margin-top: 7px;
  height: 22px;
  font-size: 13px;
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
  color: #7880f8;
}

.user-tip {
  display: flex;
  flex-direction: row;
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
.selectTime,
.el-dropdown {
  margin-left: 25%;
  margin-bottom: 1%;
  background-color: #626aef;
  box-sizing: border-box;
  color: #fff;
  border-radius: 8px 0px 0px 8px;
  &:hover {
    background: #9197f4;
  }
  border: 0;
}

// .selectTime option {
//   background-color: #fff;
//   color: #333;
//   height: 30px;
//   width: 70px;
//   border-radius: 5px;
//   &:hover{
//     background-color: #EEECFC;
//   }
// }
.selector {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>
