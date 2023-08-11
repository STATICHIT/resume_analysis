<!--
 * @Author: STATICHIT
 * @Date: 2023-05-24 21:10:51
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-14 16:49:30
 * @FilePath: \resume_analysis\src\components\PostCard.vue
 * @Description: 岗位展示列表
-->
<template>
  <div class="box">
    <div>
      <h2 style="text-align: center">现有岗位</h2>
      <p style="text-align: center">Current positions</p>
    </div>
    <br /><br />
    <div class="container">
      <div
        v-for="(job, idx) in list"
        :key="idx"
        class="card-container"
        @click="intoJob(job)"
      >
        <div>
          <div class="overlay"></div>
          <div class="card">
            <h4>{{ job.name }}</h4>
            <h5>{{ job.area }}</h5>
            <span class="chev">&rsaquo;</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
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
    </div> -->
  </div>
</template>

<script setup>
import router from "../router";
let list = [
  {
    name: "产品运营",
    area: "Product operations",
  },
  {
    name: "平面设计师",
    area: "Graphic designer",
  },
  {
    name: "财务",
    area: "Treasurer",
  },
  {
    name: "市场营销",
    area: "Marketer",
  },
  {
    name: "项目主管",
    area: "Project Leader",
  },
  {
    name: "开发工程师",
    area: "Development Engineer",
  },
  {
    name: "文员",
    area: "Clerk",
  },
  {
    name: "电商运营",
    area: "E-commerce operators",
  },
  {
    name: "人力资源管理",
    area: "Human resource managers",
  },
  {
    name: "风控专员",
    area: "Risk Control Specialist",
  },
];
let intoJob = (job) => {
  router.push("/analysisPosts");
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.box {
  padding: 40px 100px;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  //flex-flow: row;
  perspective: 1000px;
  perspective-origin: center;
}

.card-container {
  cursor: pointer;
  position: relative;
  width: 31%;
  height: 160px;
  margin: 17px;
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
.card {
  border-radius: 5px;
  height: 160px;
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

.card-container:nth-of-type(1) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia22474-2000.jpg?itok=cajl1lYH");
}

.card-container:nth-of-type(2) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m18-090.jpg?itok=TQ8Fuk4x");
}

.card-container:nth-of-type(3) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/40808879360_18c96d62f1_o.jpg?itok=NttmTWPK");
}

.card-container:nth-of-type(4) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/jwst-pv-145604copy.jpg?itok=Jq7GN-Rc");
}

.card-container:nth-of-type(5) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/worldview201709201920x1080.png");
}

.card-container:nth-of-type(6) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/nasasibexobs.jpg?itok=U2LCp14i");
}

.card-container:nth-of-type(7) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia19808.jpg?itok=rgxgamMM");
}

.card-container:nth-of-type(8) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/e0102_lg.jpg?itok=sd9lOayI");
}

.card-container:nth-of-type(9) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/asteroid20180605-home.jpg?itok=KSUffiCR");
}
.card-container:nth-of-type(10) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia22474-2000.jpg?itok=cajl1lYH");
}

.card-container:nth-of-type(11) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m18-090.jpg?itok=TQ8Fuk4x");
}

.card-container:nth-of-type(12) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/40808879360_18c96d62f1_o.jpg?itok=NttmTWPK");
}

.card-container:nth-of-type(13) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/jwst-pv-145604copy.jpg?itok=Jq7GN-Rc");
}

.card-container:nth-of-type(14) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/worldview201709201920x1080.png");
}

.card-container:nth-of-type(15) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/nasasibexobs.jpg?itok=U2LCp14i");
}

.card-container:nth-of-type(16) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia19808.jpg?itok=rgxgamMM");
}

.card-container:nth-of-type(17) .card:before {
  background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/e0102_lg.jpg?itok=sd9lOayI");
}

.card-container:nth-of-type(18) .card:before {
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
</style>