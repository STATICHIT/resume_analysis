<template>
  <div>
    <div class="so_condition J_so_condition" style="margin-top: 40px">
      <div class="lefttit">地标地段</div>
      <div class="rs">
        <div class="li select">全杭州</div>
        <div class="li">上城区</div>
        <div class="li">下城区</div>
        <div class="li">江干区</div>
        <div class="li">拱墅区</div>
        <div class="li">西湖区</div>
        <div class="li">滨江区</div>
        <div class="li">萧山区</div>
        <div class="li">余杭区</div>
        <div class="li">桐庐县</div>
        <div class="li">淳安县</div>
        <div class="li">建德市</div>
        <div class="li">富阳市</div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
      <div class="lefttit">工作经验</div>
      <div class="rs">
        <div class="li select">不限</div>
        <div class="li">无经验</div>
        <div class="li">1年以下</div>
        <div class="li">1-3年</div>
        <div class="li">3-5年</div>
        <div class="li">5-10年</div>
        <div class="li">10年以上</div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>

      <div class="lefttit">简历标签</div>
      <div class="rs">
        <div class="li select">不限</div>
        <div class="li">形象好</div>
        <div class="li">能出差</div>
        <div class="li">很幽默</div>
        <div class="li">技术精悍</div>
        <div class="li">高学历</div>
        <div class="li">经验丰富</div>
        <div class="li">能加班</div>
        <div class="li">海归</div>
        <div class="li">会开车</div>
        <div class="li">口才好</div>
        <div class="li">会应酬</div>
        <div class="li">外语好</div>
        <div class="li">性格开朗</div>
        <div class="li">有上进心</div>
        <div class="li">人脉广</div>
        <div class="li">知识丰富</div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
      <div class="lefttit">更多筛选</div>
      <div class="rs">
        <div class="bli" style="">
          <el-select
            v-model="value1"
            multiple
            placeholder="性别"
            style="width: 100px"
          >
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <div class="clear"></div>
        </div>

        <div class="bli" style="">
          <el-select
            v-model="value2"
            multiple
            placeholder="年龄"
            style="width: 120px"
          >
            <el-option
              v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <div class="clear"></div>
        </div>

        <div class="bli">
          <el-select
            v-model="value3"
            multiple
            placeholder="学历要求"
            style="width: 120px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

          <div class="clear"></div>
        </div>
        <div class="bli" style="">
          <el-select
            v-model="value4"
            multiple
            placeholder="工作性质"
            style="width: 120px"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <div class="clear"></div>
        </div>
        <div class="bli" style="">
          <el-select
            v-model="value5"
            multiple
            placeholder="期望薪资"
            style="width: 160px"
          >
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <div class="clear"></div>
        </div>
        <div class="bli" style="">
          <el-select
            v-model="value6"
            multiple
            placeholder="行业类别"
            style="width: 200px"
          >
            <el-option
              v-for="item in options6"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value1 = ref(["Option0"]);
const value2 = ref(["Option0"]);
const value3 = ref(["Option0"]);
const value4 = ref(["Option0"]);
const value5 = ref(["Option0"]);
const value6 = ref(["Option0"]);
const value7 = ref(["Option0"]);

const options = [
  {
    value: "Option0",
    label: "不限",
  },
  {
    value: "Option1",
    label: "初中",
  },
  {
    value: "Option2",
    label: "高中",
  },
  {
    value: "Option3",
    label: "大专",
  },
  {
    value: "Option4",
    label: "本科",
  },
  {
    value: "Option5",
    label: "硕士",
  },
  {
    value: "Option5",
    label: "博士",
  },
  {
    value: "Option5",
    label: "博士后",
  },
];
const options2 = [
  {
    value: "Option0",
    label: "不限",
  },
  {
    value: "Option1",
    label: "全职",
  },
  {
    value: "Option2",
    label: "兼职",
  },
  {
    value: "Option3",
    label: "实习",
  },
];
const options3 = [
  {
    value: "Option0",
    label: "不限",
  },
  {
    value: "Option1",
    label: " 1.5K~2K/月",
  },
  {
    value: "Option2",
    label: "3K~5K/月",
  },
  {
    value: "Option3",
    label: " 5K~10K/月",
  },
  {
    value: "Option4",
    label: " 10K以上/月",
  },
];
const options4 = [
  {
    value: "Option0",
    label: "不限",
  },
  {
    value: "Option1",
    label: "男",
  },
  {
    value: "Option2",
    label: "女",
  },
];

const options5 = [
  {
    value: "Option0",
    label: "全部",
  },
  {
    value: "Option2",
    label: "16-20岁",
  },
  {
    value: "Option3",
    label: "21-30岁",
  },
  {
    value: "Option3",
    label: "31-40岁",
  },
  {
    value: "Option3",
    label: "41-50岁",
  },
  {
    value: "Option3",
    label: "50岁以上",
  },
];
const options6 = [
  {
    value: "Option0",
    label: "不限",
  },
  {
    value: "Option1",
    label: "计算机软件/硬件",
  },
  {
    value: "Option2",
    label: "互联网/电子商务",
  },
  {
    value: "Option3",
    label: "计算机系统/维修",
  },
];
</script>

<style lang="scss" scoped>
.so_condition {
  width: 1198px;
  height: 280px;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px #eeeeee solid;
  padding-top: 10px;
  padding-bottom: 20px;
  background-color: #fff;
}
.so_condition .lefttit {
  width: 90px;
  font-weight: 900;
  padding-right: 15px;
  float: left;
  text-align: right;
  padding-top: 8px;
  margin-top: 15px;
}

.so_condition .rs {
  width: 1010px;
  margin-top: 15px;
  float: left;
}

.so_condition .rs .li {
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  height: 26px;
  line-height: 26px;
  float: left;
  border: 1px #ffffff solid;
  background-color: #ffffff;
  margin-right: 8px;
  border-radius: 3px;
  margin-top: 5px;
}
.so_condition .rs .li:hover {
  color: #a75b5b;
  border: 1px #a75b5b solid;
  background-color: #d6cdcd;
}
.clear {
  clear: both;
  height: 0px;
  font-size: 0px;
  line-height: 0px;
}

.so_condition .rs .bli {
  height: 30px;
  line-height: 30px;
  margin-right: 25px;
  float: left;
  cursor: pointer;
  margin-top: 3px;
}
.so_condition .rs .li.select {
    border: 1px #FF6600 solid;
    background-color: #FFF7EE;
    color: #FF6600;
}
h1,
h2,
h3,
h4,
h5,
form,
p,
ul,
input {
  margin: 0px;
  padding: 0px;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>