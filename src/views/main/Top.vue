<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 09:23:00
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-05 19:57:31
 * @FilePath: \resume_analysis\src\views\main\Top.vue
 * @Description: 顶部组件
-->
<template>
  <div class="top">
    <div class="content">
      <div style="display: flex; flex: 1">
        <img src="../../assets/智能互联云_智能互联引擎.png" class="logoImg" />
        <h1 @click="changeCom" class="logo">云简智能</h1>
        <div style="display: flex; flex: 1">
          <div
            class="active"
            v-for="(item, i) in tops"
            :key="i"
            :class="item.path == navHeader ? 'checkstyle' : ''"
            @click="changeHeader(item)"
          >
            {{ item.title }}
          </div>
          <!-- <div><DropDown></DropDown></div> -->
        </div>
      </div>
      <div style="width: 330px; text-align: right; display: flex">
        <div :style="isActive1" class="name" @click="self">
          {{ username }}
        </div>
        <div class="active" :style="isActive1" @click="out">退出</div>
        <div
          class="active"
          :style="isActive1"
          :class="'/message' == navHeader ? 'checkstyle' : ''"
          @click="message"
        >
          消息通知
        </div>
        <div class="active" :style="isActive2" @click="router.push('/login')">
          登录
        </div>
        <div class="active" :style="isActive2" @click="router.push('/enroll')">
          注册
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropDown from "../../components/DropDown.vue";
import router from "../../router";
const username = "STATICHIT";
const tops = [
  { title: "简历分析", path: "/resumeAnalysis" },
  { title: "人岗匹配", path: "/matching" },
  { title: "人才库", path: "/talentPool" },
  { title: "岗位库", path: "/jobPool" },
  { title: "岗位分析", path: "/jobAnalysis" },
];
let navHeader = ref("1");
let changeHeader = (item) => {
  navHeader.value = item.path;
  router.push({ path: item.path });
};
var isActive1 = ref("");
var isActive2 = ref("display:none");
let changeCom = () => {
  navHeader.value = "";
  router.push({ path: "/mainPage" });
};
let self = () => {
  router.push({ path: "/self" });
};
let out = () => {
  let frame = confirm("确定要退出当前账号吗？");
  if (frame === true) {
    //退出登录
    //账号退出选项消失，登录注册选项出现
    isActive1.value = "display:none";
    //清除token
    // this.$store.commit("deleteToken");
    router.push({ path: "/login" });
  }
};
let message = () => {
  navHeader.value = "/message";
  router.push({ path: "/message" });
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.top {
  background-color: #ffffff;
  font-size: 14px;
  position: fixed;
  width: 100%;
  box-shadow: 0 1px 8px -5px gray;
}
.name {
  color: #6671e3;
  line-height: 60px;
  margin-right: 20px;
  cursor: pointer;
}
.content {
  width: 75%;
  height: 60px;
  margin: 0 auto;
  display: flex;
}
.logoImg {
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 10px;
}
.logo {
  cursor: pointer;
  line-height: 60px;
  color: #6671e3;
  margin-right: 40px;
}
.active {
  line-height: 60px;
  color: #353131;
  margin-right: 20px;
  font-size: 14px;
}
.active:hover {
  cursor: pointer;
  color: #6671e3;
  border-bottom: 4px solid #6671e3;
}
.checkstyle {
  color: #2a39d6;
  border-bottom: 4px solid #2a39d6;
}
</style>