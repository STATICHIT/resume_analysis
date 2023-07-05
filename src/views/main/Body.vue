<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 09:23:14
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-05 16:53:18
 * @FilePath: \resume_analysis\src\views\main\Body.vue
 * @Description: 主页身体组件
-->
<template>
  <div class="box">
    <div class="board1">
      <div class="bigTitle">人力决策智能</div>
      <div class="title">
        基于先进的人工智能技术，以高效简历分析为核心<br />
        为HR提供智能化、个性化的人才招聘解决方案<br />
      </div>
      <div class="quick">
        <a href="">快速开始</a>
      </div>
      <div class="description">-CloudAI-</div>
    </div>
    <!-- <div class="shade"></div> -->
    <div class="board2">
      <img
        class="img1"
        src="https://www.xiaoxizn.com/home/generalization-min.png"
        alt=""
      />
      <img class="img2" src="https://www.xiaoxizn.com/home/ai-min.png" alt="" />
      <h2 class="board2Title">功能介绍</h2>
      <h4 class="littleTitle2">Function introduction</h4>
      <FlexCards></FlexCards>
    </div>
    <!-- <div class="board3"></div> -->
  </div>
</template>

<script setup>
import FlexCards from "../../components/FlexCards.vue";
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
}

.board1 {
  width: 100%;
  height: 1180px;
  padding: 6rem;
  flex: 1;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  background: url(../../assets/imgs/09.png) center;
  background-size: cover;
}
.bigTitle {
  color: #0c2c35;
  position: absolute;
  margin: 0 auto;
  padding: 0 20px;
  top: 220px;
  left: 0;
  right: 0;
  font-size: 40px;
  font-weight: 800;
}
.title {
  color: #0c2c35;
  position: absolute;
  margin: 0 auto;
  padding: 0 20px;
  top: 310px;
  left: 0;
  right: 0;
  font-size: 22px;
}
.quick a {
  display: block;
  width: 130px;
  height: 40px;
  border: 1px solid #2f2fed;
  text-align: center;
  line-height: 40px;
  font-size: 17px;
  color: #2f2fed;
  text-decoration: none;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 320px;
}
.description {
  color: aliceblue;
  position: absolute;
  margin: 0 auto;
  padding: 0 20px;
  bottom: 40px;
  left: 0;
  right: 0;
}
.shade {
  position: absolute;
  left: 0;
  right: 0;
  height: 950px;
  background: rgba(0, 0, 0, 0.1);
  margin-top: -6rem;
}
.board2 {
  width: 100%;
  height: 1000px;
  padding: 6rem;
  text-align: center;
  background-color: #eafaf7;
  position: relative;
}
.board2Title {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
}
.littleTitle2 {
  margin-bottom: 100px;
}
.img1 {
  position: absolute;
  width: 320px;
  height: 370px;
  left: 70px;
  bottom: 110px;
}
.img2 {
  position: absolute;
  width: 300px;
  height: 400px;
  right: 80px;
  bottom: 130px;
}
.board3 {
  width: 100%;
  height: 1000px;
  background-color: rgba(241, 238, 238, 0.288);
}
</style>