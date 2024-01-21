<!-- 候选人画像 -->
<template>
  <div class="container" v-show="isVisited">
    <el-button type="success" class="return" @click="lookJson">查看返回数据</el-button>
    <div>
      <span class="lights">简历亮点</span>
      <div class="light-contain" v-show="content.resumeHighlights.length!==0">
        <div class="labels">
          <img src="../assets/imgs/icon02.png" />
          <span>简历亮点</span>
        </div>
        <ul>
          <li v-for="item in content.resumeHighlights" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="predict-contain" v-show="content.intelligentPrediction.length!==0">
        <div class="labels">
          <img src="../assets/imgs/icon04.png" />
          <span>智能预测</span>
        </div>
        <ul>
          <li v-for="item in content.intelligentPrediction" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="warn-contain" v-show="content.riskWarning.length!==0">
        <div class="labels">
          <img src="../assets/imgs/icon05.png" />
          <span>风险提示</span>
        </div>
        <ul>
          <li v-for="item in content.riskWarning" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="tags">
      <span class="title">候选人标签</span>
      <!-- <div>
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
      </div> -->
      <div>
        <span v-show="getFilteredItems.length!==0">教育背景标签</span>
        <div>
          <el-button
            type="success"
            v-for="item in getFilteredItems"
            :key="item"
            class="btn"
            plain
            >{{ item }}</el-button
          >
        </div>
      </div>
      <div>
        <span v-show="getFilteredItemsJob.length!==0">职业标签</span>
        <div>
          <el-button
            type="danger"
            v-for="item in getFilteredItemsJob"
            :key="item"
            class="btn"
            plain
            >{{ item }}</el-button
          >
        </div>
      </div>
      <!-- <div>
        <span>软性技能标签</span>
        <div>
          <el-button
            v-for="item in labelProcessing.skillTags"
            color="#626aef"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div> -->
      <div>
        <span v-show="getFilteredItemsSkill.length!==0">专业技能标签</span>
        <div>
          <el-button
            type="warning"
            v-for="item in getFilteredItemsSkill"
            :key="item"
            class="btn"
            plain
            >{{ item }}</el-button
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
    <!-- <div>
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
    </div> -->
  </div> 
  <div v-show="!isVisited">
    <div class="codeBox">
      <el-button type="success" class="return" @click="lookJson">查看返回结果</el-button>
      <pre v-html="syntaxHighlight(labelProcessing)"></pre>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import * as echarts from "echarts";

const prop = defineProps({
  labelProcessing:{
    type:Object,
    default:()=>{}
  },
  content:{
    type:Object,
    default:()=>{}
  }
})


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
});

const getFilteredItems = computed(()=>{
  let arr = prop.labelProcessing.educationTags.filter(item => item !== '')
  return arr
})

const getFilteredItemsJob = computed(()=>{
  let arr = prop.labelProcessing.jobTags.filter(item => item !== '')
  return arr
})
const getFilteredItemsSkill = computed(()=>{
  let arr = prop.labelProcessing.skillTags.filter(item => item !== '')
  return arr
})


onMounted(()=>{
  console.log(prop.labelProcessing.comprehensiveAbility.leadership)
  let arr = prop.labelProcessing.educationTags.filter(item => item !== '')
  console.log(arr)
})
const option = reactive({
    
  option1: {
  radar: {
    indicator: [
      { name: "语言能力", color: "#6873E3" },
      { name: "所获荣誉", color: "#6873E3" },
      { name: "教育背景", color: "#6873E3" },
      { name: "工作时间", color: "#6873E3" },
      { name: "领导力", color: "#6873E3" },
      { name: "技能", color: "#6873E3" },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [prop.labelProcessing.comprehensiveAbility.languageAbility, prop.labelProcessing.comprehensiveAbility.honorsReceived, prop.labelProcessing.comprehensiveAbility.educationalBackground,
          prop.labelProcessing.comprehensiveAbility.serviceYears, prop.labelProcessing.comprehensiveAbility.leadership, prop.labelProcessing.comprehensiveAbility.skill],
          name: "Allocated Budget",
          itemStyle: {
            opacity: 0
          }
        },
      ],
      lineStyle: {
        color: '#6873E3',
        width: 4, // 设置线条粗细为2像素
      },
      areaStyle: {
        color: '#CFD2F5',
        opacity:0.6
      }
    },
  ],
},
  option2: {
    radar: {
      startAngle: 20, // 设置起点位置为右侧
      indicator: [
        { name: "互联网",max:20,  color: "#6873E3" },
        { name: "金融",max:20,color: "#6873E3" },
        { name: "产品",max:20,color: "#6873E3" },
        { name: "生产/采购/物流",max:20, color: "#6873E3" },
        { name: "人事/行政/高级管理",max:20,  color: "#6873E3" },
        { name: "运营/客服/销售/市场", max:20,color: "#6873E3" },
        { name: "工程师",max:20, color: "#6873E3" },
        // { name: "其他", max:20, color: "#6873E3" },
        { name: "教育/翻译/服务业",max:20,  color: "#6873E3" },
        { name: "生物/医疗/制药/护理",max:20, color: "#6873E3" },
        { name: "咨询/法律/公务员",max:20, color: "#6873E3" },
        { name: "建筑/房地产",max:20, color: "#6873E3" },
        { name: "广告",max:20, color: "#6873E3" },
        { name: "媒体",max:20, color: "#6873E3" },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
        {
            value: [prop.labelProcessing.backgroundIndustry.internet,prop.labelProcessing.backgroundIndustry.finance,prop.labelProcessing.backgroundIndustry.product
            ,prop.labelProcessing.backgroundIndustry.logisticsProcure,prop.labelProcessing.backgroundIndustry.administration,prop.labelProcessing.backgroundIndustry.marketOperations,prop.labelProcessing.backgroundIndustry.engineer,
            prop.labelProcessing.backgroundIndustry.educationTranslate,prop.labelProcessing.backgroundIndustry.treatPharmacy,prop.labelProcessing.backgroundIndustry.legalAdvice,prop.labelProcessing.backgroundIndustry.build
            ,prop.labelProcessing.backgroundIndustry.advertisement,prop.labelProcessing.backgroundIndustry.medium],
            itemStyle: {
            opacity: 0
          }
        }
        ],
        lineStyle:{
            color:'#6873E3',
            width: 4, // 设置线条粗细为2像素

        },
        areaStyle: {
        color: '#CFD2F5',
        opacity:0.6
      },
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

//    const myWorks1 = echarts.init(works1.value);
//    myWorks1.setOption(option.option3);
//    const myWorks2 = echarts.init(works2.value);
//  myWorks2.setOption(option.option4);
//  const myWorks3 = echarts.init(works3.value);
//  myWorks3.setOption(option.option5);
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
