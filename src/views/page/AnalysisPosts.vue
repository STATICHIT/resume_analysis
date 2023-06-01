<!-- 简历分析页面 -->
<template>
    <div class="box">
      <div class="page animate__animated animate__fadeIn">
        <div class="avatar">
          <img src="../../assets/imgs/icon06.png" />
          <div>
            <div class="user-tip">
              <h2>机器学习工程师</h2>
            </div>
            <div class="user-msg">
             <el-icon><LocationFilled /></el-icon>
              <span>地点不限</span>
              <el-icon><Briefcase /></el-icon>
              <span>1年以上</span>
              <img src="..\..\assets\student-icon.png" />
              <span>本科</span>
            </div>
          </div>
        </div>
        <div v-show="isVisited" class="container">
    <el-button type="success" class="return" @click="lookJson">查看返回数据</el-button>
    <div>
      <span class="title">公司信息</span>
      <ul class="ul-list">
        <li><span>公司名：</span>腾讯科技</li>
        <li><span>公司介绍：</span>腾讯科技</li>
        <li><span>公司行业：</span>互联网/IT</li>
      </ul>
    </div>
    <div>
      <span class="title">职位描述</span>
      <div class="education">
        <ul>
          <li><span>职位名：</span>机器学习工程师</li>
          <li><span>职位职能：</span>IT/互联网-后端开发-算法</li>
          <li><span>职位属性：</span>全职</li>
          <li><span>职位等级：</span>2(普通)</li>
          <li><span>部门：</span>软件</li>
          <li><span>招聘人数：</span>1人</li>
          <li><span>工作地点：</span></li>
          <li><span>详细地点：</span></li>  
        </ul>
    </div>
  </div>
  <div>
      <span class="title">任职要求</span>
      <div class="ask">
        <ul>
          <li><span>学历要求：</span>本科-博士</li>
          <li><span>学校要求：</span>不限</li>
          <li><span>专业要求：</span>计算机、通信、电子、自动化等相关专业</li>
          <li><span>职位等级：</span>2(普通)</li>
          <li><span>年龄要求：</span>不限</li>
          <li><span>性别要求</span>不限</li>
          <li><span>工作年限要求：</span>20-40年</li>
          <li><span>职能经验要求：</span>3、熟练掌握图像处理算法原理 精通OpenCV 熟悉Halcon等视觉算法库及工具 4、精通C++/C#编程语言 5、对图像识别算法有深刻理解及应用经验优先 熟悉主流的机器学习算法 能够熟练使用深度学习TensorFlow、Caffe等深度学习框架</li>  
          <li><span>软性技能要求：</span>沟通能力、团队合作</li>
          <li><span>专业技能要求：</span>opencv（精通）、c++（精通）、c#编程语言（精通）、深度学习（熟练）、图像处理算法（熟练）、halcon（熟练）、视觉算法（熟练）、机器学习算法（熟练）、tensorflow（熟练）、caffe（熟练）、深度学习框架（熟练）、项目开发（基本掌握）、机器视觉（基本掌握）、图像处理（基本掌握）、图像识别算法（基本掌握）、支持向量机（基本掌握）、神经网络（基本掌握）</li>
        </ul>
    </div>
  </div>
  <div>
  <span class="title">职位描述</span>
      <div class="postsMsg">
        <ul>
          <li><span>职位名：</span>机器学习工程师</li>
          <li><span>职位职能：</span>IT/互联网-后端开发-算法</li>
          <li><span>职位属性：</span>全职</li>
          <li><span>职位等级：</span>2(普通)</li>
          <li><span>部门：</span>软件</li>
          <li><span>招聘人数：</span>1人</li>
          <li><span>工作地点：</span></li>
          <li><span>详细地点：</span></li>  
        </ul>
    </div></div>
    <div class="tags">
      <span class="title">候选人标签</span>
      <div>
        <span>基本标签</span>
        <div>
          <el-button
            type="primary"
            v-for="item in state.tags.basic"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div>
      <div>
        <span>职业标签</span>
        <div>
          <el-button
            type="success"
            v-for="item in state.tags.education"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div>
      <div>
        <span>教育标签</span>
        <div>
          <el-button
            type="danger"
            v-for="item in state.tags.professional"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div>
      <div>
        <span>技能标签</span>
        <div>
          <el-button
            v-for="item in state.tags.others"
            color="#626aef"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div>
    </div>
    <div>
         <span class="title">薪资福利</span>
      <div class="salary">
        <ul>
          <li><span>福利待遇：</span>机器学习工程师</li>
          <li><span>薪资水平：</span>IT/互联网-后端开发-算法</li>
        </ul>
    </div>
    </div>
      </div>
      <div v-show="!isVisited">
    <div class="codeBox">
      <el-button type="success" class="return" @click="lookJson">查看返回结果</el-button>
      <pre v-html="syntaxHighlight(state.json)"></pre>
    </div>
  </div>
    </div>
    <el-button color="#626aef" size="large" class="goBack" style="font-weight:bold">返回文件上传页面</el-button>
</div>
  </template>
  
  <script setup>
  import animated from "animate.css";
  import { stringify } from "qs";
import { reactive, ref } from "vue";

const isVisited = ref(true)

const state = reactive({
  tags: {
    basic: [
      { tag: "26到30岁", type: "age" },
      { tag: "广东广州", type: "current_location" },
      { tag: "广东广州", type: "expect_location" },
      { tag: "高级", type: "level" },
      { tag: "5-10年经验", type: "experience" },
    ],
    education: [
      { tag: "本科学历", type: "degree" },
      { tag: "市场营销", type: "major" },
    ],
    others: [
      { tag: "英语", type: "language", level: "基本掌握" },
      { tag: "普通话一级甲等", type: "certificate" },
    ],
    professional: [
      { tag: "互联网/软件", type: "industry" },
      { tag: "销售/客服/市场-市场-市场营销", type: "standard_title" },
    ],
    skills: [
      { tag: "需求分析", type: "professional_skill", subclass: "产品" },
      { tag: "建设项目", type: "professional_skill", subclass: "其它" },
      { tag: "功能设计", type: "professional_skill", subclass: "产品" },
      { tag: "策划", type: "professional_skill", subclass: "运营" },
      { tag: "数据分析能力", type: "professional_skill", subclass: "数据分析" },
      { tag: "OFFICE", type: "professional_skill", subclass: "其它" },
      { tag: "服务质量", type: "professional_skill", subclass: "其它" },
      { tag: "销售技巧", type: "professional_skill", subclass: "销售" },
      { tag: "电商平台", type: "professional_skill", subclass: "电子商务" },
      { tag: "宏观经济", type: "professional_skill", subclass: "其它" },
    ],
  },
  json:{
    "project_experience": [],
    "contact_info": {
        "phone_number": "13800138000",
        "QQ": "",
        "wechat": "",
        "email": "",
        "home_phone_number": ""
    },
    "social_experience": [
        {
            "description": "制单会计\n独立处理“公司”中的所有账务处理,个人所得税、企业所得税、出口退税的核算申报；\n负责与审计沟通公司的财务问题，并就问题对账务进行有效的调整。",
            "end_time_year": "2014",
            "still_active": 0,
            "end_time_month": "01",
            "organization_name": "校内仿真实训",
            "start_time_year": "2013",
            "location": "",
            "department": "",
            "job_title": "制单会计",
            "start_time_month": "01"
        },
        {
            "description": "负责活学生会动的组织策划；\n负责学生会内部的文档管理，上级来文和学生组织的批复，对所有文件资料的各项工作；\n负责学生会的工作汇报 ， 资产管理工作 ， 保管印章并对学校拨付的固定资产登记注册。",
            "end_time_year": "2013",
            "still_active": 0,
            "end_time_month": "09",
            "organization_name": "飞扬大学学生会",
            "start_time_year": "2012",
            "location": "",
            "department": "",
            "job_title": "会长",
            "start_time_month": "08"
        }
    ],
    "education_experience": [
        {
            "ranking": "",
            "major": "会计学",
            "degree": "本科",
            "end_time_year": "2010",
            "still_active": 0,
            "school_rank": "",
            "school_level": "",
            "end_time_month": "07",
            "school_name": "广州飞扬大学",
            "abroad_country": "",
            "GPA": "",
            "courses": "中级财务管理，会计电算化，会计学基础，财务会计，会计英语，成本会计，会计学，税法，会计，审计",
            "start_time_year": "2009",
            "location": "广州",
            "department": "",
            "study_model": "",
            "abroad": 0,
            "start_time_month": "09"
        }
    ],
    "basic_info": {
        "major": "会计学",
        "expect_location": "",
        "current_salary": "",
        "current_location_norm": "中国-广东-广州",
        "current_location": "广东广州",
        "expect_location_norm": "",
        "desired_salary": "",
        "birthplace": "",
        "degree": "本科",
        "desired_industry": "",
        "desired_position": "",
        "zipcode": "",
        "professional_level": "初级",
        "national_identity_number": "",
        "date_of_birth": "1993-02-02",
        "birthplace_norm": "",
        "num_work_experience": 13,
        "current_position": "实习",
        "work_start_year": "2013",
        "political_status": "",
        "current_company": "广州飞扬科技有限公司",
        "school_name": "广州飞扬大学",
        "ethnic": "",
        "recent_graduate_year": "2010",
        "name": "亿铭",
        "lastupdate_time": "2023-05-29-06-30-18",
        "gender": "",
        "age": 30,
        "marital_status": "",
        "current_status": "",
        "school_type": "",
        "detailed_location": "",
        "industry": ""
    },
    "training_experience": [],
    "work_experience": [
        {
            "salary": "",
            "description": "负责公司会计核算，报表编制及月度报税工作；\n发票的扫描、开具、核对及管理工作；\n单位的报账、定期对账、处理账务相关的事",
            "end_time_year": "2015",
            "still_active": 0,
            "skills": [
                "管理工作",
                "会计"
            ],
            "company_type": "",
            "industry": "互联网/软件",
            "end_time_month": "04",
            "location": "",
            "company_size": "",
            "job_function": "市场",
            "start_time_year": "2014",
            "company_name": "广州飞扬科技有限公司",
            "report_to": "",
            "department": "",
            "underling_num": "",
            "job_title": "实习",
            "start_time_month": "08"
        },
        {
            "salary": "",
            "description": "负责公司会计核算，报表编制及月度报税工作；\n负责项目资金财务收取、材料发票保管，做好催付和对账工作；\n负责项目报表的正确性和上报的及时性；",
            "end_time_year": "2014",
            "still_active": 0,
            "skills": [
                "财务",
                "会计"
            ],
            "company_type": "",
            "industry": "电子/通信/硬件",
            "end_time_month": "07",
            "location": "",
            "company_size": "",
            "job_function": "市场",
            "start_time_year": "2013",
            "company_name": "广州电子科技有限公司",
            "report_to": "",
            "department": "",
            "underling_num": "",
            "job_title": "实习",
            "start_time_month": "07"
        }
    ],
    "others": {
        "language": [
            "tem-4",
            "英语"
        ],
        "certificate": [
            "tem-4",
            "会计上岗证",
            "会计电算化",
            "计算机二级",
            "证券从业资格证"
        ],
        "skills": [
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
            "常用办公软件"
        ],
        "self_evaluation": "个人介绍: 本人是会计专业大四学生 ， 即将毕业；有丰富的专业知识体系和实践经历做基础 ， 大学期间学习刻苦 ， 成绩优异、还积极地参加各种社会活动 ， 抓住每一个机会锻炼自己 ， 希望找一份会计相关实习工作；并且在实践中不断学习、进步。\n 工作方面: 有一定的财务分析能力，能够熟练使用金蝶等财务软件，熟练使用常用办公软件等；工作认真细致，吃苦耐劳、责任心强；数据敏感度强、善于沟通、协调、组织能力强；有良好的职业操守，具有较强的服务意识。\n 性格方面: 个性稳重、思维严谨、乐观豁达、容易相处，团队荣誉感强。",
        "awards": [],
        "it_skills": [
            "财务软件",
            "常用办公软件"
        ],
        "business_skills": [
            "会计",
            "财务会计",
            "常用办公软件"
        ]
    },
    "resume_rawtext": ""
},
});

const jsonStr = JSON.stringify(state.json);

const lookJson = () => {
    isVisited.value=!isVisited.value;
}



/* json数据格式化 */
function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
  
  
  </script>
  
  <style lang="scss" scoped>
  @import '/src/style/base.scss';
  
  .box {
    padding: 60px;
    background-color: #f3fcfa;
  }

  .goBack{
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

  .avatar {
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 20px;
  }
  .avatar > img {
    height: 60px;
  }
  .avatar>div{
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
  
  .user-tip {
    display: flex;
    flex-direction: row;
  }
  .user-tip>h2{
      margin-right: 30px;
  }
  .user-msg{
      color: #848484;
      font-size: 14px;
  }
  .btn {
  border-radius: 1rem;
  margin: 0;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
  .user-msg img{
      height: 10px;
  }
  .user-msg :deep(.el-icon) {
    color: #929292;
  }
  .user-msg span{
      margin-right: 20px;
  }
  
.container{
    box-sizing: border-box;
    padding: 20px;
}

.container>div>span{
    font-size: 25px;
    background: linear-gradient(to right, #6873E3, rgb(39, 49, 158));
    -webkit-background-clip: text;
    font-weight: bold;
    color: transparent;
    margin-left: -15px;
    margin-bottom: 15px;
    display: block;
}
.tags div > span {
  color: #333;
  margin-top: 20px;
}

.codeBox{
    background: #32325d;
    color: #e6ebf1;
    border-radius: 13px;
    padding: 30px 20px;
    font-size: 12px;
    margin-top: 30px;
    line-height: 1.5;
}
.return{
  float: right;
  font-weight: bold;
}
ul li{
  margin-bottom: 15px;
  font-size: 15px;
  color: #232323;
}
ul li::marker{                          
  color: $primary-color;
}

.ul-list{
  display: flex;
  flex-wrap: wrap;
  width: 600px;
}
.ul-list li{
  width: 50%;
}

ul li>span:first-child{
  color: #7d7d7d;
  font-size: 15px
};


ul{
  padding: 10px;
}
.project{
  padding: 10px;
}
.container div div>span:first-child{
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
  