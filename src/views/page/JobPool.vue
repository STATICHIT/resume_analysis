<template>
  <div class="box">
    <div class="board2">
      <h1>云简岗位库</h1>
      <br />
      <p>
        岗位解析——为招聘效率而设计的最佳方案
        <br>
        为用户提供自动化岗位分析与入库的解决方案，利用机器阅读理解技术自动解析岗位要求，岗位诱惑，公司介绍等主要信息，并生成标准岗位画像标签。
      </p>
    </div>
    <div class="board1">
      <h2>这一块加个录入岗位（多种上传格式）</h2>
    </div>
    <PostCard></PostCard>
  </div>
</template>

<script setup>
import PostCard from "../../components/PostCard.vue"
</script>

<style lang="scss" scoped>
.box{
  background-color: rgb(242, 247, 252);
}
.board1{
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  width: 800px;
  height: 600px;
  margin-bottom: 40px;
}
.board2 {
  text-align: center;
  background-color: #e9f0f8;
  width: 100%;
  height: 220px;
  padding: 70px 0 0 0;
  margin-bottom: 40px;
}
</style>