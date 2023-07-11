<!--
 * @Author: STATICHIT
 * @Date: 2023-05-30 14:31:11
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-11 11:01:41
 * @FilePath: \resume_analysis\src\views\test\test4.vue
 * @Description: 自定义
-->

<template>
  <div style="padding: 200px 400px">
    <div style="display: flex; align-items: center">
      <el-popover placement="right" :width="260" trigger="click">
        <template #reference>
          <el-button style="margin-right: 16px">Click to activate</el-button>
        </template>
        <div style="padding: 8px">
          <div class="col-1">
            <li class="flex-container editcom">
              <b :style="{ color: begincolor }">●</b>
              <input type="text" class="changeinput" v-model="addelement" />
              <el-color-picker class="picker" v-model="begincolor" />
            </li>
          </div>
          <div>
            <span
              style="
                float: left;
                color: red;
                margin-left: 10px;
                margin-top:8px;
              "
              ><el-icon style="margin-right:6px"><Delete /></el-icon> <span>删除</span> </span
            >
          </div>
          <button
            style="
              float: right;
              color: #776be9;
              border: 1px solid #6d59ec;
              border-radius: 5px;
              background-color: #edebfe;
              width: 50px;
              height: 30px;
              margin-right: 10px;
            "
          >
            提交
          </button>
        </div>
      </el-popover>
    </div>
    <button @click="fun1">test</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import apiFun from "../../utils/api";
const addelement = ref("业务面试");
function fun1(){
  apiFun.test.test().then((res)=>{
    console.log(res)
  })
}
</script>
<style lang="scss" scoped>

.editcom {
  border: 2px solid rgba(212, 208, 208, 0.452);
}

.changeinput {
  display: inline-block;
  outline: none;
  width: 90%;
  border: none;
  border-radius: 8px;
  padding: 2px 10px;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
<!-- <template>
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
</style> -->
