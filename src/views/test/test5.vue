<!--
 * @Author: STATICHIT
 * @Date: 2023-06-11 20:46:15
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-06 23:19:04
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
        @change="readExcel($event)"
      />
    </div>
  </div>
</template>
<script>
// import XLSX from "xlsx";
export default {
  data() {
    return {
      upload_file: "",
      data: [],
    };
  },
  methods: {
    readExcel(e) {
      // 读取表格文件
      let that = this;
      const files = e.target.files;
      if (files.length <= 0) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$message({
          message: "上传格式不正确，请上传xls或者xlsx格式",
          type: "warning",
        });
        return false;
      } else {
        // 更新获取文件名
        that.upload_file = files[0].name;
      }

      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        console.log("!!!")
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary",
          });
          const wsname = workbook.SheetNames[0]; //取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
          that.lists = [];
          console.log("ws", ws);
          // 从解析出来的数据中提取相应的数据
          ws.forEach((item) => {
            that.data.push({
              jobname: item["岗位名"],
              jobduty: item["岗位职责"],
              jobrequest: item["岗位要求"],
            });
          });
          that.visibleUp = false;
          // 给后端发请求
          // this.submit_form();
        } catch (e) {
          return
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
  },
};
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