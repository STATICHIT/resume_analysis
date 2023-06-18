<!--
 * @Author: STATICHIT
 * @Date: 2023-05-31 22:30:09
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-18 22:36:20
 * @FilePath: \resume_analysis\src\views\test\test.vue
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
            <ul class="timeline">
              <li class="timeline-item">
                <div class="timeline-info">
                  <span> item.time </span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">item.action</h3>
                  <p>
                    Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.
                  </p>
                </div>
              </li>
              <li class="timeline-item">
                <div class="timeline-info">
                  <span> item.time </span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">item.action</h3>
                  <p>
                    Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.
                  </p>
                </div>
              </li>
              <li class="timeline-item">
                <div class="timeline-info">
                  <span> item.time </span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">item.action</h3>
                  <p>
                    Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.
                  </p>
                </div>
              </li>
              <li class="timeline-item">
                <div class="timeline-info">
                  <span> item.time </span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">item.action</h3>
                  <p>
                    Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.
                  </p>
                </div>
              </li><li class="timeline-item">
                <div class="timeline-info">
                  <span> item.time </span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">item.action</h3>
                  <p>
                    Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.
                  </p>
                </div>
              </li>
              <li class="timeline-item">
                <div class="timeline-info">
                  <span> item.time </span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">item.action</h3>
                  <p>
                    Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsana, consectetuer eget, posuere ut, mauris. Donec orci lectus,aliquam ut, faucibus non, euismod id, nulla. Donec vitaesapien ut libero venenatis faucibus. ullam dictum felis eupede mollis pretium. Pellentesque ut neque.
                  </p>
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
import { ref } from "vue";
import router from "../../router";
const activeName = ref("second");

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
$primary-color: #ff6b6b;
$primary-color-hover: scale-color($primary-color, $lightness: 32%);

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #3d4351;
  margin-top: 0;
}
a {
  color: $primary-color;
  &:hover {
    color: $primary-color-hover;
    text-decoration: none;
  }
}

.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: inherit;
  }
}

/*----- TIMELINE ITEM -----*/

.timeline-item {
  padding-left: 40px;
  position: relative;
  &:last-child {
    padding-bottom: 0;
  }
}

/*----- TIMELINE INFO -----*/

.timeline-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  white-space: nowrap;
}
/*----- TIMELINE MARKER -----*/

.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
}

.timeline-marker:before {
  background: $primary-color;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
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

.timeline-item:last-child .timeline-marker:after {
  content: none;
}
/*----- TIMELINE CONTENT -----*/

.timeline-content {
  padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
}

/*----- TIMELINE PERIOD -----*/

.period {
  padding: 0;
  .timeline-info {
    display: none;
  }
  .timeline-marker {
    &:before {
      background: transparent;
      content: "";
      width: 15px;
      height: auto;
      border: none;
      border-radius: 0;
      top: 0;
      bottom: 30px;
      position: absolute;

    }
    &:after {
      content: "";
      height: 32px;
      top: auto;
    }
  }
  .timeline-content {
    padding: 40px 0 70px;
  }
  .timeline-title {
    margin: 0;
  }
}

/*----------------------------------------------
        MOD: TIMELINE SPLIT
    ----------------------------------------------*/

.timeline-split {
  @media (min-width: 768px) {
    .timeline {
      display: table;
    }
    .timeline-item {
      display: table-row;
      padding: 0;
    }
    .timeline-info,
    .timeline-marker,
    .timeline-content,
    .period .timeline-info {
      display: table-cell;
      vertical-align: top;
    }
    .timeline-marker {
      position: relative;
    }
    .timeline-content {
      padding-left: 30px;
    }
    .timeline-info {
      padding-right: 30px;
    }
    .period .timeline-title {
      position: relative;
      left: -45px;
    }
  }
}

.timeline-centered {
  @extend .timeline-split;
  @media (min-width: 992px) {
    &,
    .timeline-item,
    .timeline-info,
    .timeline-marker,
    .timeline-content {
      display: block;
      margin: 0;
      padding: 0;
    }
    .timeline-item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .timeline-marker {
      position: absolute;
      left: 50%;
      margin-left: -7.5px;
    }
    .timeline-info,
    .timeline-content {
      width: 50%;
    }
    > .timeline-item:nth-child(odd) .timeline-info {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item:nth-child(odd) .timeline-content {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-info {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-content {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item.period .timeline-content {
      float: none;
      padding: 0;
      width: 100%;
      text-align: center;
    }
    .timeline-item.period {
      padding: 50px 0 90px;
    }
    .period .timeline-marker:after {
      height: 30px;
      bottom: 0;
      top: auto;
    }
    .period .timeline-title {
      left: auto;
    }
  }
}

.marker-outline {
  .timeline-marker {
    &:before {
      background: transparent;
      border-color: $primary-color;
    }
  }
  .timeline-item:hover .timeline-marker:before {
    background: $primary-color;
  }
}
</style>