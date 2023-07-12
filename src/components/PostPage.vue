<!-- 给人推荐简历页面 -->
<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="message">
        <img src="../assets/imgs/icon05.png">
        <span style="color: #333;font-size: 17px;margin-left: 10px;">云简智能系统根据简历信息可为候选人匹配最合适的岗位</span>
    </div>
    <div>
      <span class="title">推荐岗位</span>
      <p class="name">{{ jobContent.name }}机器学习工程师</p>
  </div>
    <div>
      <span class="title">任职要求</span>
      <div class="ask">
        <ul>
          <li><span>学历要求：</span>{{ jobContent.educationalRequirements }}</li>
          <li><span>专业要求：</span>{{jobContent.professionalRequirements}}</li>
          <li><span>性别要求：</span>{{ jobContent.sexRequirements }}</li>
          <li><span>工作年限要求：</span>{{ jobContent.workExperienceRequirements }}</li>
          <li style="white-space: pre-line;text-indent: -5em; padding-left: 5em;"><span>岗位要求：</span>{{ jobContent.requirement }}</li>
        </ul>
    </div>
  </div>
  <div>
  <span class="title">岗位职责</span>
      <div class="postsMsg">
        <ul>
          <li><span>职位名：</span>{{ jobContent.name }}</li>
          <li style="white-space: pre-line;text-indent: -5em; padding-left: 5em;"><span>岗位职责：</span>{{ jobContent.responsibility }}</li>
        </ul>
    </div></div>
    <div class="tags">
      <span class="title">候选人标签</span>
      <div>
        <div style="margin-top: 40px;">
          <el-button
            type="primary"
            v-for="item in jobContent.professionalLabel"
            :key="item"
            class="btn"
            plain
            >{{ item }}</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>



const props = defineProps({
    jobContent:{
        type:Array,
        default:()=>[]
    }
})

</script>

<style lang="scss" scoped>
@import '/src/style/base.scss';

.name{
    font-weight: bold;
    margin-bottom: 20px;
}
.page {
    padding: 30px 20px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .container{
    box-sizing: border-box;
    padding: 20px;
}
.container div div>span:first-child{
  font-weight: bold;
  font-size: 16px;
  margin-left: -10px;
}
.container div div > span:nth-child(2) {
  color: #626262;
  float: right;
  font-size: 13px;
}
.container>div>span{
    font-size: 25px;
    background: linear-gradient(to right, #6873E3, rgb(39, 49, 158));
    -webkit-background-clip: text;
    font-weight: bold;
    color: transparent;
    margin-left: -15px;
    margin-bottom: 15px;
    display: block;
}
.message{
    text-align: center;
    color: #333;
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-bottom: 10px;
    margin-left: 15%;
}
.message>img{
    height: 25px;
    width:25px
}

  .tags div > span {
  color: #333;
  margin-top: 20px;
}
ul li{
  margin-bottom: 15px;
  font-size: 15px;
  color: #232323;
}
ul li::marker{                          
  color: $primary-color;
}

ul li>span:first-child{
  color: #7d7d7d;
  font-size: 15px
};


ul{
  padding: 10px;
}
</style>