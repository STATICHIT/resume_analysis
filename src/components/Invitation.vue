<!--
 * @Author: STATICHIT
 * @Date: 2023-07-03 21:52:10
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-15 17:56:16
 * @FilePath: \resume_analysis\src\components\Invitation.vue
 * @Description: 自定义
-->
<template>
  <div>
    <div style="height: 100%; min-height: 800px; padding: 20px; float: left">
      <div class="board1">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
          v-loading.lock="fullscreenLoading1"
        >
          <el-tab-pane label="面试邀约" name="1">
            <h3 style="margin-bottom: 20px">信息配置</h3>
            <!-- 表单内容填写 -->
            <el-form>
              <el-form-item label="面试时间">
                <el-input v-model="form.time" />
              </el-form-item>
              <el-form-item label="面试地点">
                <el-input v-model="form.area" />
              </el-form-item>
              <el-form-item label="面试形式">
                <el-input v-model="form.type" />
              </el-form-item>
              <el-form-item label="携带资料">
                <el-input v-model="form.data" />
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="form.contact" />
              </el-form-item>
            </el-form>

            <h3 style="margin-bottom: 20px">邮件效果</h3>
            <br />
            <span
              style="
                display: inline-block;
                background-color: rgba(251, 252, 219, 0.664);
                padding: 30px;
              "
            >
              <h4>李明，你好！</h4>
              <br />
              我司人力资源部已初审您的简历，经过初步沟通，认为您基本具备<b>Java工程师</b>岗位的任职资格，因此正式通知您来我公司参加面试。<br />
              <br />
              <b>面试时间：</b>{{ form.time }}<br />
              <b>面试地点：</b>{{ form.area }}<br />
              <b>交通指引：</b>{{ form.type }}<br />
              <b>携带资料：</b>{{ form.data }}<br />
              <b>联系方式：</b>{{ form.contact }}<br />
              <br />
              <span style="margin-left: 700px"><b>2023年7月5日</b></span>
              <br />
              <span style="margin-left: 700px"
                ><b>腾达科技服务有限公司</b></span
              >
            </span>
            <span style="color: rgb(148, 147, 147)"
              >tip：加粗部分在邮件发出时将由系统自动配置</span
            >
          </el-tab-pane>
          <!-- 入职邀约 -->
          <el-tab-pane label="入职邀约" name="2">
            <h3 style="margin-bottom: 20px">信息配置</h3>
            <el-form>
              <el-form-item label="对接HR称呼">
                <el-input v-model="form2.name" />
              </el-form-item>
              <el-form-item label="HR联系方式">
                <el-input v-model="form2.phone" />
              </el-form-item>
              <el-form-item label="HR帮助邮箱">
                <el-input v-model="form2.email" />
              </el-form-item>
            </el-form>
            <h3 style="margin-bottom: 20px">邮件效果</h3>
            <br />
            <span
              style="
                display: inline-block;
                background-color: rgba(251, 252, 219, 0.664);
                padding: 30px;
              "
            >
              <h4>亲爱的 李明：</h4>
              <br />
              跨越山海，终于找到最优秀的你!恭喜你以出色的表现通过了所有面试，现在我们非常荣幸地邀请你加入腾达科技大家庭。多元业务，等你飞奔疾驰;广阔舞台，待你大展身手。未来，我们一起成长，一起更好!
              <br /><br />
              <h3>职位：后台开发</h3>
              <br />
              此通知为系统发出，请勿直接回复~<br />
              后续联络工作请联系HR：{{ form2.name }} {{ form2.phone }} <br />
              若是Ta不慎错过了你的电话或短信，也可以将问题发送到我们的HR帮助台{{
                form2.email
              }}
              <br />
              会有专人在第一时间跟进回复哦~
              <br />
              <span style="margin-left: 700px"><b>2023年7月5日</b></span>
              <br />
              <span style="margin-left: 700px"
                ><b>腾达科技 人力资源平台</b></span
              >
            </span>
            <span style="color: rgb(148, 147, 147)"
              >tip：加粗部分在邮件发出时将由系统自动配置</span
            >
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="tembutton">
      <div class="mybutton2">
        <button class="detail" @click="addTemplate">自定义模板</button>
        <button class="detail" @click="changeTemplate">切换模板</button>
        <button class="detail" @click="confirmTemplate">确认模板</button>
      </div>
    </div>
    <el-drawer v-model="diyTemplate" direction="rtl">
      <template #header>
        <h4>自定义模板</h4>
      </template>
      <template #default>
        <div>
          <el-form-item label="模板名">
            <el-input v-model="templateName" placeholder="请输入模板名" /><br />
          </el-form-item>
          <textarea
            name=""
            id="myTextarea"
            cols="65"
            rows="25"
            v-model="templateContnet"
            placeholder="${name}，你好！

我司人力资源部已初审您的简历，经过初步沟通，认为您基本具备${job}岗位的任职资格，
因此正式通知您来我公司参加面试。

面试时间：#{time}
面试地点：#{area}
交通指引：#{tip}
携带资料：#{more}
联系方式：#{connect}

                                                             ${current-time}
                                                             ${company}"
          ></textarea>
          <div style="margin-left: 7px">
            <span class="tip1"
              >请在上面的编辑框中自定义邀约模板。系统会自动根据您的设置进行内容匹配。您可以使用${
              xxx }来替代系统自动匹配的内容，而使用#{ xxx
              }来替代您希望用户灵活设置的内容。例如，如果您想要系统自动匹配日期，您可以使用{date}；如果您希望用户自定义地点，您可以使用#{
              location
              }。下方有可选占位符表，请确保正确使用这些占位符，以获得准确的匹配结果。</span
            >
          </div>

          <br />
          <div class="tip2">
            <div style="float: left">
              系统自动匹配内容
              <ul>
                <li>${name} 应聘人</li>
                <li>${time} 邮件时间</li>
                <li>${company} 公司</li>
                <li>${job} 投递岗位</li>
                <li>.......</li>
              </ul>
            </div>
            <div style="float: right">
              系统自动匹配内容
              <ul>
                <li>#{time} 面试时间</li>
                <li>#{area} 面试地点</li>
                <li>#{type} 面试形式</li>
                <li>#{more} 携带资料</li>
                <li>.......</li>
              </ul>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick">确定</el-button>
        </div>
      </template>
    </el-drawer>

    <el-drawer v-model="checkTemplate" direction="rtl">
      <template #header>
        <h4>模板列表</h4>
      </template>
      <template #default>
        <div>
          <el-table
            :data="tableData"
            highlight-current-row
            style="width: 100%"
            @current-change="handleCurrentChange"
          >
            <el-table-column type="index" width="40" />
            <el-table-column property="name" label="模板名" width="100" />
            <el-table-column property="concent" label="模板内容" width="190" />
            <el-table-column property="time" label="创建时间" />
          </el-table>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick2">取消</el-button>
          <el-button type="primary" @click="confirmClick2">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElNotification } from "element-plus";
import { ElTable } from 'element-plus'
import apiFun from "@/utils/api";
const activeName = ref("1");
const fullscreenLoading1 = ref(false);
const form = ref({
  time: "2023年7月4日 21点27分",
  area: "北京腾达科技有限公司",
  type: "线下面试",
  data: "1份个人简历、身份证、签字笔",
  contact: "Cherry 188********（微信同号）",
});

const form2 = ref({
  name: "lucky",
  phone: "123-4567-890",
  email: "example@email.com",
});

function getTable() {
  console.log("RRF")
  // apiFun.template.getAll().then((res) => {
  //   console.log(res)
  //   tableData.value = [];
  //   res.data.forEach((t) => {
  //     tableData.value.push({
  //       name: t.templateName,
  //       concent: t.template.slice(0, 100),
  //       time: t.createTime,
  //       trueConcent: t.template,
  //     });
  //   });
  // });
}
const open = (title, message, type) => {
  ElNotification({
    title: title,
    message: message,
    type: type,
  });
};
const diyTemplate = ref(false); //自定义模板抽屉
function addTemplate() {
  diyTemplate.value = true;
}
let templateName = ref();
let templateContnet = ref("");
//添加自定义模板
function confirmClick() {
  diyTemplate.value = false;
  console.log("模板内容：", templateContnet.value.toString());
  apiFun.template
    .addTemplate({
      type: activeName.value,
      templateName: templateName.value,
      template: templateContnet.value,
    })
    .then((res) => {
      if (res.code === 200) {
        open("添加成功", `已添加模板(${templateName.value})`, "success");
        templateName.value = null;
        templateContnet.value = null;
      } else {
        open("添加失败", `请重新试`, "error");
      }
    });
}
let checkTemplate = ref(false); //查看模板列表
function changeTemplate() {
  checkTemplate.value = true;
  getTable();
}
//切换模板
function cancelClick2() {
  checkTemplate.value = false;
}
function confirmClick2() {
  checkTemplate.value = false;
  fullscreenLoading1.value = true;
  setTimeout(() => {
    fullscreenLoading1.value = false;
  }, 1000);
}
const currentTem = ref();
const handleCurrentChange = (val) => {
  currentTem.value = val;
  console.log(currentTem.value);
};
const tableData = ref([
  {
    name: "通用面试邀约模板",
    concent:
      "${name}，你好!我司人力资源部已初审您的简历，经过初步沟通，认为您基本具备${job}岗位的任职资格，因此正式通知您来我公司参加面试。",
    time: "2016-05-03",
  },
  {
    name: "基础面试邀约模板",
    concent:
      "亲爱的${name}，你好！我们公司的人力资源部已经对您的简历进行了初审，经过我们内部的初步沟通，认为您基本具备${job}岗位的任职资格，因此正式通知您来我公司参加面试。",
    time: "2016-05-02",
  },
  {
    name: "财务岗位面试邀约模板",
    concent:
      "${name}，你好我司人力资源部已初审您的简历，经过初步沟通，认为您基本具备${job}岗位的任职资格，因此正式通知您来我公司参加面试。",
    time: "2016-05-04",
  },
  {
    name: "高级面试邀约模板",
    concent:
      "${name}，你好我司人力资源部已初审您的简历，经过初步沟通，认为您基本具备${job}岗位的任职资格，因此正式通知您来我公司参加面试。",
    time: "2016-05-01",
  },
]);
function confirmTemplate() {
  open("保存成功", "已保存当前模板", "success");
}
</script>

<style lang="scss" scoped>
.board1 {
  width: 1000px;
  height: 800px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.mybutton2 {
  height: 200px;
  margin-top: 160%;
}
.tembutton {
  width: 350px;
  height: 100%;
  min-height: 800px;
  padding: 20px;
  float: right;
}
.detail {
  margin-left: 30px;
  margin-top: 25px;
  width: 200px;
  background: #1de9b6;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
}

.detail:hover {
  background: #64ffda;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
}
.tip1 {
  color: rgb(151, 150, 150);
  font-size: 13px;
}
.tip2 {
  color: #6b778c;
  width: 500px;
  height: 180px;
  padding: 20px 80px;
  background-color: rgba(204, 201, 201, 0.082);
  margin-top: 20px;
}
textarea {
  margin: 15px 0 15px 7px;
  padding: 10px;
  border: none;
  font-size: 13px;
  outline: 0;
  background-color: #f8fae662;
  font-family: "Microsoft YaHei";
  color: black;
}
textarea::-webkit-input-placeholder {
  font-family: "Microsoft YaHei";
  font-weight: 600;
}
</style>