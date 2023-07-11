<!--
 * @Author: STATICHIT
 * @Date: 2023-05-25 19:45:33
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-10 22:12:03
 * @FilePath: \resume_analysis\src\components\SearchType.vue
 * @Description: 条件搜索选择栏
-->
<template>
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
          <el-select v-model="value1" placeholder="性别" style="width: 150px">
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
            v-model="value2"
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
</template>

<script setup>
import { ref, onMounted } from "vue";
onMounted(() => {
  // Pre();
});
const value1 = ref([]); //性别
const value2 = ref([]); //学历要求
const drawer = ref(false); //抽屉控件
const sex = ref("");
const condition = ref({
  basic: {
    name: "",
    sex: null,
    minAge: 0,
    maxAge: 0,
    major: "",
    expectedJob: "",
    graduationInstitution: "",
  },
  contact: {
    email: "",
    phone: "",
  },
  workYear: {
    lowerLimit: 0,
    upperLimit: 0,
  },
  workExperience: {
    company: "",
    jobName: "",
    description: "",
  },
  other: {
    skillsCertificate: "",
    projectExperiences: "",
    awardsHonors: "",
  },
  fullText: "",
  processStage: 0,
  pageNum: 0,
  pageSize: 5,
});
function moreCheck() {
  drawer.value = true;
}
function cancelClick() {
  drawer.value = false;
  condition.value = null;
  console.log(condition.value);
}
function confirmClick() {
  drawer.value = false;
  console.log(condition.value);
}
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