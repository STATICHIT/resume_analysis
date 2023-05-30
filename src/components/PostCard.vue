<!--
 * @Author: STATICHIT
 * @Date: 2023-05-24 21:10:51
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-30 22:52:40
 * @FilePath: \resume_analysis\src\components\PostCard.vue
 * @Description: 自定义
-->
<template>
  <div class="box">
    <div>
      <h2 style="text-align: center">现有岗位</h2>
      <p style="text-align: center">Current positions</p>
    </div>
    <br><br>
    <div class="container">
      <div class="col">
        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>web前端开发工程师</h4>
            <h5>上海·长宁区·中山公园</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>

        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>解决方案工程师</h4>
            <h5>上海·松江区·车墩</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>

        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>Kubernetes开发工程师</h4>
            <h5>北京·东城区·安贞</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>FPGA原型验证工程师</h4>
            <h5>北京·海淀区·清河</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>

        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>全屋定制家具设计师</h4>
            <h5>北京·海淀区·北太平庄</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>

        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>广东事业部总经理</h4>
            <h5>广州·海珠区·江南大道</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>B端产品经理+居家办公</h4>
            <h5>天津·河东区·富民路</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>

        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>Java开发工程师</h4>
            <h5>深圳·福田区·车公庙</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>

        <div class="card-container">
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="overlay"></div>
          <div class="card">
            <h4>茶艺师</h4>
            <h5>深圳·福田区·华强南</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let list = [
  {
    name: "web前端开发工程师",
    area: "上海·松江区·车墩",
  },
  {
    name: "解决方案工程师",
    area: "北京·东城区·安贞",
  },
  {
    name: "Kubernetes开发工程师",
    area: "北京·海淀区·清河",
  },
  {
    name: "FPGA原型验证工程师",
    area: "北京·海淀区·北太平庄",
  },
  {
    name: "全屋定制家具设计师",
    area: "广州·海珠区·江南大道",
  },
  {
    name: "广东事业部总经理",
    area: "天津·河东区·富民路",
  },
  {
    name: "B端产品经理+居家办公",
    area: "深圳·福田区·车公庙",
  },
  {
    name: "Java开发工程师",
    area: "上海·长宁区·中山公园",
  },
  {
    name: "茶艺师",
    area: "深圳·福田区·华强南",
  },
];
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400");

*,
*:before,
*:after {
  box-sizing: border-box;
}

* {
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform-style: preserve-3d;
  margin: 0;
  padding: 0;
}

*:focus {
  outline: none !important;
}
.box {
  padding: 40px 100px;
}
body {
  margin: 0;
  padding: 0;
  background: #131313;
  color: #f5f5f5;
  font-family: "Fira Sans";
  text-align: left;
  overflow-x: hidden;
  overflow-y: hidden;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  perspective: 1000px;
  perspective-origin: center;
}

.col {
  height: 600px;
  transition: transform 600ms cubic-bezier(0.59, 0.875, 0.865, 1),
    opacity 300ms ease;
  transform: translateZ(34px) scale(0.98);
  flex: 0 0 33.3333%;
  position: relative;
}

.col:nth-of-type(1) {
  transform: rotateY(5deg) translateZ(34px) scale(0.98);
}

.col:nth-of-type(3) {
  transform: rotateY(-5deg) translateZ(34px) scale(0.98);
}

.col:hover,
.col:focus {
  transform: translateZ(34px);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1),
    opacity 300ms ease;
}

.card-container {
  position: relative;
  width: calc(100% - 25px);
  height: calc(33.3% - 25px);
  margin: 17px;
  padding: 8px;
  text-align: center;
}

.card-container:hover,
.card-container:focus {
  opacity: 1;
}

.overlay {
  display: block;
  position: absolute;
  cursor: pointer;
  width: 50%;
  height: 50%;
  z-index: 1;
  transform: translateZ(34px);
}

.overlay:nth-of-type(1) {
  left: 0;
  top: 0;
}

.overlay:nth-of-type(2) {
  right: 0;
  top: 0;
}

.overlay:nth-of-type(3) {
  bottom: 0;
  right: 0;
}

.overlay:nth-of-type(4) {
  bottom: 0;
  left: 0;
}

.overlay:nth-of-type(1):hover ~ .card,
.overlay:nth-of-type(1):focus ~ .card {
  transform-origin: right top;
  transform: rotateX(3deg) rotateY(-3deg) translateZ(0);
}

.overlay:nth-of-type(2):hover ~ .card,
.overlay:nth-of-type(2):focus ~ .card {
  transform-origin: left top;
  transform: rotateX(3deg) rotateY(3deg) translateZ(0);
}

.overlay:nth-of-type(3):hover ~ .card,
.overlay:nth-of-type(3):focus ~ .card {
  transform-origin: left bottom;
  transform: rotateX(-3deg) rotateY(3deg) translateZ(0);
}

.overlay:nth-of-type(4):hover ~ .card,
.overlay:nth-of-type(4):focus ~ .card {
  transform-origin: right bottom;
  transform: rotateX(-3deg) rotateY(-3deg) translateZ(0);
}

.card {
  border-radius: 5px;
  height: 100%;
  transition: all 300ms ease-out;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  z-index: 0;
  opacity: 0.89;
  padding: 13px 21px;
}

.card:before,
.card:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.21;
  transition: transform 300ms ease;
  transform: scale(0.98);
}

.card:before {
  background-size: cover;
  background-position: 50% 50%;
}

.card-container:hover .card:before,
.card-container:hover .card:after,
.card-container:focus .card:before,
.card-container:focus .card:after {
  opacity: 0.34;
  transform: scale(1);
}

.col:nth-of-type(1) .card-container:nth-of-type(1) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia22474-2000.jpg?itok=cajl1lYH");
}

.col:nth-of-type(2) .card-container:nth-of-type(1) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m18-090.jpg?itok=TQ8Fuk4x");
}

.col:nth-of-type(3) .card-container:nth-of-type(1) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/40808879360_18c96d62f1_o.jpg?itok=NttmTWPK");
}

.col:nth-of-type(1) .card-container:nth-of-type(2) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/jwst-pv-145604copy.jpg?itok=Jq7GN-Rc");
}

.col:nth-of-type(2) .card-container:nth-of-type(2) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/worldview201709201920x1080.png");
}

.col:nth-of-type(3) .card-container:nth-of-type(2) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/nasasibexobs.jpg?itok=U2LCp14i");
}

.col:nth-of-type(1) .card-container:nth-of-type(3) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia19808.jpg?itok=rgxgamMM");
}

.col:nth-of-type(2) .card-container:nth-of-type(3) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/e0102_lg.jpg?itok=sd9lOayI");
}

.col:nth-of-type(3) .card-container:nth-of-type(3) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/asteroid20180605-home.jpg?itok=KSUffiCR");
}

.card:after {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.89) 100%
  );
}

h4 {
  color: #131313;
  font-weight: 600;
  text-align: left;
  font-size: 18px;
  transform: translateY(5px);
  transition: transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);
  max-width: 320px;
  outline: 1px solid transparent;
  margin-bottom: 8px;
}

.overlay:hover ~ .card h4,
.overlay:focus ~ .card h4 {
  transform: translateZ(144px);
}

.card > span {
  font-size: 34px;
  opacity: 0;
  transform: translateX(-3px);
  transition: all 300ms ease;
}

.card-container:hover > .card > h4,
.card-container:focus > .card > h4 {
  transform: translateY(-13px);
}

.card-container:hover > .card > span,
.card-container:focus > .card > span {
  opacity: 1;
  transform: translateX(3px);
  animation: slideRight 300ms ease;
}

@media (max-width: 768px) {
  body {
    overflow-y: scroll;
  }
  h4 {
    font-size: 17px;
  }
}

@media (max-width: 540px) {
  .container {
    flex-flow: column;
    perspective: none;
  }

  .col:nth-of-type(1),
  .col:nth-of-type(2),
  .col:nth-of-type(3),
  .col:hover {
    transform: none;
  }

  h4 {
    padding-bottom: 8px;
    font-size: 18px;
  }

  .card > span {
    display: none;
  }
}

@media (max-height: 599px) {
  .card > span {
    display: none;
  }
}

@media (max-width: 860px) and (max-height: 540px) {
  h4 {
    font-size: 14px;
  }
}

@media (max-width: 620px) and (max-height: 540px) {
  h4 {
    font-size: 13px;
  }
}
</style>