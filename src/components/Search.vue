<template>
  <div style="margin-top:30px">
    <div class="search">
      <input
        type="text"
        class="searchTerm"
        placeholder="请输入关键字"
      />
      <button type="submit" class="searchButton">
        <el-icon size="25"><Search /></el-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.search {
  width: 700px;
  margin: 0 auto;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #b7bbec;
  border-right: none;
  padding: 5px;
  height: 50px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  font-size: 20px;
  text-indent: 10px;
}

.searchTerm:focus {
  color: rgb(141, 148, 235);
}

.searchButton {
  width: 110px;
  height: 50px;
  border: 1px solid #b7bbec;
  background: #b7bbec;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.searchButton:hover {
  background: #8991ec;
}
</style>