<!--
 * @Author: STATICHIT
 * @Date: 2023-08-14 21:52:46
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-09-27 21:56:05
 * @FilePath: \resume_analysis\src\views\test\testD.vue
 * @Description: 自定义
-->
<template>
  <div style="padding: 200px">
    <textarea id="myTextarea"></textarea>
    <button @click="getTextareaData">获取数据</button>
    <br />
    <h1>DFGSSDG</h1>
    <div v-html="htmlString"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let htmlString = ref();
function getTextareaData() {
  //扁平化数组
  // let arr=[1,[2,[3,[4]]]];
  // console.log(arr.toString().split(','));

  console.log("XXX")
  let arr = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
  console.log(minimumTotal(arr));

  // var textarea = document.getElementById("myTextarea");
  // var data = textarea.value; // 获取textarea中的文本数据
  // var dataWithNewline = data.replace(/\n/g, "</br>"); // 将换行符替换为"\n"
  // console.log(dataWithNewline); // 输出带有"\n"的文本数据
  // htmlString.value="<div>"+dataWithNewline+"</div>"
}
var minimumTotal = function (triangle) {
    //从底向上考虑
    const h = triangle.length;
    const dp = new Array(h + 1);
    //给dp【i】分配对应triangle的大小
    for (let i = 0; i < h; i++) {
      dp[i] = new Array(triangle[i].length);
    }
    //处理最底层
    for (let i = 0; i < triangle[h - 1].length; i++) {
      dp[h-1][i] = triangle[h-1][i];
    }
    //自底向上遍历
    for (let i = h - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
    return dp[0][0];
  };

</script>

<style lang="scss" scoped>
</style>