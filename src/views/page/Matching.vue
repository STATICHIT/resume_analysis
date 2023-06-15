<!--
 * @Author: STATICHIT
 * @Date: 2023-06-10 11:18:26
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-14 22:29:40
 * @FilePath: \resume_analysis\src\views\page\Matching.vue
 * @Description: 自定义
-->
<template>
  <div class="box cur">
    <div class="bigTitle">人岗匹配</div>
    <div class="main">
      <div class="left">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="选择现有岗位" name="first">
          
        </el-tab-pane>
        <el-tab-pane label="手动输入岗位" name="second">
          <div style="padding: 20px">
            <label for="name" style="text-align: left">岗位名:</label>
            <input type="text" id="name" name="user_name" />
            <label for="bio" style="text-align: left">岗位描述:</label>
            <textarea id="bio" name="user_bio"></textarea>
            <button>开始匹配</button>
          </div>
        </el-tab-pane>
      </el-tabs>
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
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.left {
  width: 40%;
  height: 600px;
  float: left;
  padding: 30px;
}
.right {
  width: 60%;
  height: 600px;
  background-color: rgb(218, 238, 247);
  float: left;
}

.bigTitle {
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}
input,
textarea {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #f6f9fc;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}
input {
  height: 20px;
}
textarea {
  height: 270px;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
}

label {
  display: block;
  margin-bottom: 8px;
}
button {
  background: #7a83e7;
  border: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 35px;
  padding: 0px 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 200;
  width: 180px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background: #444fcf;
}
</style>