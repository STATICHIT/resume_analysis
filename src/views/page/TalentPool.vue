<!--
 * @Author: STATICHIT
 * @Date: 2023-05-24 22:26:39
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-24 22:27:25
 * @FilePath: \resume_analysis\src\views\page\TalentPool.vue
 * @Description: 自定义
-->
<template>
  <div class="box">
    <div>
      <Search></Search>
    </div>
    <div>
      <SearchType></SearchType>
    </div>
    <div>
      <TalentList></TalentList>
    </div>
  </div>
</template>

<script setup>
import Search from "../../components/Search.vue";
import SearchType from "../test/test3.vue";
import TalentList from "../test/test2.vue";
</script>

<style lang="scss" scoped>
.box{
  background-color: rgb(242, 247, 252);
}
</style>