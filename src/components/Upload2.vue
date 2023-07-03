<!--
 * @Author: STATICHIT
 * @Date: 2023-06-11 20:46:15
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-03 10:18:37
 * @FilePath: \resume_analysis\src\components\Upload2.vue
 * @Description: 岗位批量上传组件
-->

<template>
  <div>
    <div class="myUpload">
      <el-upload
        class="upload-demo"
        drag
        :before-upload="beforeUpload"
        multiple
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          点击 或 拖拽<br />
          即可上传简历文件
        </div>
        <template #tip>
          <div class="el-upload__tip">
            请上传exacl表格,由三列数据构成，分别是：岗位名,岗位描述,岗位要求
          </div>
        </template>
      </el-upload>
      <br />
      <input
        type="file"
        id="fileInput"
        class="fileInput"
        multiple
        v-on:change="handleFileSelect($event)"
      />
      <br />
      <el-table
        :data="tableData"
        style="width: 100%; margin: 10px 10px"
        empty-text="没有文件"
      >
        <el-table-column label="文件名">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="大小">
          <template v-slot="scope">
            <span>{{ scope.row.size }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template v-slot="scope">
            <span v-if="scope.row.status === -1">正在准备上传</span
            ><!--正在计算MD5-->
            <span v-if="scope.row.status === 1">已准备上传</span
            ><!--MD5计算完成，准备上传-->
            <span v-if="scope.row.status === 4" style="color: brown"
              >上传失败</span
            >
            <span v-if="scope.row.status === 5" style="color: chartreuse"
              >已上传</span
            >
            <el-progress
              v-if="scope.row.status === 2"
              :text-inside="true"
              :stroke-width="20"
              :percentage="scope.row.percent"
            ></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button type="danger" @click="deleteFile(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 高级选项 -->
    <div>
      <div class="highSettingdetail">
        <el-switch
          v-model="value2"
          class="ml-2"
          style="--el-switch-on-color: #6671e3; --el-switch-off-color: #d7daf8"
        />
        上传成功自动纳入岗位库
      </div>
    </div>
    <br />
    <button>开始分析</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value2 = ref(true);
</script>

<style lang="scss" scoped>
.fileInput {
  display: none;
}
.littleTitle3 {
  font-size: 13px;
  display: inline-block;
  width: 120px;
  font-weight: bold;
}
.radio-group {
  display: inline-block;
  margin-left: 70px;
}
.btnGroup {
  border-top: 1px solid rgba(189, 187, 187, 0.452);
  padding: 15px 30px;
  text-align: left;
}
.highSettingdetail {
  margin-left: -450px;
}
button {
  background: #7a83e7;
  border: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 35px;
  padding: 0px 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 200;
  width: 180px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background: #444fcf;
}
</style>