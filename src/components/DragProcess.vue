<!--
 * @Author: STATICHIT
 * @Date: 2023-07-02 00:52:47
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-08-12 15:49:02
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
                <span class="deleteIcon" @click="removeAt(element, idx)"
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
                <span class="deleteIcon" @click="removeAt2(element, idx)"
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
                <span class="deleteIcon" @click="removeAt3(element, idx)"
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
import apiFun from "../utils/api";
import { VueDraggableNext } from "vue-draggable-next";
import { ElNotification } from "element-plus";
onMounted(() => {
  Pre();
});
let userId = ref();
function Pre() {
  //加载不同阶段的状态结点
  apiFun.process.flowPathOrder().then((res) => {
    console.log("加载不同阶段的状态结点返回结果", res);
    list.value = [];
    list2.value = [];
    list3.value = [];
    getAll(res.data.active, res.data.success, res.data.fail);
  });
}
function getAll(list11, list22, list33) {
  //加载不同阶段的状态结点
  list.value = [];
  list2.value = [];
  list3.value = [];
  list11.forEach((e) => {
    list.value.push({
      userId: e.userId,
      name: e.name,
      color: e.color,
      id: e.id,
      visible: false,
    });
  });
  list22.forEach((e) => {
    list2.value.push({
      userId: e.userId,
      name: e.name,
      color: e.color,
      id: e.id,
      visible: false,
    });
  });
  list33.forEach((e) => {
    userId.value = e.userId;
    list3.value.push({
      userId: e.userId,
      name: e.name,
      color: e.color,
      id: e.id,
      visible: false,
    });
  });
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
function removeAt(element, idx) {
  apiFun.process.deleteNode(element.id).then((res) => {
    if (res.code === 200) {
      console.log("删除单个结点返回数据：", res);
      list.value.splice(idx, 1);
    } else {
      errorTips("删除失败");
    }
  });
}
function removeAt2(element, idx) {
  apiFun.process.deleteNode(element.id).then((res) => {
    if (res.code === 200) {
      list2.value.splice(idx, 1);
    } else {
      errorTips("删除失败");
    }
  });
}
function removeAt3(element, idx) {
  apiFun.process.deleteNode(element.id).then((res) => {
    if (res.code === 200) {
      list3.value.splice(idx, 1);
    } else {
      errorTips("删除失败");
    }
  });
}

function errorTips(title) {
  ElNotification({
    title: title,
    message: "请刷新并重试",
    type: "error",
  });
}

//更新单个结点
function changeNode(item) {
  apiFun.process
    .updateNode(item.id, {
      name: item.name,
      color: item.color,
    })
    .then((res) => {
      console.log("更新单个结点返回数据：", res);
      if (res.code === 200) {
        item.visible = false;
      } else {
        errorTips("修改失败");
      }
    });
}

//增加结点
function add() {
  if (addelement.value !== "") {
    apiFun.process
      .addNode({
        name: addelement.value, //流程名字
        color: begincolor.value, //颜色
        flowType: 1, //追加到哪个流程后面 active:1 success:2 fail:3
      })
      .then((res) => {
        console.log("增加单个结点返回数据：", res);
        if (res.code === 200) {
          getAll(res.data.active, res.data.success, res.data.fail); //重新加载
          addelement.value = "";
        } else {
          errorTips("添加失败");
        }
      });
  } else {
    errorTips("流程名不能为空");
  }
}

const emits = defineEmits(["finishChangeNode"]);
//更新流程顺序
function finish() {
  apiFun.process
    .updateSorting({
      active: list.value.map(({ visible, ...rest }) => rest),
      success: list2.value.map(({ visible, ...rest }) => rest),
      fail: list3.value.map(({ visible, ...rest }) => rest),
    })
    .then((res) => {
      console.log("更新流程顺序的返回结果", res);
      if (res.code === 200) {
        ElNotification({
          type: "success",
          title: "更新成功",
          message: "流程结点已更新并加载完毕",
          position: "bottom-right",
        });
        emits("finishChangeNode"); //让外面的流程选择条重新加载
      } else {
        errorTips("更新失败");
      }
    });
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