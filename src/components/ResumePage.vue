<!-- 中文简历页面 -->
<template>
  <div v-show="isVisited" class="container">
    <el-button type="success" class="return" @click="lookJson"
      >查看返回数据</el-button
    >
    <div>
      <span class="title">基本信息</span>
      <ul class="ul-list">
        <li><span>姓名：</span>唐奇</li>
        <li><span>邮箱：</span>2390864551@qq.com</li>
        <li><span>专业：</span>软件工程</li>
        <li><span>专业级别：</span>初级</li>
        <li><span>手机：</span>17742602519</li>
        <li><span>学历：</span>本科</li>
        <li><span>专业：</span>软件工程</li>
        <li><span>专业级别：</span>初级</li>
      </ul>
    </div>
    <div>
      <span class="title">教育背景</span>
      <div class="education">
        <span>吉首大学</span>
        <ul>
          <li><span>开始时间：</span>2020.09</li>
          <li><span>结束时间：</span>至今</li>
          <li><span>地点：</span>湘西土家族苗族自治州</li>
          <li><span>学位：</span>本科</li>
          <li><span>专业：</span>软件工程</li>
          <li><span>学校排名：</span>324</li>
          <li><span>所学课程：</span>软件工程</li>
        </ul>
      </div>
    </div>
    <div>
      <span class="title">社会经历</span>
      <div>
        <span>吉首大学</span>
        <ul>
          <li><span>开始时间：</span>2021.06</li>
          <li><span>结束时间：</span>至今</li>
          <li><span>地点：</span>湘西土家族苗族自治州</li>
          <li><span>公司/学校/社团名：</span>吉首大学</li>
          <li><span>职位名称：</span>主任</li>
          <li>
            <span>工作描述：</span>
            负责学院内学科竞赛的举办与培训
            负责工作室内部成员的学习以及招新活动安排
            负责组织对学院大一新生进行数据结构与算法的教学活动
          </li>
        </ul>
      </div>
    </div>
    <div>
      <span class="title">项目经历</span>
      <div v-for="item in state.project_experience" :key="item">
        <span>{{ item.name }}</span>
        <span>2020.1-2021.2</span>
        <ul class="project">
          <li><span>开始时间：</span>{{ item.start_time }}</li>
          <li><span>结束时间：</span>{{ item.end_time }}</li>
          <li><span>职位名称：</span>{{ item.work_name }}</li>
          <li><span>所属职能：</span>{{ item.work_msg }}</li>
          <li><span>工作描述：</span>{{ item.work }}</li>
          <li><span>项目描述: </span>{{ item.project_msg }}</li>
          <li>
            <span>项目职责:</span>
            {{ item.project_work }}
          </li>
          <li><span>项目亮点:</span>{{ item.project_lights }}</li>
        </ul>
      </div>
    </div>
    <div>
      <span class="title">补充信息</span>
    </div>

    <div class="openJson" v-show="!isVisited">
      <div class="codeBox">
        <el-button type="success" class="return" @click="lookJson"
          >查看返回结果</el-button
        >
        <pre v-html="syntaxHighlight(state.json)"></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { stringify } from "qs";
import { reactive, ref } from "vue";

const isVisited = ref(true);

const state = reactive({
  project_experience: [
    {
      name: "Mono基于多场景应用的对象存储平台",
      start_time: "2023.02",
      end_time: "2023.04",
      work_name: "Web前端开发",
      work_msg: "Web前端/网页前端",
      work: "Web前端开发",
      project_msg:
        "该项目是第十四届“中国大学生服务外包创新创业大赛”的参赛作品 ， 主要使用的技术栈是Vue3+TypeScript+Pinia+axios，其主要功能是提供海量、安全以及高可用的对象存储服务，除此之外还提供了对象级别的权限管理，对整个平台数据的数据监控和日志文件的实时查询，以及对对象数据进行二次处理的功能。",
      project_work:
        "参与需求评审，完成项目原型、接口文档设计，负责项目整体前端页面需求的开发，进行前后端联调测试和部署等。",
      project_lights:
        "基于RBAC权限模型，实现页面、菜单和按钮级别的权限管理基于CanvasAPI实现对于图片文件的压缩、编辑、水印和格式转换等功能。针对大文件传输场景，采用文件切片、秒传、断点续传来优化该业务场景搭建监控SDK，对项目中的异常、用户行为以及PV/UV数据进行上报，使用可视化技术ECharts.js展示报表数据",
    },
  ],
  json: {
    project_experience: [],
    contact_info: {
      phone_number: "13800138000",
      QQ: "",
      wechat: "",
      email: "",
      home_phone_number: "",
    },
    social_experience: [
      {
        description:
          "制单会计\n独立处理“公司”中的所有账务处理,个人所得税、企业所得税、出口退税的核算申报；\n负责与审计沟通公司的财务问题，并就问题对账务进行有效的调整。",
        end_time_year: "2014",
        still_active: 0,
        end_time_month: "01",
        organization_name: "校内仿真实训",
        start_time_year: "2013",
        location: "",
        department: "",
        job_title: "制单会计",
        start_time_month: "01",
      },
      {
        description:
          "负责活学生会动的组织策划；\n负责学生会内部的文档管理，上级来文和学生组织的批复，对所有文件资料的各项工作；\n负责学生会的工作汇报 ， 资产管理工作 ， 保管印章并对学校拨付的固定资产登记注册。",
        end_time_year: "2013",
        still_active: 0,
        end_time_month: "09",
        organization_name: "飞扬大学学生会",
        start_time_year: "2012",
        location: "",
        department: "",
        job_title: "会长",
        start_time_month: "08",
      },
    ],
    education_experience: [
      {
        ranking: "",
        major: "会计学",
        degree: "本科",
        end_time_year: "2010",
        still_active: 0,
        school_rank: "",
        school_level: "",
        end_time_month: "07",
        school_name: "广州飞扬大学",
        abroad_country: "",
        GPA: "",
        courses:
          "中级财务管理，会计电算化，会计学基础，财务会计，会计英语，成本会计，会计学，税法，会计，审计",
        start_time_year: "2009",
        location: "广州",
        department: "",
        study_model: "",
        abroad: 0,
        start_time_month: "09",
      },
    ],
    basic_info: {
      major: "会计学",
      expect_location: "",
      current_salary: "",
      current_location_norm: "中国-广东-广州",
      current_location: "广东广州",
      expect_location_norm: "",
      desired_salary: "",
      birthplace: "",
      degree: "本科",
      desired_industry: "",
      desired_position: "",
      zipcode: "",
      professional_level: "初级",
      national_identity_number: "",
      date_of_birth: "1993-02-02",
      birthplace_norm: "",
      num_work_experience: 13,
      current_position: "实习",
      work_start_year: "2013",
      political_status: "",
      current_company: "广州飞扬科技有限公司",
      school_name: "广州飞扬大学",
      ethnic: "",
      recent_graduate_year: "2010",
      name: "亿铭",
      lastupdate_time: "2023-05-29-06-30-18",
      gender: "",
      age: 30,
      marital_status: "",
      current_status: "",
      school_type: "",
      detailed_location: "",
      industry: "",
    },
    training_experience: [],
    work_experience: [
      {
        salary: "",
        description:
          "负责公司会计核算，报表编制及月度报税工作；\n发票的扫描、开具、核对及管理工作；\n单位的报账、定期对账、处理账务相关的事",
        end_time_year: "2015",
        still_active: 0,
        skills: ["管理工作", "会计"],
        company_type: "",
        industry: "互联网/软件",
        end_time_month: "04",
        location: "",
        company_size: "",
        job_function: "市场",
        start_time_year: "2014",
        company_name: "广州飞扬科技有限公司",
        report_to: "",
        department: "",
        underling_num: "",
        job_title: "实习",
        start_time_month: "08",
      },
      {
        salary: "",
        description:
          "负责公司会计核算，报表编制及月度报税工作；\n负责项目资金财务收取、材料发票保管，做好催付和对账工作；\n负责项目报表的正确性和上报的及时性；",
        end_time_year: "2014",
        still_active: 0,
        skills: ["财务", "会计"],
        company_type: "",
        industry: "电子/通信/硬件",
        end_time_month: "07",
        location: "",
        company_size: "",
        job_function: "市场",
        start_time_year: "2013",
        company_name: "广州电子科技有限公司",
        report_to: "",
        department: "",
        underling_num: "",
        job_title: "实习",
        start_time_month: "07",
      },
    ],
    others: {
      language: ["tem-4", "英语"],
      certificate: [
        "tem-4",
        "会计上岗证",
        "会计电算化",
        "计算机二级",
        "证券从业资格证",
      ],
      skills: [
        "策划",
        "财务",
        "审计",
        "会计",
        "仿真",
        "财务管理",
        "管理工作",
        "财务软件",
        "财务会计",
        "财务分析",
        "社会活动",
        "常用办公软件",
      ],
      self_evaluation:
        "个人介绍: 本人是会计专业大四学生 ， 即将毕业；有丰富的专业知识体系和实践经历做基础 ， 大学期间学习刻苦 ， 成绩优异、还积极地参加各种社会活动 ， 抓住每一个机会锻炼自己 ， 希望找一份会计相关实习工作；并且在实践中不断学习、进步。\n 工作方面: 有一定的财务分析能力，能够熟练使用金蝶等财务软件，熟练使用常用办公软件等；工作认真细致，吃苦耐劳、责任心强；数据敏感度强、善于沟通、协调、组织能力强；有良好的职业操守，具有较强的服务意识。\n 性格方面: 个性稳重、思维严谨、乐观豁达、容易相处，团队荣誉感强。",
      awards: [],
      it_skills: ["财务软件", "常用办公软件"],
      business_skills: ["会计", "财务会计", "常用办公软件"],
    },
    resume_rawtext: "",
  },
});

const jsonStr = JSON.stringify(state.json);

const lookJson = () => {
  isVisited.value = !isVisited.value;
};

/* json数据格式化 */
function syntaxHighlight(json) {
  if (typeof json != "string") {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}
</script>

<style lang="scss" scoped>
@import "/src/style/base.scss";

.container {
  box-sizing: border-box;
  padding: 20px;
}

.openJson {
}
.container > div > span {
  font-size: 25px;
  background: linear-gradient(to right, #6873e3, rgb(39, 49, 158));
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
  margin-left: -15px;
  margin-bottom: 15px;
  display: block;
}

ul:not(.ul-list) {
  list-style: none;
  margin-left: -20px;
}
.codeBox {
  background: #32325d;
  color: #e6ebf1;
  border-radius: 13px;
  padding: 30px 20px;
  font-size: 12px;
  margin-top: 30px;
  line-height: 1.5;
}
.return {
  float: right;
  font-weight: bold;
}
ul li {
  margin-bottom: 15px;
  font-size: 15px;
  color: #232323;
}
.ul-list li::marker {
  color: $primary-color;
}

.ul-list {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
}
.ul-list li {
  width: 50%;
}

ul li > span:first-child {
  color: #7d7d7d;
  font-size: 15px;
}

ul {
  padding: 10px;
}
.project {
  padding: 10px;
}
.container div div > span:first-child {
  font-weight: bold;
  font-size: 16px;
  margin-left: -10px;
}
.container div div > span:nth-child(2) {
  color: #626262;
  float: right;
  font-size: 13px;
}

pre {
  font-family: monospace;
  white-space: pre;
}
</style>
