<!-- 日志组件 -->
<template>
  <div>
    <div
      class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
      style="padding: 30px 80px"
    >
      <ul class="timeline">
        <li class="timeline-item" v-for="(item, i) in getReverse" :key="i">
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
  </div>
</template>

<script setup>
import apiFun from "@/utils/api";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
  logs:{
    type:Array,
    default:()=>[{
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
  }]
  }
});

const getReverse = computed(()=>{
  return [...props.logs].reverse();
})

const getAction = computed(()=>{
  return()=>{
  if(item.action===1) return "应聘人状态修改"
  else if(item.action===2) return "发送面试邀约";
  else return "发送入职邀约"
  }
})

</script>

<style lang="scss" scoped>
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
  top: 0px;
  left: 0;
  width: 15px;
}

.timeline-marker:after {
  content: "";
  width: 3px;
  background: #ccd5db;
  display: block;
  position: absolute;
  top: 20px;
  bottom: 0;
  left: 9px;
}

.timeline-content {
  padding-top: 20px;
  padding-bottom: 40px;
}
.timeline-title {
  margin-bottom: 10px;
}

</style>