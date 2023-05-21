<!--
 * @Author: STATICHIT
 * @Date: 2023-05-21 17:18:54
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-05-21 21:02:46
 * @FilePath: \resume_analysis\src\views\test\test2.vue
 * @Description: 自定义
-->

<template>
  <div>
    <div class="options">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="['option', { active: option.active }]"
        :style="{ '--optionBackground': option.background }"
        @click="toggleActive(option)"
      >
        <div class="shadow"></div>
        <div class="label">
          <div class="icon">
            <i class="fas" :class="option.icon"></i>
          </div>
          <div class="info">
            <div class="main">{{ option.main }}</div>
            <div class="sub">{{ option.sub }}</div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="http://victorofvalencia-blog.tumblr.com"
      target="_blank"
      class="credit"
      >Photos from Victor of Valencia on tumblr</a
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
const options = ref([
  {
    background:
      "url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)",
    icon: "fas fa-walking",
    main: "简历分析",
    sub: "Omuke trughte a otufta",
    active: true,
  },
  {
    background:
      "url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)",
    icon: "fas fa-snowflake",
    main: "人才画像",
    sub: "Omuke trughte a otufta",
    active: false,
  },
  {
    background:
      "url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg)",
    icon: "fas fa-tree",
    main: "人岗匹配",
    sub: "Omuke trughte a otufta",
    active: false,
  },
  {
    background:
      "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)",
    icon: "fas fa-tint",
    main: "人才库",
    sub: "Omuke trughte a otufta",
    active: false,
  },
  {
    background:
      "url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg)",
    icon: "fas fa-sun",
    main: "XXXX",
    sub: "Omuke trughte a otufta",
    active: false,
  },
]);

function toggleActive(option) {
  options.value.forEach((opt) => {
    opt.active = false;
  });
  option.active = true;
}
</script>

<style lang="scss" scoped>
$optionDefaultColours: #ed5565, #fc6e51, #ffce54, #2ecc71, #5d9cec, #ac92ec;

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;

  font-family: "Roboto", sans-serif;
  transition: 0.25s;

  .credit {
    position: absolute;
    bottom: 20px;
    left: 20px;

    color: inherit;
  }
  .options {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;

    min-width: 600px;
    max-width: 900px;
    width: calc(100% - 100px);

    height: 400px;

    @for $i from 1 through 4 {
      @media screen and (max-width: 798px) {
        min-width: 600px - $i * 80;
        .option:nth-child(#{6-$i}) {
          display: none;
        }
      }
    }

    .option {
      position: relative;
      overflow: hidden;

      min-width: 60px;
      margin: 10px;
      //border:0px solid --defaultColor;

      background: var(--optionBackground, var(--defaultBackground, #e6e9ed));
      background-size: auto 120%;
      background-position: center;

      cursor: pointer;

      transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

      @for $i from 1 through length($optionDefaultColours) {
        &:nth-child(#{$i}) {
          --defaultBackground: #{nth($optionDefaultColours, $i)};
        }
      }
      &.active {
        flex-grow: 10000;
        transform: scale(1);

        max-width: 600px;
        margin: 0px;
        border-radius: 40px;

        background-size: auto 100%;
        .shadow {
          box-shadow: inset 0 -120px 120px -120px black,
            inset 0 -120px 120px -100px black;
        }
        .label {
          bottom: 20px;
          left: 20px;
          .info > div {
            left: 0px;
            opacity: 1;
          }
        }
        /*&:active {
               transform:scale(0.9);
            }*/
      }
      &:not(.active) {
        flex-grow: 1;

        border-radius: 30px;
        .shadow {
          bottom: -40px;
          box-shadow: inset 0 -120px 0px -120px black,
            inset 0 -120px 0px -100px black;
        }
        .label {
          bottom: 10px;
          left: 10px;
          .info > div {
            left: 20px;
            opacity: 0;
          }
        }
      }
      .shadow {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;

        height: 120px;

        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      }
      .label {
        display: flex;
        position: absolute;
        right: 0px;

        height: 40px;
        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
        .icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          min-width: 40px;
          max-width: 40px;
          height: 40px;
          border-radius: 100%;

          background-color: white;
          color: var(--defaultBackground);
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;

          margin-left: 10px;

          color: white;

          white-space: pre;
          > div {
            position: relative;

            transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
              opacity 0.5s ease-out;
          }
          .main {
            font-weight: bold;
            font-size: 1.2rem;
          }
          .sub {
            transition-delay: 0.1s;
          }
        }
      }
    }
  }
}
</style>