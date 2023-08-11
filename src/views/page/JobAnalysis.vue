<!--
 * @Author: STATICHIT
 * @Date: 2023-05-30 18:09:13
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-11 20:04:34
 * @FilePath: \resume_analysis\src\views\page\JobAnalysis.vue
 * @Description: 岗位分析入口
-->
<template>
  <div class="box cur father">
    <!-- <Loading class="load load"></Loading> -->
    <br />
    <div class="bigTitle">岗位分析</div>
    <div class="board1">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="文件录入" name="first">
          <Upload></Upload>
        </el-tab-pane>
        <el-tab-pane label="手动录入" name="second">
          <div style="padding: 20px">
            <label for="bio" style="text-align: left">岗位描述:</label>
            <textarea
              id="bio"
              name="user_bio"
              class="text"
              placeholder="产品运营
岗位职责
1.负责产品上线前后的线上、线下的运营方案和推广工作，协助项目负责人对接市场、产品开发等，完成个项目目标；
2.负责产品运营中与线下的各种合作，配合完成商务推广，实施项目评估和监控，提升用户活跃度和忠诚度；
3.负责研究行业竞争动态，定期拜访客户，维护重要客户关系发现客户的需求，引导客户的业务需求，根据自身产品制定产品营销策略，达成既定目标；
4.负责分析和挖掘产品运营数据、用户行为数据等重要价值信息
5.负责跟进和整理产品用户反馈，协同产品经理提出产品迭代方案。
任职要求：
1.2年及以上产品运营经验；
2.主动性强，逻辑清晰，沟通能力强，能独立负责和落地运营项目能调动资源为运营目标服务；
3.有较强数据分析能力、数据敏感性强。"
            ></textarea>
            <button @click="analysis">开始分析</button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import Upload from "../../components/Upload2.vue";
import Loading from "../../components/Loading.vue";
import { ref } from "vue";
import router from "../../router";
const activeName = ref("first");
let analysis = () => {
  router.push({ path: "/analysisPosts" });
};
</script>

<style lang="scss" scoped>
.cur {
  background: url("../../assets/imgs/波纹背景.png") no-repeat;
  background-size: 100%;
  background-position-y: bottom;
}
.father {
  position: relative;
}
.load {
  position: absolute;
  top: 0;
  left: 0;
}
.box {
  background-color: #ffffff;
  height: 100%;
  padding: 100px;
}
.bigTitle {
  margin-bottom: 60px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}
.board1 {
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  width: 760px;
  height: 100%;
  border-radius: 20px;
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
  color: #454749;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}

.text {
  height: 400px;
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