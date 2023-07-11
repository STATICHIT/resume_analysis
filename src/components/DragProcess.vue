<!--
 * @Author: STATICHIT
 * @Date: 2023-07-02 00:52:47
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-11 18:17:52
 * @FilePath: \resume_analysis\src\components\DragProcess.vue
 * @Description: 拖拽式流程管理组件
-->
<!-- Vue 3组件 -->
<template>
  <div>
    <div class="box">
      <div class="line" style="margin-top: 0">
        <span class="text"><h3>流程管理</h3></span>
      </div>
      <h4>活跃状态</h4>
      <!-- <li class="list-group-item flex-container">
        <i class="dis">|</i>
        <b style="color: #fbaf00">● <span>投递人选</span></b>
      </li> -->
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
          :key="element.id"
        >
          <i>|</i>
          <div class="flex-item"></div>
          <b :style="{ color: element.color }"
            >● <span>{{ element.name }}</span></b
          >
          <el-popover
            :visible="element.visible"
            placement="left"
            :width="300"
            trigger="click"
          >
            <template #reference>
              <i
                class="close flex-item"
                style="margin-left: auto"
                @click="element.visible = true"
              >
                <el-icon><More /></el-icon>
              </i>
            </template>
            <div style="padding: 8px">
              <div class="col-1">
                <li class="flex-container editcom">
                  <b :style="{ color: element.color }" style="margin-top: 6px"
                    ><el-icon><Edit /></el-icon
                  ></b>
                  <input
                    type="text"
                    class="changeinput"
                    v-model="element.name"
                  />
                  <el-color-picker class="picker" v-model="element.color" />
                </li>
              </div>
              <div>
                <span class="deleteIcon" @click="removeAt(idx)"
                  ><el-icon style="margin-right: 6px"><Delete /></el-icon>
                  <span>删除</span>
                </span>
              </div>
              <button class="submitButton" @click="changeNode(element)">
                提交
              </button>
            </div>
          </el-popover>
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
          :key="element.id"
        >
          <i>|</i>
          <div class="flex-item"></div>
          <b :style="{ color: element.color }"
            >● <span>{{ element.name }}</span></b
          >
          <el-popover
            :visible="element.visible"
            placement="left"
            :width="300"
            trigger="click"
          >
            <template #reference>
              <i
                class="close flex-item"
                style="margin-left: auto"
                @click="element.visible = true"
              >
                <el-icon><More /></el-icon>
              </i>
            </template>
            <div style="padding: 8px">
              <div class="col-1">
                <li class="flex-container editcom">
                  <b :style="{ color: element.color }" style="margin-top: 6px"
                    ><el-icon><Edit /></el-icon
                  ></b>
                  <input
                    type="text"
                    class="changeinput"
                    v-model="element.name"
                  />
                  <el-color-picker class="picker" v-model="element.color" />
                </li>
              </div>
              <div>
                <span class="deleteIcon" @click="removeAt2(idx)"
                  ><el-icon style="margin-right: 6px"><Delete /></el-icon>
                  <span>删除</span>
                </span>
              </div>
              <button class="submitButton" @click="changeNode(element)">
                提交
              </button>
            </div>
          </el-popover>
          <!-- <i
            class="close flex-item"
            style="margin-left: auto"
            @click="removeAt2(idx)"
            ><el-icon><Close /></el-icon
          ></i> -->
        </li>
      </draggable>

      <h4>失败</h4>
      <!-- <li class="list-group-item flex-container">
        <i class="dis">|</i>
        <b style="color: #c5c5c5">● <span>淘汰</span></b>
      </li> -->
      <draggable
        tag="ul"
        :list="list3"
        class="list-group"
        group="status"
        handle=".handle"
      >
        <li
          class="list-group-item flex-container handle"
          v-for="(element, idx) in list3"
          :key="element.id"
        >
          <i>|</i>
          <div class="flex-item"></div>
          <b :style="{ color: element.color }"
            >● <span>{{ element.name }}</span></b
          >
          <el-popover
            :visible="element.visible"
            placement="left"
            :width="300"
            trigger="click"
          >
            <template #reference>
              <i
                class="close flex-item"
                style="margin-left: auto"
                @click="element.visible = true"
              >
                <el-icon><More /></el-icon>
              </i>
            </template>
            <div style="padding: 8px">
              <div class="col-1">
                <li class="flex-container editcom">
                  <b :style="{ color: element.color }" style="margin-top: 6px"
                    ><el-icon><Edit /></el-icon
                  ></b>
                  <input
                    type="text"
                    class="changeinput"
                    v-model="element.name"
                  />
                  <el-color-picker class="picker" v-model="element.color" />
                </li>
              </div>
              <div>
                <span class="deleteIcon" @click="removeAt3(idx)"
                  ><el-icon style="margin-right: 6px"><Delete /></el-icon>
                  <span>删除</span>
                </span>
              </div>
              <button class="submitButton" @click="changeNode(element)">
                提交
              </button>
            </div>
          </el-popover>
        </li>
      </draggable>

      <div class="line">
        <span class="text"><h3>新增流程</h3></span>
      </div>
      <div class="col-1">
        <li class="list-group-item flex-container addcom">
          <i class="dis">|</i>
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
      <div><button class="finish" @click="finish">确认修改</button></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { defineEmits } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
onMounted(() => {
  Pre();
});
function Pre() {
  // getNode();
}
const list = ref([
  { name: "投递人选", color: "#fbaf00", id: 1, visible: false },
  { name: "笔试阶段", color: "#6254e8", id: 2, visible: false },
  { name: "面试阶段", color: "#e8507b", id: 3, visible: false },
]);
const list2 = ref([
  { name: "候选人推荐", color: "#d8557a", id: 4, visible: false },
  { name: "offer阶段", color: "#3daeff", id: 5, visible: false },
  { name: "入职", color: "#e8507b", id: 6, visible: false },
  { name: "已转正", color: "#6072de", id: 7, visible: false },
]);
const list3 = ref([{ name: "淘汰", color: "#c5c5c5", id: 8, visible: false }]);
const begincolor = ref("#6254e8");
const addelement = ref("");

//删除
function removeAt(idx) {
  list.value.splice(idx, 1);
}
function removeAt2(idx) {
  list2.value.splice(idx, 1);
}
function removeAt3(idx) {
  list3.value.splice(idx, 1);
}
function changeNode(item) {
  item.visible = false;
}

//更新流程顺序
function updateSorting() {
  apiFun.process.updateSorting(params).then((res) => {});
}

//添加一个流程节点
function addNode() {
  apiFun.process.addNode(params).then((res) => {});
}

//更新一个流程节点（修改颜色，修改名字）
function updateNode() {
  apiFun.process.updateNode(nodeId, params).then((res) => {});
}

//删除一个流程节点，在对应的类型当中也会被删除
function deleteNode() {
  apiFun.process.deleteNode(nodeId, params).then((res) => {});
}

//更新简历当前所属节点
function updateCurNode() {
  apiFun.process.updateNode(resumeId, nodeId, params).then((res) => {});
}

function add() {
  if (addelement.value !== "") {
    list.value.push({
      name: addelement.value,
      id: list.value.length + 1,
      color: begincolor.value,
    });
    addelement.value = "";
  } else {
    alert("请输入流程名称");
  }
}

const emits = defineEmits(["finishChangeNode"]);
function finish() {
  emits("finishChangeNode"); // 使用 emit 函数触发自定义事件
  
}
</script>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
});
</script>
<style lang="scss" scoped>
.box {
  height: 100%;
  width: 500px;
  margin: 0 auto;
  padding: 0 30px;
}
h4 {
  color: rgb(100, 100, 100);
  margin-top: 20px;
  margin-bottom: 18px;
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

.addinput {
  display: inline-block;
  outline: none;
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
  margin-bottom: 40px;
}
.text {
  position: relative;
  top: -14px;
  background-color: #fff;
}
.finish {
  cursor: pointer;
  margin-left: 27%;
  margin-top: 25px;
  width: 200px;
  background: #1de9b6;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
}

.finish:hover {
  background: #64ffda;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
}
.editcom {
  border: 2px solid rgba(212, 208, 208, 0.452);
}

.changeinput {
  display: inline-block;
  outline: none;
  width: 90%;
  border: none;
  border-radius: 8px;
  padding: 2px 10px;
}
.deleteIcon {
  cursor: pointer;
  float: left;
  color: red;
  margin-left: 10px;
  margin-top: 8px;
}
.submitButton {
  cursor: pointer;
  float: right;
  color: #776be9;
  border: 1px solid #6d59ec;
  border-radius: 5px;
  background-color: #edebfe;
  width: 50px;
  height: 30px;
  margin-right: 10px;
}
</style>