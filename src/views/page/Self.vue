<!--
 * @Author: STATICHIT
 * @Date: 2023-05-31 22:30:09
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-18 22:48:09
 * @FilePath: \resume_analysis\src\views\page\Self.vue
 * @Description: 自定义
-->
<template>
  <div class="box cur">
    <div>
      <img class="head" src="../../assets/imgs/10.png" alt="图片加载出错" />
    </div>
    <div class="main">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="数据检测" name="first"> </el-tab-pane>
        <el-tab-pane label="操作日志" name="second">
          <div
            class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
            style="padding: 30px 80px"
          >
            <ul class="timeline" v-for="(item, i) in logs" :key="i">
              <li class="timeline-item">
                <div>
                  <span>{{ item.time }}</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">{{ item.action }}</h3>
                  <div>
                    <p>
                      {{ item.detail }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="星标简历" name="third"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "../../router";
const activeName = ref("second");
onMounted(() => {
  // pre();
});
let logs = [
  {
    time: "2023年6月18日 22点17分",
    action: "发送面试邀约",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月18日 11点26分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月17日 9点23分",
    action: "发送入职邀约",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月16日 7点11分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月16日 7点11分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
  {
    time: "2023年6月16日 7点11分",
    action: "应聘人状态修改",
    detail:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.",
  },
];
</script>

<style lang="scss" scoped>
.box {
  height: 1300px;
}
.head {
  width: 100%;
  height: 250px;
}
.main {
  height: 100%;
  padding: 20px 200px 0 200px;
}
.cur {
  background: url("../../assets/imgs/波纹背景.png") no-repeat;
  background-size: 100%;
  background-position-y: bottom;
}

.timeline {
  line-height: 1.4em;
  list-style: none;
}

.timeline-item {
  padding-left: 40px;
  position: relative;
}

.timeline-marker:before {
  background: #ff6b6b;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
}

.timeline-marker:after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}

.timeline-content {
  padding-top: 20px;
  padding-bottom: 40px;
}
.timeline-title {
  margin-bottom: 10px;
}
</style>