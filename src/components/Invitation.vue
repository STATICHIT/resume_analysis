<!--
 * @Author: STATICHIT
 * @Date: 2023-07-03 21:52:10
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-05 11:00:07
 * @FilePath: \resume_analysis\src\components\Invitation.vue
 * @Description: 自定义
-->
<template>
  <div>
    <div class="board1">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="面试邀约" name="first">
          <h3 style="margin-bottom: 20px">信息配置</h3>
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
            <span style="margin-left: 700px"><b>字节跳动服务有限公司</b></span>
          </span>
          <span style="color: rgb(148, 147, 147)"
            >tip：加粗部分在邮件发出时将由系统自动配置</span
          >
        </el-tab-pane>
        <el-tab-pane label="入职邀约" name="second">入职邀约</el-tab-pane>
      </el-tabs>
      <!-- <el-button text @click="centerDialogVisible = true"> 发送邀约 </el-button>

      <el-dialog
        v-model="centerDialogVisible"
        title="发送邀约"
        width="30%"
        align-center
      >
        <div>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="面试邀约" name="first">面试邀约</el-tab-pane>
            <el-tab-pane label="入职邀约" name="second">入职邀约</el-tab-pane>
          </el-tabs>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">
              确认发送
            </el-button>
          </span>
        </template>
      </el-dialog> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeName = ref("first");
const form = {
  time: "2023年7月4日 21点27分",
  area: "北京字节跳动科技园",
  type: "线下面试",
  data: "1份个人简历、身份证、签字笔",
  contact: "Cherry 188********（微信同号）",
};
const centerDialogVisible = ref(false);
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
</style>