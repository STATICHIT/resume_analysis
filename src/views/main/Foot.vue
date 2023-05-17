<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 09:23:07
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-17 21:29:39
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
        <a href="">下载APP</a>
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
          <dd><a href="">人才库</a></dd>
          <dd><a href="">简历分析</a></dd>
          <dd><a href="">简历去重</a></dd>
          <dd><a href="">人岗匹配</a></dd>
          <dd><a href="">人才搜索</a></dd>
          <dd><a href="">候选人画像</a></dd>
        </dl>
        <dl>
          <dt>开发者介绍</dt>
          <dd><a href="">CX</a></dd>
          <dd><a href="">CJ</a></dd>
          <dd><a href="">LS</a></dd>
          <dd><a href="">ZWY</a></dd>
        </dl>
      </div>
    </div>
    <div class="more">
      <hr />
      <div class="tip">
        <a target="_blank" href="http://beian.miit.gov.cn/"
          >津ICP备18000836号</a
        >
        | © Copyright 2022 ke.com版权所有 |
        <a
          target="_blank"
          href="//file.ljcdn.com/bigc-file2cdn/Mensa/1585732230759.pdf"
          >ICP证</a
        >
        |
        <a
          target="_blank"
          href="https://www.ke.com/zhuanti/commonProtocol?id=1dc38816524dffa9da7949856540d168"
          >平台知识产权保护</a
        >
      </div>
    </div>
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

.tip {
  width: 60%;
  padding-top: 10px;
  color: #a6a6a6;
  margin-left: 40%;
  font-size: 15px;
}
a {
  color: #ffffff;
  text-decoration: none;
}
.tip a {
  color: #a6a6a6;
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