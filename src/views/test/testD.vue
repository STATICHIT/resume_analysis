<!--
 * @Author: STATICHIT
 * @Date: 2023-08-14 21:52:46
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-14 21:59:31
 * @FilePath: \resume_analysis\src\views\test\testD.vue
 * @Description: 自定义
-->
<template>
  <div style="padding:200px">
    <textarea id="myTextarea"></textarea>
<button @click="getTextareaData">获取数据</button>
<br>
<h1>DFGSSDG</h1>
<div v-html="htmlString"></div>
  </div>
</template>

<script setup> 
import { ref } from "vue";
let htmlString=ref();
  function getTextareaData() {
  var textarea = document.getElementById("myTextarea");
  var data = textarea.value; // 获取textarea中的文本数据
  var dataWithNewline = data.replace(/\n/g, "</br>"); // 将换行符替换为"\n"
  console.log(dataWithNewline); // 输出带有"\n"的文本数据
  htmlString.value="<div>"+dataWithNewline+"</div>"
}

</script>

<style lang="scss" scoped>

</style>