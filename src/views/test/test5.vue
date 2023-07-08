<!--
 * @Author: STATICHIT
 * @Date: 2023-06-11 20:46:15
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-08 16:07:39
 * @FilePath: \resume_analysis\src\views\test\test5.vue
 * @Description: 岗位批量上传组件
-->
<template>
  <div style="padding: 200px 400px">
    <div class="container">
      {{ upload_file || "导入" }}
      <input
        type="file"
        accept=".xls,.xlsx"
        class="upload_file"
        @change="readExcel"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";

const upload_file = ref("");

function readExcel(e) {
  const files = e.target.files;
  if (files.length <= 0) {
    return false;
  } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
    showMessage("上传格式不正确，请上传xls或者xlsx格式", "warning");
    return false;
  } else {
    upload_file.value = files[0].name;
  }
  const file = files[0];
  // console.log("!!!!",file)
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    console.log(jsonData);
  };
  reader.readAsArrayBuffer(file);
}

function showMessage(message, type) {
  console.warn(message);
}
</script>
<style lang="scss" scoped>
.container {
  border: none;
  border-radius: 4px;
  background-color: #409eff;
  height: 40px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  min-width: 80px;
  *zoom: 1;
}

.upload_file {
  font-size: 20px;
  opacity: 0;
  position: absolute;
  filter: alpha(opacity=0);
  width: 60px;
}
</style>