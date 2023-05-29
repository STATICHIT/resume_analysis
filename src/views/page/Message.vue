<!--
 * @Author: STATICHIT
 * @Date: 2023-05-02 10:48:07
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-29 22:25:40
 * @FilePath: \resume_analysis\src\views\page\Message.vue
 * @Description: 消息接收页面
-->
<template>
  <div class="myBox">
    <div class="container">
      <el-tabs v-model="message">
        <el-tab-pane :label="`未读消息(${state.unread.length})`" name="first">
          <el-table
            :data="state.unread"
            :show-header="false"
            style="width: 100%"
          >
            <el-table-column>
              <template #default="scope">
                <span class="message-title">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template #default="scope">
                <el-button size="small" @click="handleRead(scope.$index)"
                  >标为已读</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <button type="primary">全部标为已读</button>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(${state.read.length})`" name="second">
          <template v-if="message === 'second'">
            <el-table
              :data="state.read"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column>
                <template #default="scope">
                  <span class="message-title">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="200"></el-table-column>
              <el-table-column width="120">
                <template #default="scope">
                  <el-button type="danger" @click="handleDel(scope.$index)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="handle-row">
              <button type="danger">删除全部</button>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${state.recycle.length})`" name="third">
          <template v-if="message === 'third'">
            <el-table
              :data="state.recycle"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column>
                <template #default="scope">
                  <span class="message-title">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="150"></el-table-column>
              <el-table-column width="120">
                <template #default="scope">
                  <el-button @click="handleRestore(scope.$index)"
                    >还原</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="handle-row">
              <el-button type="danger">清空回收站</el-button>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "tabs",
  setup() {
    const message = ref("first");
    const state = reactive({
      unread: [
        {
          date: "2022-12-26 20:00:00",
          title:
            "您在2022-12-26 19:59:01上传的100条简历已录入并进行简历分析成功，您可以在人才库中查看详细内容",
        },
        {
          date: "2022-12-25 20:30:00",
          title: "新功能【人岗匹配】已上线，快去试试吧~",
        },
        {
          date: "2022-12-25 20:00:00",
          title: "新功能【自动化管理】已上线，快去试试吧~",
        },
      ],
      read: [
        {
          date: "2022-12-19 20:00:00",
          title: "系统于今晚进行不停服更新，若对您造成了不便，敬请谅解",
        },
      ],
      recycle: [
        {
          date: "2022-12-26 20:00:00",
          title: "今日更新五条岗位，请在岗位库中查看详细",
        },
      ],
    });

    const handleRead = (index) => {
      const item = state.unread.splice(index, 1);
      console.log(item);
      state.read = item.concat(state.read);
    };
    const handleDel = (index) => {
      const item = state.read.splice(index, 1);
      state.recycle = item.concat(state.recycle);
    };
    const handleRestore = (index) => {
      const item = state.recycle.splice(index, 1);
      state.read = item.concat(state.read);
    };

    return {
      message,
      state,
      handleRead,
      handleDel,
      handleRestore,
    };
  },
};
</script>

<style>
.myBox {
  background-color:#f2f7fc;
  text-align: left;
  height: 1100px;
  width: 1000px;
  margin: auto;
  padding: 40px;
  border-radius: 30px;
}
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-top: 30px;
}
button {
  background: #7a83e7;
  border: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 30px;
  padding: 0px 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background: #444fcf;
}
</style>

