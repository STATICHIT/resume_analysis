<!--
 * @Author: STATICHIT
 * @Date: 2023-07-03 21:52:10
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-11 21:53:30
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
        >
          <el-tab-pane label="面试邀约" name="first">
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
                ><b>字节跳动服务有限公司</b></span>
            </span>
            <span style="color: rgb(148, 147, 147)">tip：加粗部分在邮件发出时将由系统自动配置</span>
          </el-tab-pane>
          <!-- 入职邀约 -->
          <el-tab-pane label="入职邀约" name="second">
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
              跨越山海，终于找到最优秀的你!恭喜你以出色的表现通过了所有面试，现在我们非常荣幸地邀请你加入字节跳动大家庭。多元业务，等你飞奔疾驰;广阔舞台，待你大展身手。未来，我们一起成长，一起更好!
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
                ><b>字节跳动 人力资源平台</b></span
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
        <button class="detail" @click="changeTemplate">切换模板</button>
        <button class="detail" @click="confirmTemplate">确认模板</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElNotification } from "element-plus";
const activeName = ref("first");
const form = ref({
  time: "2023年7月4日 21点27分",
  area: "北京字节跳动科技园",
  type: "线下面试",
  data: "1份个人简历、身份证、签字笔",
  contact: "Cherry 188********（微信同号）",
});
const form2 = ref({
  name: "lucky",
  phone: "123-4567-890",
  email: "example@email.com",
});

const centerDialogVisible = ref(false);
const open = () => {
  ElNotification({
    title: "保存成功",
    message: "已保存当前模板",
    type: "success",
  });
};
function changeTemplate() {
  
}
function confirmTemplate() {
  open();
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
</style>