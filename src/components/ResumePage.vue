<!-- 中文简历页面 -->
<template>
  <div>
    <div v-show="isVisited" class="container">

      <div>
        <span class="title">基本信息</span>     
         <el-button
        type="success"
        class="return"
        @click="lookJson"
        v-show="showReturn"
        >查看返回数据</el-button
      >
        <ul class="ul-list">
          <li><span>姓名：</span>{{ userMsg.name }}</li>
          <li><span>邮箱：</span>{{ userMsg.mailBox }}</li>
          <li><span>性别：</span>{{userMsg.sex ? userMsg.sex: '男'}}</li>
          <li><span>求职方向：</span>{{ userMsg.expectedJob }}</li>
          <li><span>手机：</span>{{ userMsg.phone }}</li>
          <li><span>学历：</span>{{ userMsg.education }}</li>
          <li><span>年龄：</span>{{ userMsg.age ? userMsg.age:24 }}</li>
          <li><span>出生年月：</span>{{ userMsg.dateOfBirth }}</li>
        </ul>
        <div v-show="showTags" class="same-tags">姓名相同</div>
      </div>
      <div>
        <span class="title">教育背景</span>
        <div class="education">
          <div style="display: flex; flex-direction: row">
            <span class="m-2">{{ userMsg.graduationInstitution }}</span>
            <div v-show="showReturn">
              <el-popover
                ref="popover"
                placement="right"
                class="popup"
                :width="600"
                trigger="hover"
              >
                <div>
                  <div class="graph-view" v-if="schoolList && schoolList[0]">
                    <h2 style="margin-left: -10px">
                      {{ schoolList[0].replaceName }}
                    </h2>
                    <ul>
                      <li>
                        <span>学校名：</span
                        >{{ schoolList[0].universityNode[0].chineseName }}
                      </li>
                      <li>
                        <span>缩写：</span
                        >{{ schoolList[0].universityNode[0].simpleName }}
                      </li>
                      <li>
                        <span>英文名：</span
                        >{{ schoolList[0].universityNode[0].foreignName }}
                      </li>
                      <li><span>校训：</span>{{ schoolList[0].universityNode[0].schoolMotto }}</li>
                      <li><span>奖项：</span>{{ schoolList[0].universityNode[0].awards }}</li>
                      <li><span>水平：</span>{{ schoolList[0].universityNode[0].level }}</li>
                      <li><span>地址：</span>{{ schoolList[0].universityNode[0].address }}</li>
                      <li><span>学校类型：</span>{{ schoolList[0].universityNode[0].schoolType }} {{ schoolList[0].universityNode[0].type }}</li>
                      <!-- <li><span>学校类型：</span>{{  schoolList[0].universityNode[0].schoolType }} {{  schoolList.universityNode[0].type }}</li> -->
                      <li><span>详细介绍：</span>{{ schoolList[0].universityNode[0].desc }}</li>
                      <!-- <li><span>学校类型：</span></li>
          <li><span>校训：</span>{{ schoolList[0].universityNode[0].schoolMotto }}</li>
          <li><span>建立者：</span>{{ schoolList[0].universityNode[0].founder }}</li>
          <li><span>奖项：</span></li>
          <li><span>水平：</span></li>
          <li><span>地址：</span></li>
          <li><span>详细介绍：</span></li> -->
                    </ul>
                    <!-- <ul>
          <li><h3>学校名：</h3>{{ schoolList[0].universityNode[0].chineseName }}</li>
         
          
         </ul> -->
                  </div>
                  <div v-else>
                    <!-- 当 userMsg.replaceName 不可用时显示的内容 -->
                  </div>
                </div>
                <template #reference>
                  <img src="../assets/imgs/mark02.png" class="circle" />
                </template>
              </el-popover>
            </div>
          </div>
          <ul>
            <li><span>学位：</span>{{ userMsg.education }}</li>
            <li><span>专业：</span>{{ userMsg.major }}</li>
            <li><span>学校名：</span>{{ userMsg.graduationInstitution }}</li>
          </ul>
        </div>
        <div v-show="showTags" class="same-tags">教育背景相似</div>
      </div>
      <div>
        <span class="title">工作经历</span>
        <div v-for="(item, index) in userMsg.workExperiences" :key="index">
          <span class="m-2">{{ item.companyName }}</span>
          <ul>
            <li><span>开始时间：</span>{{ item.startTime }}</li>
            <li><span>结束时间：</span>{{ item.endTime }}</li>
            <!-- <li><span>地点：</span>湘西土家族苗族自治州</li> -->
            <li><span>公司名：</span>{{ item.companyName }}</li>
            <li><span>职位名称：</span>{{ item.jobName }}</li>
            <li style="white-space: pre-line;text-indent: -5em; padding-left: 5em;">
              <span>工作描述：</span>
              {{ item.description }}
            </li>
          </ul>
        </div>
        <div v-show="showTags" class="same-tags">工作经历相似</div>
      </div>
      <div>
        <span class="title">项目经历</span>
        <span
          style="
            font-size: 15px;
            color: #232323;
            font-weight: lighter;
            white-space: pre-line;
          "
          >{{ userMsg.projectExperiences }}</span
        >
        <div v-show="showTags" class="same-tags">项目经历相似</div>
      </div>
      <div>
        <span class="title" style="margin-top: 30px">补充信息</span>
        <ul>
          <!-- <li><span>专业技能：</span>{{ userMsg. labelProcessing.skillTags}}</li> -->
          <!-- <li><span>IT技能：</span>{{ userMsg.major }}</li> -->
          <!-- <li><span>商业技能：</span>{{ userMsg.graduationInstit ution }}</li> -->
          <li style="white-space: pre-line;text-indent: -5em; padding-left: 5em;">
            <span>技能证书：</span>{{ userMsg.skillsCertificate }}
          </li>
          <li style="white-space: pre-line;text-indent: -5em; padding-left: 5em;">
            <span>荣誉奖项：</span>{{ userMsg.awardsHonors }}
          </li>
        </ul>
      </div>
    </div>
    <div class="openJson" v-show="!isVisited">
      <div class="codeBox">
        <el-button type="success" class="return" @click="lookJson"
          >查看返回结果</el-button
        >
        <pre v-html="syntaxHighlight(userMsg)"></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import apiFun from "@/utils/api";
import { stringify } from "qs";
import { computed, onMounted, reactive, ref, toRef } from "vue";

const isVisited = ref(true);
const visible = ref(false);

const str = " 集团全新品牌logo及VI上线，在多渠道进行了传播；\n 企业VIP客户群体逾60人，结合了线上发布、线下体验；\n 后续媒体报道持续升温，子品牌罄玉结合代言人罗嘉良制造话题营销，为期3周；\n华拓招商模式发布会\n 整场活动以会议+洽谈双重模式进行，首日以介绍华拓内部平台资源优势，政府背景优势等为主，一对多推介会\n进行推广普及；\n 现场签署地方合作意向书，如：新疆、江西、浙江等优秀企业商户；\n 中国的波尔多为宣传点，主推旗下新疆大型项目，罄玉生态葡萄庄园、沙漠主题俱乐部等，制造营销、品牌热点。\n锦伟控股集团6A自媒体生态圈建设\n 本项目重构了公司现有微信企业号的功能与架构。\n 提高公众号的关注粉丝量的同时，对于有客户进行统一宣传，统一管理。"

const prop = defineProps({
  userMsg: {
    type: Object,
    default: () => {},
  },
  showReturn: {
    type: Boolean,
    default:true
  },
  schoolList: {
    type: Array,
    default: () => [],
  },
  showTags:{
    type:Boolean,
    default:false
  },
  showText:{
    type:Boolean,
    default:false
  }
});

const list = toRef(prop, "schoolList");

// const schoolContent = prop.schoolList[0].universityNode

const state = reactive({});

const isPoint = computed(() => {
  console.log(prop.schoolList);
  prop.schoolList.forEach((element) => {
    console.log(prop.userMsg.graduationInstitution)
    if (prop.userMsg.graduationInstitution === element.replaceName) {
      return true;
    } else return false;
  });
});

const isHovering = ref(true);
function onMouseOverHandler() {
  isHovering.value = true;
}

function onMouseOutHandler() {
  isHovering.value = false;
}
const keyStyle = () => {};

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

.circle {
  width: 20px;
  height: 20px;
  margin-bottom: -3px;
  transition: all 0.3s ease-out; /* 添加动画过渡效果 */
  margin-left: 15px;
}

.circle:hover {
  transform: scale(1.5); /* 触发缩放动画 */
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

.same-tags {
  position: relative;
  width: 130px;
  height: 40px;
  font-weight: bold;
  color: #fff;
  background-color: #FDB750;
  text-align: center;
  position: absolute;
  right: -100px;
  top: 10px;
  padding: 7px;
}

.same-tags::before {
  content: "";
  position: absolute;
  top: 50%;
  right: -19px;
  margin-top: -20px;
  border-width: 20px 0 20px 20px;
  border-style: solid;
  border-color: transparent transparent transparent #FDB750;
}

.graph-view {
  padding: 20px;
}
.graph-view > ul > li > span {
  color: #626262;
  font-size: 14px;
}
.mark {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 20px;
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
.container>div{
  position: relative;
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
