<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 09:26:55
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-02 11:11:15
 * @FilePath: \resume_analysis\src\components\DropDown.vue
 * @Description: 悬浮下拉框组件
-->

<template>
  <el-dropdown>
    <span class="area">
      {{ name }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <img style="object-fit: scale-down" :src="idView" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
export default {
  name: "dropDown",
  data() {
    return {
      name: "我是一个悬浮下拉框",
      idView: require("../assets/01.jpg"),
    };
  },
  methods: {},
};
</script>
<style>
.area{
  margin-top: 19px;
  font-size:13px;
  color: #cfcfcf;
}
</style>
