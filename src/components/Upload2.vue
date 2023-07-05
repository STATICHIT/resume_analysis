<!--
 * @Author: STATICHIT
 * @Date: 2023-06-11 20:46:15
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-03 11:55:53
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
            请上传exacl表格,由三列数据构成，分别是：岗位名、岗位描述、岗位要求。
          </div>
        </template>
      </el-upload>
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
            <span v-if="scope.row.status === 1">已准备上传</span>
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
          v-model="autoadd"
          class="ml-2"
          style="--el-switch-on-color: #6671e3; --el-switch-off-color: #d7daf8"
        />
        上传成功自动纳入岗位库
      </div>
    </div>
    <br />
    <button class="mybutton" @click="analysis">开始分析</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const autoadd = ref(true); //自动录入岗位库
const tableData = ref([]); //上传列表
//文件上传调用的方法
let beforeUpload = (file) => {
  addFile(file);
};
//添加文件到列表,并计算其基础属性
let addFile = (file) => {
  const id = uuidv4(); // 生成唯一 ID
  let size = (file.size / 1024).toFixed(2); //Byte转KB并四舍五入到3位小数
  size = size < 1024 ? size + " KB" : (size / 1024).toFixed(2) + " MB";
  tableData.value.push({
    id: id,
    name: file.name,
    size: size,
    status: 1,
    percent: 0, // 进度百分比
    xhr: null, // XMLHttpRequest 对象
    file: file, //文件本身
  });
};
//更新文件上传列表
let updateTableData = (id, newData) => {
  const index = tableData.value.findIndex((file) => file.id === id);
  if (index !== -1) {
    tableData.value.splice(
      index,
      1,
      Object.assign({}, tableData.value[index], newData)
    );
  }
  return true;
};
//删除上传列表中的文件
let deleteFile = (id) => {
  const index = tableData.value.findIndex((file) => file.id === id);
  if (index !== -1) {
    const file = tableData.value[index]; //这个file是object类型的，只是列表中的一项
    if (file.status === 2) {
      // 如果文件正在上传，则中断上传
      file.xhr.abort();
    }
    tableData.value.splice(index, 1);
  }
};
const header = {
  "Content-Type": "application/json;charset=UTF-8",
  Authorization:
    "eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJjdXJyZW50VGltZSI6MTY4ODM2OTE3MzU4OCwicGFzc3dvcmQiOiIxMjMiLCJpZCI6IjEiLCJleHAiOjE2ODgzNjkxNzMsInVzZXJuYW1lIjoiMTIzIn0.pnI7tKjjO0byKdmHNLY5o04YljMYAGRBOGyhsAENb_oeyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJjdXJyZW50VGltZSI6MTY4ODM2OTE3MzU4OCwicGFzc3dvcmQiOiIxMjMiLCJpZCI6IjEiLCJleHAiOjE2ODgzNjkxNzMsInVzZXJuYW1lIjoiMTIzIn0.pnI7tKjjO0byKdmHNLY5o04YljMYAGRBOGyhsAENb_o",
};
//上传文件
let uploadFile = (file) => {
  console.log(file);
  updateTableData(file.id, {
    status: 2,
    percent: 0,
  });
  const formData = new FormData();
  formData.append("file", file);
  console.log(formData);
  const res0 = axios.post(
    "http://192.168.50.159:5555/resume/upload",
    formData,
    {
      headers: header,
    }
  );
  console.log("!!",res0);
  // if (res0.data.code === 200) {
  //   updateTableData(file.id, {
  //     percent: 100,
  //   });
  //   setTimeout(() => {
  //     // 定时器回调函数中重新启用按钮
  //     updateTableData(file.id, {
  //       status: 5, // 已上传
  //     });
  //   }, 500);
  // } else {
  //   updateTableData(file.id, {
  //     status: 4, // 上传失败
  //   });
  // }
};
//点击【开始分析】按钮
let analysis = () => {
  tableData.value.forEach((f) => {
    if (f.status === 1) {
      const file = f.file; //获取到该列指向的文件本身
      uploadFile(file);
    }
  });
};
//生成id
let uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
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
.mybutton {
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

.mybutton:hover {
  background: #444fcf;
}
</style>