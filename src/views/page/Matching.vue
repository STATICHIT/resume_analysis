<!--
 * @Author: STATICHIT
 * @Date: 2023-06-10 11:18:26
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-11 20:57:32
 * @FilePath: \resume_analysis\src\views\page\Matching.vue
 * @Description: 自定义
-->
<template>
  <div class="box cur">
    <div class="bigTitle">人岗匹配</div>
    <div class="main">
      <div class="left">
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeName = ref("first");
</script>

<style lang="scss" scoped>
.box {
  padding: 30px 0;
  background-color: #fff;
  height: 1000px;
}

.cur {
  background: url("../../assets/imgs/波纹背景.png") no-repeat;
  background-size: 100%;
  background-position-y: bottom;
}
.bigTitle {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin-top: 100px;
}
.main {
  margin: 50px auto;
  width: 75%;
  height: 600px;
}

.left {
  width: 40%;
  height: 600px;
  float: left;
  background-color: rgb(243, 231, 233);
}
.right {
  width: 60%;
  height: 600px;
  background-color: rgb(205, 231, 241);
  float: left;
}
</style>