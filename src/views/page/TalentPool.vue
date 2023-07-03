<!--
 * @Author: STATICHIT
 * @Date: 2023-05-24 22:26:39
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-02 22:08:54
 * @FilePath: \resume_analysis\src\views\page\TalentPool.vue
 * @Description: 自定义
-->
<template>
  <div class="box">
    <div class="board1">
      <h1>云简人才库</h1>
      <br />
      <p>
        帮助企业对现有人才库进行有效管理，实时监控招聘流程，制定更优的招聘策略。<br />
        基于大数据及AI简历解析技术，高效对简历库候选人进行多维度的筛选，搜索与评分。<br />
        用最灵活精准的搜索引擎来为用户打造最符合要求的候选人列表。
      </p>
      <div>
        <Search></Search>
      </div>
    </div>
    <div>
      <SearchType></SearchType>
    </div>
    <div class="stage">
      <Stage></Stage>
    </div>
    <div>
      <TalentList></TalentList>
    </div>
  </div>
</template>

<script setup>
import Search from "../../components/Search.vue";
import Stage from "../../components/Stage.vue";
import SearchType from "../../components/SearchType.vue";
import TalentList from "../../components/TalentList.vue";
</script>

<style lang="scss" scoped>
.box {
  background-color: rgb(242, 247, 252);
}
.board1 {
  background-image: url("../../assets/imgs/10.png");
  text-align: center;
  width: 100%;
  height: 270px;
  padding: 50px 0 0 0;
}
.stage{
  margin: 0 auto;
  width: 1200px;
  height: 70px;
}
</style>