<!-- 中文简历页面 -->
<template>
  <div v-show="isVisited" class="container">
    <el-button type="success" class="return" @click="lookJson"
      >查看返回数据</el-button
    >
    <div>
      <span class="title">基本信息</span>
      <ul class="ul-list">
        <li><span>姓名：</span>{{ userMsg.name }}</li>
        <li><span>邮箱：</span>{{ userMsg.mailBox }}</li>
        <li><span>性别：</span>{{ userMsg.sex }}</li>
        <li><span>求职方向：</span>{{ userMsg.expectedJob }}</li>
        <li><span>手机：</span>{{ userMsg.phone }}</li>
        <li><span>学历：</span>{{ userMsg.education }}</li>
        <li><span>年龄：</span>{{ userMsg.age }}</li>
        <li><span>出生年月：</span>{{ userMsg.dateOfBirth }}</li>
      </ul>
    </div>
    <div>
      <span class="title">教育背景</span>
      <div class="education">
        <el-popover
    ref="popover"
    placement="right"
    class="popup"
    title="吉首大学"
    :width="600"
    trigger="hover"
    content="吉首大学 [107] （Jishou University），简称“吉大” [1] ，学校地跨湖南省湘西土家族苗族自治州和张家界市两地办学 [105] ，是国家民族事务委员会与湖南省人民政府省部共建大学，是湖南省高水平建设大学、湖南省国内一流学科建设高校， [104] 学校具有推荐免试研究生资格， [104] 入选国家“中西部高校基础能力建设工程”、“卓越医生教育培养计划”、“卓越农林人才教育培养计划”、“服务国家特殊需求博士人才培养项目”、“湖南省2011计划”，为中国服务外包校企联盟成员单位。 [2]
学校成立于1958年4月，1978年复升为省属综合性大学，同年中南大学湘雅医学院湘西分院并入吉首大学组建医疗系，湘潭大学湘西分校并入吉首大学组建体育系，2000年，吉首卫生学校并入吉首大学；2001年，湘西民族教育学院与吉首民族师范学校并入吉首大学组建吉首大学师范学院；2002年，武陵高等专科学校并入吉首大学成为吉首大学张家界校区。 [1]
根据2023年5月学校官网信息显示，学校总占地面积2900余亩，建筑面积近60万平方米，教学科研仪器设备总值3.3亿元，各类纸质、电子文献600余万册；设有教学学院22个，一级学科41个，本科专业78个， [104] 拥有博士后科研流动站2个、一级学科博士点1个、一级学科硕士点16个、专业硕士点17个；有在职教职员工近1500人，专任教师1100余人；各类在籍学生3万余人，其中在校本科生、硕士生、博士生、留学生共2万人。"
  >
    <template #reference>
      <span class="m-2">{{ userMsg.graduationInstitution }}<img src="../assets/imgs/mark02.png" class="circle"></span>
    </template>
  </el-popover>
        <ul>
          <!-- <li><span>开始时间：</span>2020.09</li>
          <li><span>结束时间：</span>至今</li>
          <li><span>地点：</span>湘西土家族苗族自治州</li> -->
          <li><span>学位：</span>{{ userMsg.education }}</li>
          <li><span>专业：</span>{{ userMsg.major }}</li>
          <li><span>学校名：</span>{{ userMsg.graduationInstitution }}</li>
          <!-- <li><span>学校排名：</span>324</li>
          <li><span>所学课程：</span>软件工程</li> -->
        </ul>
      </div>
    </div>
    <div>
      <span class="title">社会经历</span>
      <div v-for="(item,index) in userMsg.workExperiences" :key="index">
        <el-popover
    ref="popover"
    placement="right"
    title="吉首大学"
    :width="600"
    trigger="hover"
    content="吉首大学 [107] （Jishou University），简称“吉大” [1] ，学校地跨湖南省湘西土家族苗族自治州和张家界市两地办学 [105] ，是国家民族事务委员会与湖南省人民政府省部共建大学，是湖南省高水平建设大学、湖南省国内一流学科建设高校， [104] 学校具有推荐免试研究生资格， [104] 入选国家“中西部高校基础能力建设工程”、“卓越医生教育培养计划”、“卓越农林人才教育培养计划”、“服务国家特殊需求博士人才培养项目”、“湖南省2011计划”，为中国服务外包校企联盟成员单位。 [2]
学校成立于1958年4月，1978年复升为省属综合性大学，同年中南大学湘雅医学院湘西分院并入吉首大学组建医疗系，湘潭大学湘西分校并入吉首大学组建体育系，2000年，吉首卫生学校并入吉首大学；2001年，湘西民族教育学院与吉首民族师范学校并入吉首大学组建吉首大学师范学院；2002年，武陵高等专科学校并入吉首大学成为吉首大学张家界校区。 [1]
根据2023年5月学校官网信息显示，学校总占地面积2900余亩，建筑面积近60万平方米，教学科研仪器设备总值3.3亿元，各类纸质、电子文献600余万册；设有教学学院22个，一级学科41个，本科专业78个， [104] 拥有博士后科研流动站2个、一级学科博士点1个、一级学科硕士点16个、专业硕士点17个；有在职教职员工近1500人，专任教师1100余人；各类在籍学生3万余人，其中在校本科生、硕士生、博士生、留学生共2万人。"
  >
    <template #reference>
      <span class="m-2">{{ item.companyName }}<img src="../assets/imgs/mark02.png" class="circle"></span>
      
    </template>
  </el-popover>
        
        <!-- <el-popover
    ref="popover"
    placement="right"
    :visible="visible"
    title="Title"
    :width="200"
    trigger="hover"
    content="popupContent.pop1"
  ><span :class="{keyWords:true}" @mouseover="visible=true"
    @mouseout="visible=false" >吉首大学</span>
  </el-popover> -->
        
        <ul>
          <li><span>开始时间：</span>{{ item.startTime }}</li>
          <li><span>结束时间：</span>{{item.endTime}}</li>
          <!-- <li><span>地点：</span>湘西土家族苗族自治州</li> -->
          <li><span>公司名：</span>{{ item.companyName }}</li>
          <li><span>职位名称：</span>{{item.jobName}}</li>
          <li style="white-space: pre-line;">
            <span>工作描述：</span>
            {{ item.description }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <span class="title">项目经历</span>
      <span style="font-size: 15px;color: #232323;font-weight: lighter;white-space: pre-line;">{{ userMsg.projectExperiences }}</span>
      
      <!-- <div v-for="item in state.project_experience" :key="item">
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
      </div> -->
    </div>
    <div>
      <span class="title" style="margin-top: 30px;">补充信息</span>
      <ul>
          <!-- <li><span>专业技能：</span>{{ userMsg. labelProcessing.skillTags}}</li> -->
          <!-- <li><span>IT技能：</span>{{ userMsg.major }}</li> -->
          <!-- <li><span>商业技能：</span>{{ userMsg.graduationInstit ution }}</li> -->
          <li style="white-space: pre-line;"><span>技能证书：</span>{{ userMsg.skillsCertificate }}</li>
          <li style="white-space: pre-line;"><span >荣誉奖项：</span>{{ userMsg.awardsHonors }}</li>
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
</template>

<script setup>
import { stringify } from "qs";
import { reactive, ref } from "vue";

const isVisited = ref(true);
const visible = ref(false)

const prop = defineProps({
  userMsg:{
    type:Object
  }
})
const state = reactive({
 
});

const popupContent = reactive({
  pop1:'吉首大学 [107] （Jishou University），简称“吉大” [1] ，学校地跨湖南省湘西土家族苗族自治州和张家界市两地办学 [105] ，是国家民族事务委员会与湖南省人民政府省部共建大学，是湖南省高水平建设大学、湖南省国内一流学科建设高校， [104] 学校具有推荐免试研究生资格， [104] 入选国家“中西部高校基础能力建设工程”、“卓越医生教育培养计划”、“卓越农林人才教育培养计划”、“服务国家特殊需求博士人才培养项目”、“湖南省2011计划”，为中国服务外包校企联盟成员单位。 [2]学校成立于1958年4月，1978年复升为省属综合性大学，同年中南大学湘雅医学院湘西分院并入吉首大学组建医疗系，湘潭大学湘西分校并入吉首大学组建体育系，2000年，吉首卫生学校并入吉首大学；2001年，湘西民族教育学院与吉首民族师范学校并入吉首大学组建吉首大学师范学院；2002年，武陵高等专科学校并入吉首大学成为吉首大学张家界校区。 [1]根据2023年5月学校官网信息显示，学校总占地面积2900余亩，建筑面积近60万平方米，教学科研仪器设备总值3.3亿元，各类纸质、电子文献600余万册；设有教学学院22个，一级学科41个，本科专业78个， [104] 拥有博士后科研流动站2个、一级学科博士点1个、一级学科硕士点16个、专业硕士点17个；有在职教职员工近1500人，专任教师1100余人；各类在籍学生3万余人，其中在校本科生、硕士生、博士生、留学生共2万人。'
})
const isHovering = ref(true);
function onMouseOverHandler() {
  isHovering.value = true;
}

function onMouseOutHandler() {
  isHovering.value = false;
}
const keyStyle = () => {
  
}

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
.mark{
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
