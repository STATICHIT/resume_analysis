<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-08-12 15:17:59
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-08-12 15:48:48
 * @FilePath: \resume_analysis\src\components\EmptyData.vue
 * @Description: 空白数据
-->
<template>
  <div class="box1">
    <img class="null-img" src="../assets/nulldata.png">
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type:String,
    default:()=>'暂无数据'
  }
})


</script>

<style scoped>

.box1{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
.msg{
    color: #BCD0FF;
    font-weight: bold;
    font-size: 30px;
    margin-top: -20%;
}
.null-img{
    width: 100%;
    margin-top: -10%;
}
</style>
