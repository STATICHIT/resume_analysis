<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 11:33:17
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-05-29 22:24:08
 * @FilePath: \resume_analysis\src\views\Main.vue
 * @Description: 客户端布局底页
-->
<template>
  <div class="common-layout">
    <el-container>
      <div class="top">
        <Top></Top>
      </div>
      <div class="body">
        <router-view></router-view>
      </div>
      <el-footer class="foot">
        <div>
          <Foot></Foot>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Top from "./main/Top.vue";
import Body from "./main/Body.vue";
import Foot from "./main/Foot.vue";
export default {
  components: {
    Top,
    Body,
    Foot,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  --el-header-padding: 0px;
}
.top {
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 1000;
}
.body {
  margin-top: 40px;
}

.foot {
  background-color: black;
  height: 100%;
}
</style>
