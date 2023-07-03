<!--
 * @Author: STATICHIT
 * @Date: 2023-05-30 14:31:11
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-02 20:15:38
 * @FilePath: \resume_analysis\src\views\test\test4.vue
 * @Description: 自定义
-->
<template>
  <div style="padding: 200px 400px">
    <el-button type="primary" @click="open"> 弹出 </el-button>
    <el-drawer v-model="drawer1" direction="rtl">
      <template #header>
        <h4>流程管理</h4>
      </template>
      <template #default>
        <dragProcess></dragProcess>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dragProcess from "../../components/DragProcess.vue";
const drawer1 = ref(false);
let open = () => {
  drawer1.value = true;
};
</script>

<style lang="scss" scoped>
</style>
