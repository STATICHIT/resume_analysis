<!--
 * @Author: STATICHIT
 * @Date: 2023-05-30 14:31:11
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-30 15:27:18
 * @FilePath: \resume_analysis\src\views\test\test4.vue
 * @Description: 自定义
-->
<template>
  <div>
    <div class="container p-y-1">
      <div class="row m-b-1">
        <div class="col-sm-6 offset-sm-3">
          <button
            type="button"
            class="btn btn-primary btn-block"
            onclick="document.getElementById('inputFile').click()"
          >
            Add Image
          </button>
          <div class="form-group inputDnD">
            <label class="sr-only" for="inputFile">File Upload</label>
            <input
              type="file"
              class="form-control-file text-primary font-weight-bold"
              id="inputFile"
              accept="image/*"
              data-title="Drag and drop a file"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.inputDnD {
  .form-control-file {
    position: relative;
    width: 450px;
    height: 250px;
    visibility: hidden;
    cursor: pointer;
    &:before {
      content: attr(data-title);
      position: absolute;
      width: 400px;
      min-height: 200px;
      line-height: 2em;
      padding-top: 20px;
      visibility: visible;
      text-align: center;
      border: 0.25em dashed skyblue;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    &:hover {
      &:before {
        border-style: solid;
        box-shadow: inset 0px 0px 0px 0.25em skyblue;
      }
    }
  }
}

// PRESENTATIONAL CSS
body {
  background-color: #f7f7f9;
}
</style>