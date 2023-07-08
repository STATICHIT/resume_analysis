<template>
  <div>
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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  log:{
    type:Array,
    default:[]
  }
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