<!--
 * @Author: STATICHIT
 * @Date: 2023-06-07 20:06:01
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-07-05 20:48:25
 * @FilePath: \resume_analysis\src\views\page\AnalysisPage.vue
 * @Description: 自定义
-->
<!-- 查看相似简历页面 -->
<template>
    <div class="box">
    <button class="returnBtn" @click="returnResume(-1)">
        <el-icon><ArrowLeftBold /></el-icon>
    </button>
      <div class="page animate__animated animate__fadeIn">
        <el-button
        type="danger"
        class="goBack"
        @click="deleteResume"
        style="position: absolute;right: 40px;top: 0px;"
        ><el-icon><DeleteFilled /></el-icon>
        </el-button
      >
        <div class="avatar">
          <img src="../../assets/avatar.png" />
          <div>
            <div class="user-tip">
              <h2>唐奇</h2>
              <el-tooltip
                v-for="item in state.lights"
                :key="item"
                placement="top"
              >
                <template #content> 简历亮点 </template>
                <el-button class="tooltip">{{ item }}</el-button>
              </el-tooltip>
              <el-tooltip v-for="item in state.warns" :key="item" placement="top">
                <template #content> 简历风险点 </template>
                <el-button class="tag">{{ item }}</el-button>
              </el-tooltip>
            </div>
            <div class="user-msg">
              <el-icon><Iphone /></el-icon>
              <span>17742964678</span>
              <el-icon><Message /></el-icon>
              <span>2390864551@qq.com</span>
              <el-icon><Briefcase /></el-icon>
              <span>0年工作经验</span>
              <img src="..\..\assets\student-icon.png" />
              <span>本科</span>
            </div>
          </div>
        </div>
            <resume-page></resume-page>
      </div>

      <button class="returnBtn1" @click="returnResume(1)">
        <el-icon><ArrowRightBold /></el-icon>
    </button>
      
    </div>
  </template>
  
  <script setup>
  import ResumePageVue from "@/components/ResumePage.vue";
  import ResumePage from "@/components/ResumePage.vue";
  import ResumePortraitVue from "@/components/ResumePortrait.vue";
  import animated from "animate.css";
  import { reactive } from "vue";
  import router from "@/router";
  import { useRoute } from "vue-router";
  import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessageBox } from "element-plus";
  
  
  const route = useRoute()
  const query =  route.query
  const id = query['id']
  
  /* 返回json数据 */
  const state = reactive({
       lights:['熟练掌握英语','技术达标'],
       warns:['本科学历异常'],
       selectTime:1,
       selectItem:[
        {
          value:1,
          name:"简历推荐"
        },
        {
          value:2,
          name:"笔试阶段",
        },
        {
          value:3,
          name:"面试阶段"
        },
        {
          value:4,
          name:'轮岗'
        },
        {
          value:5,
          name:'offer阶段'
        },
        {
          value:6,
          name:'入职'
        },
        {
          value:7,
          name:'已转正'
        },
        {
          value:8,
          name:'淘汰'
        }
       ]
      //  state:{
      //    id:'', 
      //    name:'黎芸贵',
       
      //    dateOfBirth:'1984.04.06', 
      //    graduationInstitution:'华中师范大学', 
      //    sex:'', age:'',
      //     phone:'13800138000',
      //      mailBox:'service@500d.me',
      //       education:'硕士', major:'市场营销', 
      //       expectedJob:'市场总监-专注品牌方', 
      //       practiceExperiences:'远亚集团品牌升级发布会\n\uf06c 集团全新品牌logo及VI上线，在多渠道进行了传播；\n\uf06c 企业VIP客户群体逾60人，结合了线上发布、线下体验；\n\uf06c 后续媒体报道持续升温，子品牌结合明星代言人制造话题营销，为期3周。\n翔震商业模式发布会\n\uf06c 整场活动以会议+洽谈双重模式进行，首日以介绍翔震内部平台资源优势，政府背\n景优势等为主，一对多推介会进行推广普及；\n\uf06c 现场签署地方合作意向书，如：新疆、江西、浙江等优秀企业商户；\n\uf06c 以中国的波尔多为宣传点，主推旗下新疆大型项目，制造营销、品牌热点。\n田海投资控股集团6A自媒体生态圈建设\n\uf06c 本项目重构了公司现有微信企业号的功能与架构；\n\uf06c 提高公众号的关注粉丝量的同时，对于有客户进行统一宣传，统一管理。', 
      //       workYears:'', 
      //       workExperiences:[WorkExperience(startTime:'2016.08', endTime:'至今', jobName:{'text': '副总监', 'start': 18},
      //        companyName:{'text': '田海控股集团', 'start': 11}, 
      //        description:'\uf06c 负责协助集团旗下事业部开展各项工作，制定品牌传播方案；\n\uf06c 结合集团与事业部发展，制定营销策略、广告策略，并组织推进执行；\n\uf06c 制定和执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析与撰写报告；\n\uf06c 研究行业发展动态，定期进行市场调查,为产品更新提供建议。'), 
      //        WorkExperience(startTime:'2015.08', endTime:'2016.08', jobName:{'text': '市场及运营总监', 'start': 179}, companyName:{'text': '翔震有限公司', 'start': 172}, description:'\uf06c 根据公司发展情况进行战略调整，配合前端销售部门搭建销售渠道；\n\uf06c 研究行业发展动态，定期进行市场调查,为产品更新提供建议。'), WorkExperience(startTime:'2014.08', endTime:'2015.08', jobName:{'text': '市场副总监', 'start': 273}, companyName:{'text': '远亚俱乐部', 'start': 267}, description:'\uf06c 负责事业部产品对外推广和宣传，制定各种整合营销的活动；\n\uf06c 执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析撰写报告；\n\uf06c 向市场总监提供营销支持，并协助相关的公关事宜。')], skillsCertificate:'普通话一级甲等\n通过全国计算机二级考试，熟练运用office相关软件。\n熟练使用绘声绘色软件，剪辑过各种类型的电影及班级视频。\n大学英语四/六级（CET-4/6），良好听说读写能力，快速浏览英语专业书籍。', awardsHonors:'2013年 新长城中国地质大学自强社“优秀社员”\n2012年 三下乡”社会实践活动“优秀学生”\n2011年 中国地质大学学生田径运动会10人立定跳远团体赛第三名\n2010年 学生军事技能训练“优秀学员”\n2009年 中国地质大学盼盼杯烘焙食品创意大赛优秀奖\n2008年 西部高校大学生主题征文一等奖\n2008年 中国地质大学“点燃川大梦 畅享我青春”微博文征集大赛二等奖'},
  })
  function handleCommand(command) {
        state.selectItem = command;
   }

   /* 进行翻页操作 */
   const returnResume = (num) => {
     
   }

   /* 删除简历 */
  const deleteResume = () => {
    ElMessageBox.confirm(`确定删除该简历吗?`)
    .then(() => {
        /* 删除后翻页 */
        returnResume(1)
    })
    .catch(() => {});
  }
  </script>
  
  <style lang="scss">
  @import "../../style/base.scss";
  .box {
    padding: 60px;
    background-color: #f3fcfa;
  }

  .goBack {
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
    position: relative;
    flex-direction: column;
  }
  .tag {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
    margin-top: 7px;
    height: 22px;
    font-size: 13px;
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
  .avatar > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .user-tip {
    display: flex;
    flex-direction: row;
  }
  .user-tip > h2 {
    margin-right: 30px;
  }
  .user-msg {
    color: #848484;
    font-size: 14px;
  }
  .user-msg img {
    height: 10px;
  }
  .tooltip {
    margin-top: 7px;
    height: 22px;
    font-size: 13px;
    background-color: rgb(229, 245, 255);
    color: rgb(51, 112, 255);
    border: 0;
  }
  .user-msg :deep(.el-icon) {
    color: #929292;
  }
  .user-msg span {
    margin-right: 20px;
  }
  .el-dropdown{
    margin-left: 25%;
    margin-bottom: 1%;
    background-color: #7060EE;
    color: #7060EE;
  }
  
  .selector{
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .returnBtn{
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 0;
    background-color: #fff;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    &:hover{
        background: #F0F0F0;
    }
    position: fixed;
    top: 49%;
    left: 5%;
  }
  .returnBtn1{
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 0;
    background-color: #fff;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    &:hover{
        background: #F0F0F0;
    }
    position: fixed;
    top: 49%;
    right: 5%;
  }
  </style>
  