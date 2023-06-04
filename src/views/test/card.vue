<!--
 * @Author: STATICHIT
 * @Date: 2023-05-18 17:47:38
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-18 18:12:05
 * @FilePath: \resume_analysis\src\views\page\card.vue
 * @Description: 自定义
-->
<template>
  <div class="showBox" :style="setTheWidth" @click="intoInfo">
    <label> 标题 <input type="text" /> </label>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "title", "area", "sign", "cost", "price", "id", "width"],
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.showBox {
  margin: 0 auto;
  height: 250px;
  width: 600px;
  padding: 15px;
  border: 5px solid rgb(223, 215, 215);
  box-shadow: 2px;
}
.image {
  object-fit: scale-down;
  width: 100%;
  height: 130px;
  display: block;
}
.left {
  float: left;
  width: 20%;
}
.right {
  background-color: rgb(255, 255, 255);
  float: right;
  width: 79%;
  height: 130px;
}
.title {
  font-size: 25px;
  text-align: left;
}
.sign {
  font-size: 15px;
  text-align: left;
}
.cost {
  font-size: 25px;
  text-align: right;
  margin-right: 30px;
  color: red;
  font-weight: bold;
}
.price {
  font-size: 13px;
  text-align: right;
  margin-right: 30px;
}
.rent {
  font-size: 25px;
  text-align: right;
  margin-right: 30px;
  color: red;
  font-weight: bold;
}
</style>