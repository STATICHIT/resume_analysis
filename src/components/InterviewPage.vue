<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-08-09 15:26:50
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-08-12 17:47:28
 * @FilePath: \resume_analysis\src\components\InterviewPage.vue
 * @Description: 面评
-->
<template>
  <div>
    <div class="interviewLabel"
      v-for="(item, index) in interviewList"
      :key="index"
    ><div class="pass-tag">
        <div class="status-style"></div>
       <!-- <span style="color: #67C23A;">投递人选</span>
       <el-icon style="color: #67C23A;"><ArrowRightBold /></el-icon>
       <span style="color: #67C23A;">简历推荐</span> -->
        <el-tag
      type="success"
      class="mx-1"
      effect="dark"
      size="large"
    >评价{{ index+1 }}</el-tag>
    <span class="time">{{item.createTime}}</span>
</div>
      
      <ul>
        <li v-show="item.skill!=='undefined'"><span>技能评估：</span>{{ item.skill }}</li>
        <li v-show="item.composite!=='undefined'"><span>综合评价：</span>{{ item.composite }}</li>
        <li v-show="item.summarize!=='undefined'"><span>总结与建议：</span>{{ item.summarize }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  // 父组件传递过来的值
  interviewList: {
    type: Array,
    default: () => [],
  }
});

const isPass = ref(false);
</script>

<style lang="scss" scoped>
.interviewLabel {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  margin-bottom: 20px;
  min-height: 30vh;
}
.status-style{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.warn
.pass-tag> span:first-child {
  font-weight: bold;
  font-size: 18px;
  color: #67C23A;
}
.interviewLabel > ul li::marker {
    color: #67C23A;
}
.interviewLabel > ul li {
  font-size: 15px;
  margin-bottom: 10px;
}

.interviewLabel>ul{
  padding: 15px;
}
.time{
    color: #7d7d7d;
    font-size: 15px;
    margin-left: 50px;
}
.form{
   padding: 30px 50px;
   display: flex;
   flex-direction: column;
}
.warn-text{
    display: flex;
    flex-direction: row;
}
.warn-text span{
    font-size: 18px;
    color: #6873e3;
}
.warn-text img{
    width: 20px;
    height: 20px;
}
.ok-btn{
    width: 150px;
    margin-top: 10%;
    margin-left: 39%;
    font-weight: bold;
}
.interviewLabel>ul>li>span{
  color: #7d7d7d;
}
.pass-tag{
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
}

textarea {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #f6f9fc;
  color: black;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
  border-radius: 7px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.05);
}
label{
    color: #6873e3;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
}
</style>
