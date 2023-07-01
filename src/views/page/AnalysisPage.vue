<!--
 * @Author: STATICHIT
 * @Date: 2023-06-07 20:06:01
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-19 21:50:22
 * @FilePath: \resume_analysis\src\views\page\AnalysisPage.vue
 * @Description: 自定义
-->
<!-- 简历分析页面 -->
<template>
  <div class="box">
    <div class="page animate__animated animate__fadeIn">
      <div class="avatar">
        <img src="../../assets/avatar.png" />
        <div>
          <div class="user-tip">
            <h2>唐奇</h2>
            <el-tooltip v-for="item in state.lights" :key="item" placement="top">
              <template #content> 简历亮点 </template>
              <el-button class="tooltip">{{ item }}</el-button>
            </el-tooltip>
            <el-tooltip v-for="item in state.warns" :key="item" placement="top">
              <template #content> 简历风险点 </template>
              <el-button class="tag">{{ item }}</el-button>
            </el-tooltip>
          </div>
          <div class="user-msg">
            <el-icon><Iphone /></el-icon>
            <span>17723892378</span>
            <el-icon><Message /></el-icon>
            <span>2390864551@qq.com</span>
            <el-icon><Briefcase /></el-icon>
            <span>0年工作经验</span>
            <img src="..\..\assets\student-icon.png" />
            <span>本科</span>
          </div>
        </div>
      </div>
      <el-tabs v-model="state.isVisit"  class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane  class="animate__animated animate__slideInLeft" :lazy="true" label="中文简历" name="first">
        <resume-page></resume-page>
    </el-tab-pane>
    <el-tab-pane class="animate__animated animate__slideInRight" :lazy="true" label="候选人画像" name="second">
    <ResumePortraitVue></ResumePortraitVue>
  </el-tab-pane>
  </el-tabs>
    </div>
    <el-button color="#626aef" size="large" class="goBack" style="font-weight:bold">返回文件上传页面</el-button>
  </div>
</template>

<script setup>
import ResumePageVue from "@/components/ResumePage.vue";
import ResumePage from "@/components/ResumePage.vue";
import ResumePortraitVue from "@/components/ResumePortrait.vue";
import animated from "animate.css";
import { reactive } from "vue";

/* 返回json数据 */
const state = reactive({
    lights:['熟练掌握英语','技术达标'],
    warns:['本科学历异常'],
    isVisit:'first'
})

const handleClick = (tab, event) => {
}

</script>

<style lang="scss" scoped>
@import '/src/style/base.scss';

.box {
  padding: 60px;
  background-color: #f3fcfa;
}
.demo-tabs{
  padding: 20px;
}

.demo-tabs el-tab-pane {
  color: $primary-color;
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
::v-deep.tag{
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
    margin-top: 7px;
    height: 22px;
    font-size: 13px;
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
.user-msg img{
    height: 10px;
}
.tooltip{
    margin-top: 7px;
    height: 22px;
    font-size: 13px;
    background-color: rgb(229, 245, 255);
    color: rgb(51, 112, 255);
    border: 0;
}
.user-msg :deep(.el-icon) {
  color: #929292;
}
.user-msg span{
    margin-right: 20px;
}
</style>
