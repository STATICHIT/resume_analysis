<!--
 * @Author: STATICHIT
 * @Date: 2023-05-29 22:10:18
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-07 09:52:50
 * @FilePath: \resume_analysis\src\views\page\JobPool.vue
 * @Description: 岗位库
-->
<template>
  <div class="box cur">
    <div class="board2">
      <h1>云简岗位库</h1>
      <br />
      <p>
        岗位解析——为招聘效率而设计的最佳方案
        <br />
        为用户提供自动化岗位分析与入库的解决方案，利用机器阅读理解技术自动解析岗位要求，岗位诱惑，公司介绍等主要信息，并生成标准岗位画像标签。
      </p>
    </div>
    <div class="postBoard">
      <PostCard></PostCard>
    </div>
    <div class="bigTitle">录入更多岗位</div>
    <div class="board1">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="文件录入" name="first">
          <br /><br /><br />
          <Upload></Upload>
        </el-tab-pane>
        <el-tab-pane label="手动录入" name="second">
          <div style="padding: 20px">
            <label for="name" style="text-align: left">岗位名:</label>
            <input type="text" id="name" name="user_name" />
            <label for="bio" style="text-align: left">岗位职责:</label>
            <textarea id="bio" name="user_bio" class="text1"></textarea>
            <label for="bio" style="text-align: left">岗位要求:</label>
            <textarea id="bio" name="user_bio" class="text2"></textarea>
            <button>开始录入</button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import PostCard from "../../components/PostCard.vue";
import Upload from "../../components/Upload2.vue";
import { ref, onMounted } from "vue";
import apiFun from "../../utils/api"
const activeName = ref("first");
onMounted(() => {
  // Pre();
});

</script>

<style lang="scss" scoped>
.box {
  background-color: rgb(242, 247, 252);
  padding: 0 0 50px 0;
}
.cur {
  background: url("../../assets/imgs/波纹背景.png") no-repeat;
  background-size: 100%;
  background-position-y: bottom;
}
.board2 {
  background-image: url("../../assets/imgs/10.png");
  text-align: center;
  background-color: #e9f0f8;
  width: 100%;
  height: 220px;
  padding: 80px 0 0 0;
}
.bigTitle {
  margin-top: 50px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 35px;
  font-weight: 200;
}
.board1 {
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  width: 760px;
  height: 700px;
  border-radius: 20px;
  margin-bottom: 40px;
  padding: 40px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.postBoard {
  background-color: #f2f7fc;
  padding: 50px;
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
.text1 {
  height: 120px;
}
.text2 {
  height: 180px;
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
  margin-top: 10px;
}

button:hover {
  background: #444fcf;
}
</style>