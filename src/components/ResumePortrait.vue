<!-- 候选人画像 -->
<template>
  <div class="container" v-show="isVisited">
    <el-button type="success" class="return" @click="lookJson">查看返回数据</el-button>
    <div>
      <span class="lights">简历亮点</span>
      <div class="light-contain">
        <div class="labels">
          <img src="../assets/imgs/icon02.png" />
          <span>简历亮点</span>
        </div>
        <ul>
          <li v-for="item in state.lights" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="predict-contain">
        <div class="labels">
          <img src="../assets/imgs/icon04.png" />
          <span>智能预测</span>
        </div>
        <ul>
          <li v-for="item in state.predict" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="warn-contain">
        <div class="labels">
          <img src="../assets/imgs/icon05.png" />
          <span>风险提示</span>
        </div>
        <ul>
          <li v-for="item in state.warns" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
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
        <span>教育背景标签</span>
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
        <span>职业标签</span>
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
        <span>软性技能标签</span>
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
      <div>
        <span>专业技能标签</span>
        <div>
          <el-button
            type="warning"
            v-for="item in state.tags.skills"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div>
    </div>
    <div>
      <span>综合能力</span>
      <div class="tables">
        <div ref="talent" class="echarts"></div>
      </div>
    </div>
    <div>
      <span>背景行业</span>
      <div class="tables">
        <div class="echarts" ref="back"></div>
      </div>
    </div>
    <div>
      <span>预测职能</span>
      <div class="tables">
        <div class="echarts" ref="works1"></div>
      </div>
      <div class="tables">
        <div class="echarts" ref="works2"></div>
      </div>
      <div class="tables">
        <div class="echarts" ref="works3"></div>
      </div>
    </div>
  </div> 
  <div v-show="!isVisited">
    <div class="codeBox">
      <el-button type="success" class="return" @click="lookJson">查看返回结果</el-button>
      <pre v-html="syntaxHighlight(state.json)"></pre>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import * as echarts from "echarts";

const talent = ref(null);
const isVisited = ref(true)
const back = ref(null)
const works1 = ref(null)
const works2 = ref(null)
const works3 = ref(null)

const state = reactive({
  lights: [
    "院校背景不错，本科学历，毕业于211院校",
    "优秀互联网企业从业经历",
    "拥有良好的团队建设能力与协调能力,具有优秀的团队管理能力,积累了一定团队管理经验与能力",
    "熟练掌握英语，能进行基本的沟通",
  ],
  predict: [
    "结合工作经验、学历、行业、地域等因素，该求职者的市场薪资约为15000 —— 20000元/月。",
    "小析智能助手从简历中发现了明显的跳槽理由，此求职者短期离职可能性较高",
  ],
  warns: ["第一段工作时间晚于毕业时间十个月"],
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
const option = reactive({
    option1 : {
  radar: {
    indicator: [
      { name: "语言能力" , color: "#6873E3" },
      { name: "所获荣誉" , color: "#6873E3" },
      { name: "教育背景" , color: "#6873E3" },
      { name: "工作能力" , color: "#6873E3" },
      { name: "领导力", color: "#6873E3" },
      { name: "社会能力" , color: "#6873E3" },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [10, 30, 200, 300, 500, 180],
          name: "Allocated Budget",
        },
      ],
      lineStyle:{
        color:'#6873E3'
      }
    },
  ],
},

  option2: {
    radar: {
        
      indicator: [
        { name: "互联网",max:1000,  color: "#6873E3" },
        { name: "金融",max:1000,color: "#6873E3" },
        { name: "产品",max:1000,color: "#6873E3" },
        { name: "互联网", max:1000,color: "#6873E3" },
        { name: "生产/采购/物流",max:1000, color: "#6873E3" },
        { name: "人事/行政/高级管理",max:1000,  color: "#6873E3" },
        { name: "运营/客服/销售/市场", max:1000,color: "#6873E3" },
        { name: "工程师",max:1000, color: "#6873E3" },
        { name: "其他", max:1000, color: "#6873E3" },
        { name: "教育/翻译/服务业",max:1000,  color: "#6873E3" },
        { name: "生物/医疗/制药/护理",max:1000, color: "#6873E3" },
        { name: "咨询/法律/公务员",max:1000, color: "#6873E3" },
        { name: "建筑/房地产",max:1000, color: "#6873E3" },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
        {
            value: [300,300,300,800,300,900,200,300,300,300,300,300,300],
        }
        ],
        lineStyle:{
            color:'#6873E3'
        }
      },
    ],
    label: {
      textStyle: {
        fontFamily: "Microsoft YaHei",
        fontSize: 18, // 指定字体大小
      },
    },
  },
  option3 : {
    title: {
        text: '一级职能分布',
  textStyle: {
    color: '#6873E3' // 设置文本颜色为紫色
  },
  top: 'bottom', // 距离底部一定的距离，根据需要调整数值
  left:'center',
  margin: 0 // 取消默认的间距
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'IT/互联网' },
        { value: 735, name: '销售/客服/市场' },
        { value: 580, name: '硬件/通信' },
        { value: 484, name: '建筑/房地产' },
        { value: 300, name: '制造业' }
      ]
    }
  ]
},
option4 : {
    title: {
        text: '二级职能分布',
  textStyle: {
    color: '#6873E3' // 设置文本颜色为紫色
  },
  top: 'bottom', // 距离底部一定的距离，根据需要调整数值
  left:'center',
  margin: 0 // 取消默认的间距
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'IT' },
        { value: 735, name: '软件开发' },
      ]
    }
  ]
},
option5 : {
    title: {
        text: '三级职能分布',
  textStyle: {
    color: '#6873E3' // 设置文本颜色为紫色
  },
  top: 'bottom', // 距离底部一定的距离，根据需要调整数值
  left:'center',
  margin: 0 // 取消默认的间距
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 580, name: '移动端开发' },
        { value: 484, name: 'web前端开发' },
        { value: 300, name: 'vue' }
      ]
    }
  ]
}
});

 onMounted(() => {
    
   const myTalent = echarts.init(talent.value);
   myTalent.setOption(option.option1);
   const myBack = echarts.init(back.value);
   myBack.setOption(option.option2);

   const myWorks1 = echarts.init(works1.value);
   myWorks1.setOption(option.option3);
   const myWorks2 = echarts.init(works2.value);
 myWorks2.setOption(option.option4);
 const myWorks3 = echarts.init(works3.value);
 myWorks3.setOption(option.option5);
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
@import "/src/style/base.scss";
.container {
  box-sizing: border-box;
  padding: 20px;
  line-height: 28px;
  font-size: 15px;
  color: #737373;
}
.tags div > span {
  color: #333;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
.tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}  
.echarts {
    height: 37vh;
    width: 37vw;
  }

.container > div > span {
  font-size: 25px;
  background: linear-gradient(to right, #6873e3, rgb(39, 49, 158));
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
  margin-left: -15px;
  margin-bottom: 20px;
  display: block;
  :not(.lights){
    margin-top: 30px;
  }
}
.labels img {
  height: 25px;
  width: 25px;
}
.btn {
  border-radius: 1rem;
}
.labels span {
  font-size: 17px;
  color: #333;
}
.labels {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
  margin-left: -15px;
}
.light-box {
  display: flex;
  flex-direction: column;
}

.light-contain ul li::marker {
  color: #fbe78e;
}
.predict-contain ul li::marker {
  color: #68a2fd;
}
.container > div div {
  margin-bottom: 10px;
  margin-top: 15px;
}
.warn-contain ul li::marker {
  color: #ffa625;
}

.btn {
  border-radius: 1rem;
  margin: 0;
  margin-right: 12px;
  margin-bottom: 13px;
}

.tags div div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
// @for $i from 1 through 5 {
//     .btn#{$i}{
//         color: map-get($map: (1:blue,2:yellow,3:red,4:pink,5:green), $key: $i);
//         // background-color: map-get($map: (1:blue,2:yellow,3:red,4:pink,5:green), $key: $i);

//     }
// }
</style>
