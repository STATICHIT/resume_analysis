<template>
  <div class="box">
    <div class="logos">
      <img src="../../assets/智能互联云_智能互联引擎.png" class="logoImg" />
      <span class="logo">云简智能</span>
    </div>
    <div class="cont ins" :class="{ 's--signup': isSignUpActive }">
      <div class="form sign-in">
        <h2>你好😀，欢迎回来。</h2>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <p class="forgot-pass">Forget Password ?</p>
        <button type="button" class="submit" @click="router.push('/main')">
          登 录
        </button>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>没有账号?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img__text m--in">
            <h2>已有账号?</h2>
            <p>
              If you already has an account, just sign in. We've missed you!
            </p>
          </div>
          <div class="img__btn fa">
            <div class="clickdiv" @click="change"></div>
            <span class="m--up">立即注册</span>
            <span class="m--in">立即登录</span>
          </div>
        </div>
        <div class="form sign-up" style="padding: 100px 0">
          <h2>你好，在此注册账号。</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <label>
            <span>Make_Sure_Password</span>
            <input type="password2" />
          </label>
          <button type="button" class="submit">注 册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../../router";
let isSignUpActive = ref(false);
let change = () => {
  console.log("我进来了，当前isSignUpActive是：", isSignUpActive.value);
  isSignUpActive.value = !isSignUpActive.value;
};
</script>

<style lang="scss" scoped>
@use "sass:math";
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.box {
  background-color: rgba(236, 243, 250, 0.479);
  height: 970px;
  padding: 200px;
  position: relative;
}
.logos {
  position: absolute;
  top: 50px;
  left: 120px;
}
body {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  background: #ededed;
}

.logoImg {
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 10px;
}
.logo {
  line-height: 60px;
  color: #6671e3;
  margin-right: 40px;
  font-size: 35px;
  font-weight: 500;
}

.ins {
  padding: 100px 0;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.fa {
  position: relative;
}
.clickdiv {
  position: absolute;
  z-index: 10;
  width: 100px;
  height: 40px;
}

input,
button {
  border: none;
  outline: none;
  background: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

$contW: 900px;
$imgW: 260px;
$formW: $contW - $imgW;
$switchAT: 1.2s;

$inputW: 260px;
$btnH: 36px;

$diffRatio: math.div($contW - $imgW, $contW);

@mixin signUpActive {
  .cont.s--signup & {
    @content;
  }
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  overflow: hidden;
  position: relative;
  width: $contW;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
}

.form {
  position: relative;
  width: $formW;
  height: 100%;
  transition: transform $switchAT ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: $formW;
  top: 0;
  width: $contW;
  height: 100%;
  padding-left: $imgW;
  background: #fff;
  transition: transform $switchAT ease-in-out;

  @include signUpActive {
    transform: translate3d($formW * -1, 0, 0);
  }
}

button {
  display: block;
  margin: 0 auto;
  width: $inputW;
  height: $btnH;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: $imgW;
  height: 100%;
  padding-top: 360px;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: $contW;
    height: 100%;
    background-image: url("https://pic1.zhimg.com/80/v2-904505bcf0c424788f6028b8952aa2e7_720w.webp?source=1940ef5c");
    background-size: cover;
    transition: transform $switchAT ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  @include signUpActive {
    &:before {
      transform: translate3d($formW, 0, 0);
    }
  }

  &__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    transition: transform $switchAT ease-in-out;

    h2 {
      margin-bottom: 10px;
      font-weight: normal;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }

    &.m--up {
      @include signUpActive {
        transform: translateX($imgW * 2);
      }
    }

    &.m--in {
      transform: translateX($imgW * -2);

      @include signUpActive {
        transform: translateX(0);
      }
    }
  }

  &__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: $btnH;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;

    &:after {
      content: "";
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 30px;
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform $switchAT;

      &.m--in {
        transform: translateY($btnH * -2);

        @include signUpActive {
          transform: translateY(0);
        }
      }

      &.m--up {
        @include signUpActive {
          transform: translateY($btnH * 2);
        }
      }
    }
  }
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: $inputW;
  margin: 25px auto 0;
  text-align: center;

  span {
    font-size: 12px;
    color: #cfcfcf;
    text-transform: uppercase;
  }
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #99a0f0;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: darken(#d3dae9, 20%);

  span {
    font-weight: bold;
    color: darken(#768cb6, 20%);
  }
}

.sign-in {
  transition-timing-function: ease-out;

  @include signUpActive {
    transition-timing-function: ease-in-out;
    transition-duration: $switchAT;
    transform: translate3d($formW, 0, 0);
  }
}

.sign-up {
  transform: translate3d($contW * -1, 0, 0);

  @include signUpActive {
    transform: translate3d(0, 0, 0);
  }
}

.icon-link {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;

  img {
    width: 100%;
    vertical-align: top;
  }

  &--twitter {
    left: auto;
    right: 5px;
  }
}
</style>