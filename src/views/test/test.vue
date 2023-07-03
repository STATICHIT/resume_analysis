<template>
  <div style="padding: 200px">
    <div class="box">
      <div class="line">
        <span class="text"><h3>流程管理</h3></span>
      </div>
      <h4>活跃状态</h4>
      <li class="list-group-item flex-container">
        <i class="dis">|</i>
        <b style="color: #fbaf00">● <span>投递人选</span></b>
      </li>
      <draggable
        tag="ul"
        :list="list"
        class="list-group"
        group="status"
        handle=".handle"
      >
        <li
          class="list-group-item flex-container handle"
          v-for="(element, idx) in list"
          :key="element.name"
        >
          <i>|</i>
          <div class="flex-item"></div>
          <b :style="{ color: element.color }"
            >● <span>{{ element.name }}</span></b
          >
          <i
            class="close flex-item"
            style="margin-left: auto"
            @click="removeAt(idx)"
            ><el-icon><Close /></el-icon
          ></i>
        </li>
      </draggable>
      <h4>成功状态</h4>
      <draggable
        tag="ul"
        :list="list2"
        class="list-group"
        group="status"
        handle=".handle"
      >
        <li
          class="list-group-item flex-container handle"
          v-for="(element, idx) in list2"
          :key="element.name"
        >
          <i>|</i>
          <div class="flex-item"></div>
          <b :style="{ color: element.color }"
            >● <span>{{ element.name }}</span></b
          >
          <i
            class="close flex-item"
            style="margin-left: auto"
            @click="removeAt(idx)"
            ><el-icon><Close /></el-icon
          ></i>
        </li>
      </draggable>
      <h4>失败</h4>
      <li class="list-group-item flex-container">
        <i class="dis">|</i>
        <b style="color: #c5c5c5">● <span>淘汰</span></b>
      </li>

      <div class="line">
        <span class="text"><h3>新增流程</h3></span>
      </div>
      <div class="col-1">
        <li class="list-group-item flex-container addcom">
          <b :style="{ color: begincolor }">●</b>
          <input
            type="text"
            class="addinput"
            v-model="addelement"
            placeholder="请输入流程名称..."
          />
          <i style="margin-right: 30px">
            <el-color-picker class="picker" v-model="begincolor"
          /></i>
          <i class="close flex-item" style="margin-left: auto" @click="add"
            ><el-icon><Finished /></el-icon
          ></i>
        </li>
      </div>
      <div><button>确认修改</button></div>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      list: [
        { name: "笔试阶段", color: "#6254e8", id: 1 },
        { name: "面试阶段", color: "#e8507b", id: 2 },
      ],
      list2: [
        { name: "候选人推荐", color: "#d8557a", id: 3 },
        { name: "offer阶段", color: "#3daeff", id: 4 },
        { name: "入职", color: "#e8507b", id: 5 },
        { name: "已转正", color: "#6072de", id: 6 },
      ],
      dragging: false,
      begincolor: "#6254e8",
      addelement: "",
    };
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function () {
      if (this.addelement !== "") {
        this.list.push({
          name: this.addelement,
          id: this.list.size,
          color: this.begincolor,
        });
        this.addelement = "";
      } else {
        alert("请输入流程名称");
      }
    },
  },
};
</script>
<style scoped>
.box {
  height: 100%;
  width: 500px;
  margin: 0 auto;
  padding: 30px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.button {
  margin-top: 35px;
}
h4 {
  color: rgb(100, 100, 100);
  margin-top: 20px;
  margin-bottom: 8px;
}
ul {
  list-style-type: none;
}
li {
  height: 45px;
  border: 2px solid rgba(212, 208, 208, 0.452);
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 2px 20px;
}
.addcom {
  border: 2px dashed rgba(212, 208, 208, 0.452);
}
li i {
  margin-right: 10px;
  color: rgba(133, 133, 132, 0.527);
}
.dis {
  color: rgba(165, 76, 49, 0);
}
li b,
i {
  cursor: pointer;
}
b span {
  margin-left: 10px;
}
.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}

input {
  display: inline-block;
  outline: none;
  width: 50%;
}
.addinput {
  width: 80%;
  border: none;
  border-radius: 8px;
  padding: 2px 20px;
}
.list-group-item {
  text-align: left;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.flex-item {
  text-align: left;
}
.line {
  height: 0;
  border-top: 1px solid rgba(145, 143, 143, 0.308);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
.text {
  position: relative;
  top: -14px;
  background-color: #fff;
}
button {
  margin-left: 27%;
  margin-top: 20px;
  width: 200px;
  background: #1de9b6;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
}

button:hover {
  background: #64ffda;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
}
</style>