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
          <div class="dataLabel">匹配度：{{ item.score }}%</div>
        </div>
        <p class="name">{{ item.job.name }}</p>
      </div>
      <div>
        <span class="title">任职要求</span>
        <div class="ask">
          <ul>
            <li>
              <span>学历要求：</span>{{ item.job.educationalRequirements }}
            </li>
            <li>
              <span>专业要求：</span>{{ item.job.professionalRequirements }}
            </li>
            <li><span>性别要求：</span>{{ item.job.sexRequirements }}</li>
            <li>
              <span>工作年限要求：</span
              >{{ item.job.workExperienceRequirements }}年工作经验
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
  jobContent: {
    type: Array,
    default: () => [],
  },
  jobList: {
    type: Array,
    default: () => [
      {
        job: {
          //岗位
          id: 0, //岗位ID
          userId: 0, //用户ID
          name: "市场营销专员", //岗位名
          responsibility:
            "进行市场调研和竞争分析，提供市场情报和洞察；\n制定和执行市场推广计划，包括线上和线下渠道；\n策划和组织市场活动，提高品牌知名度和产品销售量；\n维护客户关系，提供优质的客户服务；\n分析市场数据和结果，对市场策略进行调整和优化。", //岗位职责
          jobRequire:
            "具备市场营销或相关领域的学士学位；\n具备良好的沟通和协调能力；\n熟悉市场调研和分析方法；\n具备创新思维和问题解决能力；\n具备团队合作精神和自我驱动力。", //岗位要求
          professionalLabel: "", //岗位要求标签集合
          educationalRequirements: "无要求", //学历要求
          professionalRequirements: "市场营销", //专业要求
          sexRequirements: "无要求", //性别要求
          workExperienceRequirements: 3, //工作经验要求
          createTime: "", //创建时间
          updateTime: "", //更新时间
        },
        skills: [
          //岗位要求技能标签
          "",
        ],
        score: 88.0, //得分
      },
      {
        job: {
          //岗位
          id: 0, //岗位ID
          userId: 0, //用户ID
          name: "运营经理", //岗位名
          responsibility:
            "管理和协调日常运营活动，确保业务顺利运行；\n设计和优化业务流程，提高效率和质量；\n监控和分析运营数据，提供运营报告和建议；\n管理团队，进行绩效评估和培训；\n协调各部门合作，实现运营目标。", //岗位职责
          jobRequire:
            "具备管理或相关领域的学士学位；\n具备团队管理和领导能力；\n熟悉业务运营和流程管理；\n具备数据分析和决策能力；\n具备协调和解决问题的能力。", //岗位要求
          professionalLabel: "", //岗位要求标签集合
          educationalRequirements: "无要求", //学历要求
          professionalRequirements: "无要求", //专业要求
          sexRequirements: "无要求", //性别要求
          workExperienceRequirements: 3, //工作经验要求
          createTime: "", //创建时间
          updateTime: "", //更新时间
        },
        skills: [
          //岗位要求技能标签
          "",
        ],
        score: 75.0, //得分
      },
    ],
  },
});
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
