<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 09:23:00
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-02 11:27:57
 * @FilePath: \resume_analysis\src\views\main\top.vue
 * @Description: 顶部组件
-->
<template>
  <div class="top">
    <div class="content">
      <div style="display: flex; flex: 1">
        <div class="active" @click="changeCom">STA简历分析</div>
        <div class="active"><DropDown></DropDown></div>
      </div>
      <div style="width: 230px; text-align: right; display: flex">
        <div
          class="active"
          :style="isActive1"
          style="color: #eb8f3b"
          @click="self"
        >
          {{ username }}
        </div>
        <div class="active" :style="isActive1" @click="out">退出</div>
        <div class="active" :style="isActive2" @click="login">登录</div>
        <div class="active" :style="isActive2" @click="enroll">注册</div>
        <div class="active" :style="isActive1" @click="message">消息通知</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DropDown from "../../components/DropDown.vue";
import router from "../../router";
const username = "STATICHIT";
var isActive1 = "";
var isActive2 = "display:none";
let login = () => {
  router.push({ path: "/login" });
};
let enroll = () => {
  router.push({ path: "/enroll" });
};
let changeCom = () => {
  router.push({ path: "/main" });
};
let self = () => {
  router.push({ path: "/self" });
};
let out = () => {
  let frame = confirm("确定要退出当前账号吗？");
  if (frame === true) {
    //退出登录
    //账号退出选项消失，登录注册选项出现
    this.isActive1 = "display:none";
    //清除token
    // this.$store.commit("deleteToken");
    router.push({ path: "/main" });
  }
};
let message = () => {
  router.push({ path: "/message" });
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.top {
  background-color: #3e3e3e;
  font-size: 14px;
  position: fixed;
  width: 100%;

  box-shadow: 0 5px 10px -5px gray;
}
.content {
  width: 70%;
  height: 50px;
  margin: 0 auto;
  display: flex;
}
.active {
  line-height: 50px;
  color: #cfcfcf;
  margin-right: 20px;
  font-size: 14px;
}
.active:hover {
  cursor: pointer;
  color: #ffffff;
}
</style>