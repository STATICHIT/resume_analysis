<!--
 * @Author: STATICHIT
 * @Date: 2023-05-30 20:45:43
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-16 00:13:45
 * @FilePath: \resume_analysis\src\components\Upload.vue
 * @Description: 简历分析上传组件
-->

<template>
  <div>
    <div class="myUpload" v-loading.lock="fullscreenLoading1">
      <el-upload
        class="upload-demo"
        drag
        :before-upload="beforeUpload"
        :accept="acceptedMimeTypes"
        multiple
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          点击 或 拖拽<br />
          即可上传简历文件
        </div>
        <template #tip>
          <div class="el-upload__tip">
            支持PDF，JPG，PNG，DOCX，前端表单五种格式上传
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
        分析成功自动纳入人才库
      </div>
    </div>
    <br />
    <button class="mybutton" @click="analysis">开始分析</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import apiFun from "@/utils/api";
import { ElNotification } from "element-plus";
const autoadd = ref(true); //自动纳入人才库
const tableData = ref([]); //上传列表
const tableDataDemo = ref([
  {
    name: "DOCX文档格式简历1.docx",
    size: "265.43 KB",
    status: 1,
  },
  {
    name: "DOCX文档格式简历2.docx",
    size: "774.03 KB",
    status: 1,
  },
  {
    name: "PDF格式简历.pdf",
    size: "272.06 KB",
    status: 1,
  },
  {
    name: "图片简历应聘电子工程师岗位简历模板.jpg",
    size: "304.37 KB",
    status: 1,
  },
]); //上传列表
const fullscreenLoading1 = ref(false);
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
    status: 1,
    percent: 0, // 进度百分比
    xhr: null, // XMLHttpRequest 对象
    file: file, //文件本身
  });
  console.log("*******3", tableData.value); //输出测试
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

const header = {
  "Content-Type": "multipart/form-data;charset=UTF-8",
  accessToken:
    "eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJpZGVudGl0eSI6IkhSIiwiaWQiOiIxIiwiZXhwIjoxNzA5NTk1MTQzfQ.vUXTwTW7PxQlpQyv_RporMDZO2-XMekQlDSPel444VM",
  // 'Authorization': 'eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJjdXJyZW50VGltZSI6MTY4ODM2OTE3MzU4OCwicGFzc3dvcmQiOiIxMjMiLCJpZCI6IjEiLCJleHAiOjE2ODgzNjkxNzMsInVzZXJuYW1lIjoiMTIzIn0.pnI7tKjjO0byKdmHNLY5o04YljMYAGRBOGyhsAENb_o',
};

//上传文件!!
// let uploadFile = (file) => {
//   console.log(file);
//   updateTableData(file.id, {
//     status: 2,
//     percent: 0,
//   });
//   const formData = new FormData();
//   formData.append("file", file);
//   console.log(formData);
//   // axios
//   //   .post("http://192.168.83.83:5555/resume/upload", formData, {
//   //     headers: header,
//   //   })
//   //   .then((res) => {
//   //     console.log(res);
//       // if (res.data.code === 200) {
//         updateTableData(file.id, {
//           percent: 100,
//         });
//         setTimeout(() => {
//           // 定时器回调函数中重新启用按钮
//           updateTableData(file.id, {
//             status: 5, // 已上传
//           });
//         }, 500);
//       // } else {
//         updateTableData(file.id, {
//           status: 4, // 上传失败
//         });
//       // }
//     // });
// };

// let uploadFile = (file) => {
//   return new Promise((resolve, reject) => {
//     console.log(file);
//     updateTableData(file.id, {
//       status: 2,
//       percent: 0,
//     });
//     const formData = new FormData();
//     formData.append("file", file);
//     console.log(formData);
//     axios
//       .post("http://192.168.83.83:5555/resume/upload", formData, {
//         headers: header,
//       })
//       .then((res) => {
//         console.log(res);
//         if (res.data.code === 200) {
//           updateTableData(file.id, {
//             percent: 100,
//           });
//           setTimeout(() => {
//             // 定时器回调函数中重新启用按钮
//             updateTableData(file.id, {
//               status: 5, // 已上传
//             });
//             resolve(); // 上传成功，将Promise标记为成功
//           }, 500);
//         } else {
//           updateTableData(file.id, {
//             status: 4, // 上传失败
//           });
//           reject(new Error("上传失败")); // 上传失败，将Promise标记为失败，可以传递错误对象或错误信息
//         }
//       })
//       .catch((error) => {
//         reject(error); // 捕获到错误，将Promise标记为失败，可以将错误对象传递给reject
//       });
//   });
// };

let uploadFile0 = (file) => {
  updateTableData(file.uid, {
    status: 2,
    percent: 0,
  });

  const formData = new FormData();
  formData.append("file", file);

  axios
    .post("http://192.168.83.9:5555/resume/upload", formData, {
      headers: header,
    })
    .then((res) => {
      console.log(res);
      if (res.data.code === 200) {
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
          }, 500);
        });
      }
    });
};

//测试：目的 异步执行分析操作
let uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    updateTableData(file.uid, {
      status: 2,
      percent: 0,
    });
    const formData = new FormData();
    console.log(file);
    formData.append("file", file);
    axios
      .post("http://192.168.50.237:5555/resume/upload", formData, {
        headers: header,
      })
      .then((res) => {
        console.log(res);
        updateTableData(file.uid, {
          percent: 100,
        });
        setTimeout(() => {
          // 定时器回调函数中重新启用按钮
          updateTableData(file.uid, {
            status: 5, // 已上传
          });
        }, 500);
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

//点击【开始分析】按钮
let analysis0 = () => {
  tableData.value.forEach((f) => {
    if (f.status === 1) {
      const file = f.file; //获取到该列指向的文件本身
      uploadFile(file);
    }
  });
};

//测试，目的：循环完毕且uploadFile确认执行完再执行open方法
let analysis = async () => {
  const promises = [];
  for (const f of tableData.value) {
    if (f.status === 1) {
      const file = f.file; // 获取到该列指向的文件本身
      const promise = uploadFile(file); // 调用uploadFile方法并获取返回的Promise对象
      promises.push(promise); // 将Promise对象添加到数组中
    }
  }
  await Promise.all(promises); // 等待所有异步操作完成
  setTimeout(() => {
    open(); // 在所有异步操作完成后调用open方法
  }, 2000);
};

const open = () => {
  ElNotification({
    title: "分析成功",
    dangerouslyUseHTMLString: true,
    message:
      '<strong>所有简历文件均已分析完成并纳入人才库，您可前往<a href="/talentPool"><b>人才库</b></a>查看最新简历</strong>',
    type: "success",
  });
};

// 定义支持的文件类型和MIME类型
const acceptedFileTypes = ref([
  { ext: ".pdf", mime: "application/pdf" },
  { ext: ".jpg", mime: "image/jpeg" },
  { ext: ".jpeg", mime: "image/jpeg" },
  { ext: ".png", mime: "image/png" },
  {
    ext: ".docx",
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
]);

// 计算属性计算出逗号分隔的MIME类型字符串
const acceptedMimeTypes = computed(() => {
  return acceptedFileTypes.value.map((type) => type.mime).join(",");
});
</script>

<style lang="scss" scoped>
.highSettingdetail {
  margin-left: 10px;
}
.mybutton {
  margin-left: 35%;
  cursor: pointer;
  background: #7a83e7;
  border: none;
  border-radius: 3px;
  height: 35px;
  padding: 0px 10px;
  width: 200px;
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
}

.mybutton:hover {
  background: #444fcf;
}
</style>