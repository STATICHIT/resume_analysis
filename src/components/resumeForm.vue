<!--
 * @Author: STATICHIT
 * @Date: 2023-07-01 14:51:55
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-07-05 16:57:47
 * @FilePath: \resume_analysis\src\components\resumeForm.vue
 * @Description: 简历表单
-->
<template>
  <div class="box1">
    <div>
      <div id="javascript_header"></div>
      <form>
        <h2>个人详细信息</h2>
        <div class="form-group">
          <label for="name">姓名<span>*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="张三"
          />
          <div id="name__error" class="error"></div>
        </div>
        <div class="form-group">
          <label for="address">地址</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="上海市徐汇区龙瑞路77弄1-15号"
          />
        </div>
        <div class="form-group">
          <label for="phone">电话</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+1  123 456 7890"
          />
        </div>
        <div class="form-group">
          <label for="email">电子邮件 <span>*</span></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
          <div id="email__error" class="error"></div>
        </div>
        <div class="form-group">
          <label for="about">关于你</label>
          <textarea
            name="about"
            id="about"
            placeholder="三四句话介绍你的个性、职业道德、兴趣或者更多"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="career">职业目标</label>
          <textarea
            name="career"
            id="career"
            placeholder="一两句话关于你希望在职业生涯中完成什么"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="education">教育</label>
          <textarea
            name="education"
            id="education"
            placeholder="列出任何已完成的高中、大学或其他教育课程"
          ></textarea>
        </div>
        <div class="line-break"></div>

        <h2>工作经历</h2>

        <h3>最近的工作</h3>
        <div class="form-date-group">
          <div class="form-group">
            <label for="job-1__start">开始日期</label>
            <input type="date" name="job-1__start" id="job-1__start" />
          </div>
          <div class="form-group">
            <label for="job-1__end">结束日期</label>
            <input type="date" name="job-1__end" id="job-1__end" />
          </div>
        </div>
        <div class="form-group">
          <label for="job-1__details">职位详情</label>
          <textarea name="job-1__details" id="job-1__details"></textarea>
        </div>
        <div class="line-break"></div>

        <h3>过往工作</h3>
        <div class="form-date-group">
          <div class="form-group">
            <label for="job-2__start">开始日期</label>
            <input type="date" name="job-2__start" id="job-2__start" />
          </div>
          <div class="form-group">
            <label for="job-2__end">结束日期</label>
            <input type="date" name="job-2__end" id="job-2__end" />
          </div>
        </div>
        <div class="form-group">
          <label for="job-2__details">职位详情</label>
          <textarea name="job-2__details" id="job-2__details"></textarea>
        </div>
        <div class="line-break"></div>

        <h3>另一份过去的工作</h3>
        <div class="form-date-group">
          <div class="form-group">
            <label for="job-3__start">开始日期</label>
            <input type="date" name="job-3__start" id="job-3__start" />
          </div>
          <div class="form-group">
            <label for="job-3__end">结束日期</label>
            <input type="date" name="job-3__end" id="job-3__end" />
          </div>
        </div>
        <div class="form-group">
          <label for="job-3__details">职位详情</label>
          <textarea name="job-3__details" id="job-3__details"></textarea>
        </div>
        <div class="line-break"></div>
        <div class="form-group">
          <label for="references">备注</label>
          <textarea name="references" id="references"></textarea>
        </div>
        <input type="submit" value="开始分析" id="create-resume" />
      </form>
    </div>
  </div>
</template>

<script setup>
const getState = () => {
  const $ = (element) => {
    return document.getElementById(element).value;
  };

  const state = {
    name: $("name"),
    address: $("address"),
    phone: $("phone"),
    email: $("email"),
    about: $("about"),
    career: $("career"),
    education: $("education"),
    job1: {
      date: {
        start: $("job-1__start"),
        end: $("job-1__end"),
      },
      details: $("job-1__details"),
    },
    job2: {
      date: {
        start: $("job-2__start"),
        end: $("job-2__end"),
      },
      details: $("job-2__details"),
    },
    job3: {
      date: {
        start: $("job-3__start"),
        end: $("job-3__end"),
      },
      details: $("job-3__details"),
    },
    references: $("references"),
  };
  return state;
};

const checkName = () => {
  const name = document.getElementById("name");
  const name_error = document.getElementById("name__error");
  const isValid = !!name.value;
  if (!isValid) {
    name.classList.add("error__input");
    name_error.style.display = "block";
    name_error.innerHTML = "姓名不能为空";
    console.log("error");
  } else {
    name.classList.remove("error__input");
    name_error.style.display = "none";
  }
  return isValid;
};

const checkEmail = () => {
  const email = document.getElementById("email");
  const email_error = document.getElementById("email__error");
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = emailRegex.test(String(email.value).toLowerCase());
  if (!email.value) {
    email.classList.add("error__input");
    email_error.style.display = "block";
    email_error.innerHTML = "电子邮箱不能为空";
  } else {
    if (!isValid) {
      email.classList.add("error__input");
      email_error.style.display = "block";
      email_error.innerHTML = "邮箱不合法";
    } else {
      email.classList.remove("error__input");
      email_error.style.display = "none";
    }
  }
  return isValid;
};

const checkValidity = () => {
  const nameIsValid = checkName();
  const emailIsValid = checkEmail();
  if (!nameIsValid) {
    location.hash = "#name";
  } else if (!emailIsValid) {
    location.hash = "#email";
  }
  return nameIsValid && emailIsValid;
};
window.onload = function () {
  document.getElementById("create-resume").addEventListener("click", (e) => {
    e.preventDefault();
    const isValid = checkValidity();
    if (isValid) buildResume(getState());
  });

  document.getElementById("name").addEventListener("blur", checkName);

  document.getElementById("email").addEventListener("blur", checkEmail);
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box1 {
  padding-bottom: 30px;
}
form {
  width: 100%;
  max-width: 700px;
}

form h2 {
  margin-top: 14px;
  margin-bottom: 16px;
  width: 100%;
  font-size: 1.25rem;
  text-align: center;
}

form h3 {
  box-sizing: border-box;
  border-left: 3px solid transparent;
  margin-top: 14px;
  padding: 0px 32px;
  width: 100%;
  font-size: 1.1rem;
  text-align: left;
}

.form-group {
  box-sizing: border-box;
  width: 100%;
  padding: 15px 32px;
  border-left: 3px solid transparent;
  transition: 0.2s all;
}


.form-date-group {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 24px 32px;
  border-left: 3px solid transparent;
}

.form-date-group .form-group {
  padding: 0px;
}

.form-date-group .form-group:hover {
  border-left: 3px solid transparent;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  display: block;
}

.form-group label span {
  color: red;
}

form .line-break {
  width: 100%;
  height: 1px;
  margin: 16px auto;
  border-bottom: 1px solid #eee;
}

input[type="text"]::placeholder,
input[type="date"]::placeholder,
textarea::placeholder {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

input[type="text"],
input[type="date"],
textarea {
  font-size: 1.05rem;
  font-weight: 600;
  font-family: inherit;
  box-sizing: border-box;
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: 0.2s border;
  width: 100%;
  font-size: 1rem;
}

textarea {
  max-width: 633px;
}

input[type="text"]:focus,
input[type="date"]:focus,
textarea:focus {
  outline: none;
  border-color: #1de9b6;
}

input[type="submit"] {
  width: 200px;
  margin-top: 20px;
  background: #1de9b6;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  font-family: inherit;
  letter-spacing: 0.3px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0), 0 1px 2px rgba(0, 0, 0, 0);
}

input[type="submit"]:hover {
  margin-top: -1px;
  margin-bottom: 1px;
  background: #64ffda;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.14);
}

input[type="submit"]:active {
  background: #00bfa5;
  margin-top: 0px;
  margin-bottom: 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0), 0 1px 2px rgba(0, 0, 0, 0);
}

.error__input {
  border-color: red !important;
}

.error {
  color: red;
}
</style>