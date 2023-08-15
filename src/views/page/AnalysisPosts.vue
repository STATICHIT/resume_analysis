<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-07-11 20:44:31
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-08-15 15:34:24
 * @FilePath: \resume_analysis\src\views\page\AnalysisPosts.vue
 * @Description: 职位解析页面
-->
<template>
    <div class="box">
      <div class="page animate__animated animate__fadeIn">
        <div class="avatar">
          <img src="../../assets/imgs/icon06.png" />
          <div>
            <div class="user-tip">
              <h2>{{ jobContent.name }}</h2>
            </div>
            <div class="user-msg">
              <el-icon><Avatar /></el-icon>
              <span>性别&nbsp;{{sexStatus[ jobContent.sexRequirements ]}}</span>
              <el-icon><Briefcase /></el-icon>
              <span>工作经验&nbsp;{{ jobContent.workExperienceRequirements }}年</span>
              <img src="..\..\assets\student-icon.png" />
              <span>学历&nbsp;{{education[ jobContent.educationalRequirements ]}}</span>
            </div>
          </div>
        </div>
        <div v-show="isVisited" class="container">
    <el-button type="success" class="return" @click="lookJson">查看返回数据</el-button>
    <!-- <div>
      <span class="title">公司信息</span>
      <ul class="ul-list">
        <li><span>公司名：</span>腾讯科技</li>
        <li><span>公司介绍：</span>腾讯科技</li>
        <li><span>公司行业：</span>互联网/IT</li>
      </ul>
    </div> -->
    <!-- <div>
      <span class="title">职位描述</span>
      <div class="education">
        <ul>
          <li><span>职位名：</span>{{ jobContent.name }}</li>
          <li><span>职位职能：</span>IT/互联网-后端开发-算法</li>
          <li><span>职位属性：</span>全职</li>
          <li><span>职位等级：</span>2(普通)</li>
          <li><span>部门：</span>软件</li>
          <li><span>招聘人数：</span>1人</li>
          <li><span>工作地点：</span></li>
          <li><span>详细地点：</span></li>  
        </ul>
    </div>
  </div> -->
  <div>
      <span class="title">任职要求</span>
      <div class="ask">
        <ul>
          <li><span>学历要求：</span>{{ education[jobContent.educationalRequirements] ||'无要求'}}</li>
          <!-- <li><span>学校要求：</span>不限</li> -->
          <li><span>专业要求：</span>{{jobContent.professionalRequirements}}</li>
          <!-- <li><span>职位等级：</span>2(普通)</li> -->
          <!-- <li><span>年龄要求：</span>不限</li> -->
          <li><span>性别要求：</span>{{ sexStatus[jobContent.sexRequirements]||'无要求' }}</li>
          <li><span>工作年限要求：</span>{{ jobContent.workExperienceRequirements }}年</li>
          <!-- <li><span></span>3、熟练掌握图像处理算法原理 精通OpenCV 熟悉Halcon等视觉算法库及工具 4、精通C++/C#编程语言 5、对图像识别算法有深刻理解及应用经验优先 熟悉主流的机器学习算法 能够熟练使用深度学习TensorFlow、Caffe等深度学习框架</li>   -->
          <!-- <li><span>软性技能要求：</span>沟通能力、团队合作</li> -->
          <li style="white-space: pre-line;text-indent: -5em; padding-left: 5em;"><span>岗位要求：</span>{{ jobContent.jobRequire }}</li>
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
            v-for="item in JSON.parse(jobContent.professionalLabel)"
            :key="item"
            class="btn"
            plain
            >{{ item }}</el-button
          >
        </div>
      </div>
      <!-- <div>
        <span>职业标签</span>
        <div>
          <el-button
            type="success"
            v-for="item in state.tags.education"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div>
      <div>
        <span>教育标签</span>
        <div>
          <el-button
            type="danger"
            v-for="item in state.tags.professional"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div>
      <div>
        <span>技能标签</span>
        <div>
          <el-button
            v-for="item in state.tags.others"
            color="#626aef"
            :key="item"
            class="btn"
            plain
            >{{ item.tag }}</el-button
          >
        </div>
      </div> -->
    </div>
    <!-- <div>
         <span class="title">薪资福利</span>
      <div class="salary">
        <ul>
          <li><span>福利待遇：</span>机器学习工程师</li>
          <li><span>薪资水平：</span>IT/互联网-后端开发-算法</li>
        </ul>
    </div>
    </div> -->
      </div>
      <div v-show="!isVisited">
    <div class="codeBox">
      <el-button type="success" class="return" @click="lookJson">查看返回结果</el-button>
      <pre v-html="syntaxHighlight(jobContent)"></pre>
    </div>
  </div>
    </div>
    <el-button color="#626aef" size="large" class="goBack" style="font-weight:bold">返回文件上传页面</el-button>
</div>
  </template>
  
  <script setup>
  import router from "@/router";
import animated from "animate.css";
  import { stringify } from "qs";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
console.log(route)
const jobContent = JSON.parse(route.query.job)

console.log(route.query.job)

const isVisited = ref(true)

// const education = {
//  1:'大专',2:'本科',3:'硕士' ,4:'博士'
// }
const education = {
 1:'高中',2:'大专',3:'本科' ,4:'硕士',4:'博士'
}
const sexStatus = {0: '男', 1:'女'}

const lookJson = () => {
    isVisited.value=!isVisited.value;
}




/* json数据格式化 */
function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
  
  
  </script>
  
  <style lang="scss" scoped>
  @import '/src/style/base.scss';
  
  .box {
    padding: 60px;
    background-color: #f3fcfa;
  }

  .goBack{
    font-weight: bold;
    margin-left: 48%;
    margin-top: 20px;
  }
  .page {
    width: 57%;
    padding: 30px 20px;
    margin-left: 25%;
    height: auto;
    box-shadow: 14px 12px 24px -6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-height: 60vh;
  }

  .avatar {
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 20px;
  }
  .avatar > img {
    height: 60px;
  }
  .avatar>div{
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
  
  .user-tip {
    display: flex;
    flex-direction: row;
  }
  .user-tip>h2{
      margin-right: 30px;
  }
  .user-msg{
      color: #848484;
      font-size: 14px;
  }
  .btn {
  border-radius: 2rem;
  margin: 0;
  margin-right: 20px;
  // margin-top: 20px;
  margin-bottom: 20px;
}
  .user-msg img{
      height: 10px;
  }
  .user-msg :deep(.el-icon) {
    color: #929292;
  }
  .user-msg span{
      margin-right: 20px;
  }
  
.container{
    box-sizing: border-box;
    padding: 20px;
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
.tags div > span {
  color: #333;
  margin-top: 20px;
}

.codeBox{
    background: #32325d;
    color: #e6ebf1;
    border-radius: 13px;
    padding: 30px 20px;
    font-size: 12px;
    margin-top: 30px;
    line-height: 1.5;
    min-height: 60vh;
}
.return{
  float: right;
  font-weight: bold;
}
ul li{
  margin-bottom: 15px;
  font-size: 15px;
  color: #232323;
}
ul li::marker{                          
  color: $primary-color;
}

.ul-list{
  display: flex;
  flex-wrap: wrap;
  width: 600px;
}
.ul-list li{
  width: 50%;
}

ul li>span:first-child{
  color: #7d7d7d;
  font-size: 15px
};


ul{
  padding: 10px;
}
.project{
  padding: 10px;
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

pre {
    font-family: monospace;
    white-space: pre;
}
  </style>
  