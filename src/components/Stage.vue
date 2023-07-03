<!--
 * @Author: STATICHIT
 * @Date: 2023-07-02 19:13:39
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-03 10:19:01
 * @FilePath: \resume_analysis\src\components\Stage.vue
 * @Description: 状态条件选择栏
-->
<template>
  <div>
    <div style="display: inline-block">
      <div class="scroll selectBox">
        <div
          v-for="(item, i) in status"
          :key="i"
          style="display: inline-block"
          @click="select(item)"
        >
          <div
            class="items"
            :style="
              item.name == curStatus
                ? { border: '2px solid' + ' ' + item.color }
                : ''
            "
          >
            <b class="name">{{ item.name }}</b>
            <div class="cnt" :style="{ 'background-color': item.color }">
              {{ item.cnt }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="action">
      <button class="mybutton" @click="manage">
        <i
          ><el-icon size="18px"><Setting /></el-icon></i
        >管理
      </button>
    </div>
    <el-drawer v-model="drawer" direction="rtl">
      <template #default>
        <dragProcess></dragProcess>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dragProcess from "../components/DragProcess.vue";
const status = ref([
  { id: 1, name: "投递人选", cnt: 20, color: "#5e52dd" },
  { id: 2, name: "笔试阶段", cnt: 10, color: "#cf7098" },
  { id: 3, name: "面试阶段", cnt: 8, color: "#ff654e" },
  { id: 4, name: "候选人阶段", cnt: 4, color: "#ee4a7e" },
  { id: 5, name: "offer阶段", cnt: 3, color: "#eeaf20" },
  { id: 6, name: "入职", cnt: 2, color: "#48a7f3" },
  { id: 7, name: "已转正", cnt: 3, color: "#b7c3ff" },
  { id: 8, name: "淘汰", cnt: 18, color: "#d4d4d4" },
]);
const curStatus = ref("投递人选");
let select = (item) => {
  //点击之后加上边框颜色
  curStatus.value = item.name;
  //进行筛选回选结果
};
const drawer = ref(false);
let manage = () => {
  drawer.value = true;
};
</script>

<style lang="scss" scoped>
.items {
  width: 200px;
  height: 45px;
  padding: 0 15px;
  line-height: 45px;
  display: inline-block;
  background-color: #fff;
  border: 2px solid none;
  border-radius: 10px;
  text-align: left;
  margin-right: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
  color: black;
}
.items:hover {
  border-color: #5e52dd;
  box-shadow: rgba(0, 0, 0, 0.384) 0px 4px 9px;
}
.scroll {
  float: left;
  width: 1100px;
  text-align: center;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
.name {
  cursor: pointer;
}
.cnt {
  width: 30px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  display: inline;
  float: right;
  font-size: 12px;
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
.action {
  float: right;
  height: 80px;
  line-height: 80px;
}
.mybutton {
  cursor: pointer;
  width: 100px;
  height: 60px;
  line-height: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
}
.selectBox::-webkit-scrollbar {
  height: 6px;
}

/* 滚动槽 */
.selectBox::-webkit-scrollbar-track {
  border-radius: 20px;
}

/* 滚动条滑块 */
.selectBox::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: rgba(144, 147, 153, 0.3);
  -webkit-transition: 0.3s background-color;
  transition: 0.3s background-color;
}

</style>