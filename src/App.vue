<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="top">
          <Top></Top>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div>
          <Foot></Foot>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Top from "./views/main/Top.vue"
import Body from "./views/main/Body.vue"
import Foot from "./views/main/Foot.vue"
export default({
  components: {
    Top,
    Body,
    Foot,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 导航 */
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.top{
  position:fixed;
  top:0;
  width: 100%;
  z-index: 1000;
}
</style>
