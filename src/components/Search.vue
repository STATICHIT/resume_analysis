<template>
  <div class="box">
    <div class="search">
      <input
        type="text"
        class="searchTerm"
        placeholder="What are you looking for?"
      />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.box {
  padding: 50px 0 0 0;
}
.search {
  width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #7a83e7;
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
  color: #7a83e7;
}

.searchButton {
  width: 40px;
  height: 50px;
  border: 1px solid #7a83e7;
  background: #7a83e7;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
</style>