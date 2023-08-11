<!--
 * @Author: STATICHIT
 * @Date: 2023-06-11 20:46:15
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-09 22:39:50
 * @FilePath: \resume_analysis\src\components\Upload2.vue
 * @Description: 岗位批量上传组件
-->
<template>
  <div>
    <div class="myUpload" v-loading.lock="fullscreenLoading1">
      <el-upload
        class="upload-demo"
        drag
        :before-upload="beforeUpload"
        accept=".xls,.xlsx"
        multiple
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          点击 或 拖拽<br />
          即可上传exacl文件
        </div>
        <template #tip>
          <div class="el-upload__tip">
            请上传exacl表格,每一行进行一个岗位描述，大致内容为岗位名、岗位描述、岗位要求。
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
            <span v-if="scope.row.status === 1">待上传</span>
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
import apiFun from "@/utils/api";
import * as XLSX from "xlsx";
import { ElNotification } from "element-plus";
const autoadd = ref(true); //自动录入岗位库
const tableData = ref([]); //上传列表
const fullscreenLoading1 = ref(false);//loading效果

//文件上传调用的方法
let beforeUpload = (file) => {
  addFile(file);
};

//添加文件到列表,并计算其基础属性
let addFile = (file) => {
  let size = (file.size / 1024).toFixed(2); //Byte转KB并四舍五入到3位小数
  size = size < 1024 ? size + " KB" : (size / 1024).toFixed(2) + " MB";
  //加入列表
  tableData.value.push({
    id: file.uid,
    name: file.name,
    size: size,
    status: 1, //状态
    percent: 0, // 进度百分比
    xhr: null, // XMLHttpRequest 对象
    file: file, //文件本身
  });
};
//更新文件上传列表
let updateTableData = (id, newData) => {
  const index = tableData.value.findIndex((e) => e.id === id);
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
  const index = tableData.value.findIndex((e) => e.id === id);
  if (index !== -1) {
    const file = tableData.value[index]; //这个file是object类型的，只是列表中的一项
    if (file.status === 2) {
      // 如果文件正在上传，则中断上传
      file.xhr.abort();
    }
    tableData.value.splice(index, 1);
  }
};

//上传文件
let uploadFile = (file) => {
  //console.log(file);
  updateTableData(file.uid, {
    status: 2,
    percent: 0,
  });
  let data = [];
  data = readExcel(file);

  //上传文件
  setTimeout(() => {
    // 定时器回调函数中重新启用按钮
    updateTableData(file.uid, {
      percent: 100,
    });
    setTimeout(() => {
      // 定时器回调函数中重新启用按钮
      updateTableData(file.uid, {
        status: 5, // 已上传
      });
      fullscreenLoading1.value = true;
    }, 500);
  }, 500);

  apiFun.upload.postUpload(data).then((res) => {
    console.log("res:", res);
    if (res.data.code === 200) {
      setTimeout(() => {
        open();
        fullscreenLoading1.value = false;
      }, 500);
    } else {
      updateTableData(file.id, {
        status: 4, // 上传失败
      });
    }
  });
  console.log(data);
  
  //data.forEach((d) => {
  //   const formattedString = `岗位名: ${d[0]}; 岗位职责: ${d[1]}; 岗位要求: ${d[2]}`;
  //   jobs.push(formattedString);
  //});
};
//点击【开始分析】按钮
let analysis = () => {
  tableData.value.forEach((f) => {
    console.log("11");
    if (f.status === 1) {
      const file = f.file; //获取到该列指向的文件本身
      uploadFile(file);
    }
  });
  open();
};

//解析exacl文件
function readExcel(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 2 });
    console.log(jsonData);
    return jsonData;
  };
  reader.readAsArrayBuffer(file);
}

const open = () => {
  ElNotification({
    title: "分析成功",
    dangerouslyUseHTMLString: true,
    message: '<strong>录入岗位均已分析完成并纳入岗位库，您可前往<a href="/jobPool"><b>岗位库</b></a>查看最新岗位</strong>',
    type: "success",
  });
};
</script>

<style lang="scss" scoped>
.highSettingdetail {
  margin-left: -450px;
}
.mybutton {
  cursor: pointer;
  background: #7a83e7;
  border: none;
  border-radius: 3px;
  height: 35px;
  padding: 0px 10px;
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