<template>
  <div>
    <br>
    <el-button @click="add" style="margin-bottom:20px">添加card</el-button>
    <my-card @list="list" v-for="item in list" :key="item"> </my-card>
  </div>
</template>

<script>
import myCard from "../test/card.vue";
export default {
  components: { myCard },
  data() {
    return {
      list: [
        {
          id: 1,
        },
      ],
    };
  },
  methods:{
    add(){
      this.list.push({id:1});
      console.log(-11);
    }
  }
  
};
</script>

<style lang="scss" scoped>
</style>