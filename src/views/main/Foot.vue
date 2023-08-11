<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 09:23:07
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-05 16:49:55
 * @FilePath: \resume_analysis\src\views\main\Foot.vue
 * @Description: 底部组件
-->
<template>
  <!-- 版权 -->
  <!-- 注意要清除浮动的影响，课程li 的父级
  因为内容li都进行浮动了，于是li脱标，无法撑开父级的高度 -->
  <div class="footer">
    <div class="wrapper">
      <div class="left">
        <div style="display: flex; flex: 1">
          <img src="../../assets/智能互联云_智能互联引擎.png" class="logoImg" />
          <h1 @click="changeCom" class="logo">云简智能</h1>
        </div>
        <p style="text-align: left">
          云简智能服务于智能化人力资源行业。<br />
          致力于通过AI技术提高招聘速度，降低时间成本，节省招聘支出。
        </p>
        <a href="">打开小程序</a>
      </div>
      <div class="right">
        <dl>
          <dt>云简智能</dt>
          <dd><a href="">关于</a></dd>
          <dd><a href="">联系我们</a></dd>
          <dd><a href="">服务条款</a></dd>
          <dd><a href="">客户服务</a></dd>
          <dd><a href="">帮助</a></dd>
        </dl>
        <dl>
          <dt>更多产品</dt>
          <dd><a href="/talentPool">人才库</a></dd>
          <dd><a href="/jobPool">简历分析</a></dd>
          <dd><a href="/self">简历去重</a></dd>
          <dd><a href="/matching">人岗匹配</a></dd>
          <dd><a href="/talentPool">人才搜索</a></dd>
          <dd><a href="/self">招聘数据中心</a></dd>
        </dl>
        <dl>
          <dt>开发者</dt>
          <dd><a href="">CX</a></dd>
          <dd><a href="">CJ</a></dd>
          <dd><a href="">LS</a></dd>
          <dd><a href="">ZWY</a></dd>
        </dl>
      </div>
    </div>
    <div class="more">
      <hr />
    </div>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
li {
  list-style: none;
}
hr {
  border: none;
  height: 1px;
  background: #3d3d3d;
}
.logoImg {
  width: 50px;
  height: 50px;
  align-self: center;
  margin-right: 10px;
}
.logo {
  line-height: 50px;
  color: #bbb9b9;
  margin-right: 40px;
}
a {
  color: #ffffff;
  text-decoration: none;
}
.footer {
  padding: 70px 250px 0 250px;
  height: 380px;
}

.footer .left {
  float: left;
}

.footer .right {
  float: right;
}

.footer .left p {
  margin: 20px 0 10px;
  color: rgb(185, 185, 185);
  font-size: 13px;
}

.footer .left a {
  display: block;
  width: 120px;
  height: 36px;
  border: 1px solid #2f2fed;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  color: #2f2fed;
}

.footer .right dt {
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 20px;
}

.footer .right dl {
  float: left;
  margin-left: 110px;
  margin-right: 20px;
  font-size: 13px;
  line-height: 21px;
  color: #ffffff;
}

.more {
  margin-top: 260px;
}
</style>