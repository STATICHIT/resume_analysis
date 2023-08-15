<!-- 给人推荐简历页面 -->
<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="message">
      <img src="../assets/imgs/icon05.png" />
      <span
        style="
          color: #6873e3;
          font-weight: bold;
          font-size: 17px;
          margin-left: 40px;
        "
        >云简智能系统根据简历信息可为候选人匹配最合适的岗位</span
      >
    </div>
    <div v-for="(item, index) in jobList" :key="index">
      <div style="margin-top: 20px">
        <div style="display: flex; flex-direction: row; align-items: center;gap: 10px;">
          <span class="title">推荐岗位{{ index + 1 }}</span>
          <div class="dataLabel">匹配度：{{  parseFloat((item.score.toFixed(4) * 100).toFixed(2)) }}%</div>
        </div>
        <p class="name">{{ item.job.name }}</p>
      </div>
      <div>
        <span class="title">任职要求</span>
        <div class="ask">
          <ul>
            <li>
              <span>学历要求：</span>{{education[ item.job.educationalRequirements ]||'无要求'}}
            </li>
            <li>
              <span>专业要求：</span>{{ item.job.professionalRequirements }}
            </li>
            <li><span>性别要求：</span>{{sexStatus[ item.job.sexRequirements ]||'无要求'}}</li>
            <li>
              <span>工作年限要求：</span
              >{{ jobContent.workExperienceRequirements===-1?'无要求': jobContent.workExperienceRequirements+'年' }}年工作经验
            </li>
            <li
              style="
                white-space: pre-line;
                text-indent: -5em;
                padding-left: 5em;
              "
            >
              <span>岗位要求：</span>{{ item.job.jobRequire }}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span class="title">岗位职责</span>
        <div class="postsMsg">
          <ul>
            <li><span>职位名：</span>{{ item.job.name }}</li>
            <li
              style="
                white-space: pre-line;
                text-indent: -5em;
                padding-left: 5em;
              "
            >
              <span>岗位职责：</span>{{ item.job.responsibility }}
            </li>
          </ul>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  jobList: {
    type: Array,
    default: () => [],
  },
});

const education = {
 1:'高中',2:'大专',3:'本科' ,4:'硕士',4:'博士'
}
const sexStatus = {0: '男', 1:'女'}
</script>

<style lang="scss" scoped>
@import "/src/style/base.scss";

.name {
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
.container {
  box-sizing: border-box;
  padding: 20px;
  min-height: 30vh;
}
.container div div > span:first-child {
  font-weight: bold;
  font-size: 16px;
  margin-left: -10px;
}
.container div div > span:nth-child(2) {
  color: #626262;
  float: right;
  font-size: 13px;
}
.line {
  width: 100%;
  height: 1.5px;
  opacity: 0.7;
  border-radius: 1px;
  background-color: #6873e3;
  margin-top: 20px;
  margin-bottom: 20px;
}

.container > div > div > span {
  font-size: 25px;
  background: linear-gradient(to right, #6873e3, rgb(39, 49, 158));
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
  margin-left: -15px;
  margin-bottom: 15px;
  display: block;
}
.message {
  text-align: center;
  color: #333;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 10px;
  margin-left: 15%;
}
.message > img {
  height: 25px;
  width: 25px;
}

.tags div > span {
  color: #333;
  margin-top: 20px;
}
ul li {
  margin-bottom: 8px;
  font-size: 15px;
  color: #232323;
}
ul li::marker {
  color: $primary-color;
}

ul li > span:first-child {
  color: #7d7d7d;
  font-size: 15px;
}

ul {
  padding: 10px;
}
.title{
  font-size: 25px;
  background: linear-gradient(to right, #6873e3, rgb(39, 49, 158));
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
  margin-left: -15px;
  margin-bottom: 15px;
  display: block;
}
.dataLabel{
  padding: 5px;
  background-color: #FFA625;
  opacity: 0.5;
  border-radius: 5px;
  margin-top: -10px;
  color: #fff;
  font-weight: bold;
}
</style>
