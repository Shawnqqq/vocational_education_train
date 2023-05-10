<template>
  <div>
    <div class="go-back" @click="goBack">&lt;</div>
    <div class="title">{{key}}</div>
    <div class="content">
      <div class="content-head">
        <div class="progress">{{questionIndex + 1}} / {{data.length}}</div>
        <div class="menu" @click="drawerVisible = true">列表</div>
      </div>
      <div class="content-body">
        <div class="stem">{{currentQuestion.id}}. {{ currentQuestion.stem }}</div>
        <div class="option-section">
          <el-radio
            v-model="answer"
            v-for="(item,index) in currentQuestion.options"
            :key="index"
            :label="index"
            @click="handleShowAnswer"
          >{{item}}</el-radio>
        </div>
      </div>
      <div class="answer" v-show="showAnswer">正确答案为：{{currentQuestion.answer}}</div>
    </div>
    <div class="footer-btn">
      <div :class="['prev btn',{disable: questionIndex <= 0}]" @click="handlePage('prev')">上一题</div>
      <div :class="['next btn',{disable: questionIndex >= data.length - 1}]" @click="handlePage('next')">下一题</div>
    </div>
    <el-drawer
      title="题目列表"
      v-model="drawerVisible"
      direction="rtl"
      style="width:80%"
    >
      <div class="question-list">
        <div class="item" v-for="item in data.length" :key="item" @click="goQuestion(item - 1)">{{ item }}</div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import typeArr from '../resource';
import { computed, ref } from 'vue';
const route = useRoute(),router = useRouter();
// 数据获取
const type = route.query.type,key = route.params.id;
let resource = typeArr[type] || {}
const question_origin = resource[key] || []
// 数据过滤
const data = ref([])
question_origin.forEach((d) => {
  const temp = data.value.find((i) => i.id === d.question_id)
  if (temp) {
    temp.options.push(d.option)
  } else {
    data.value.push({
      id: d.question_id,
      stem: d.stem,
      answer: d.answer,
      options: [d.option]
    })
  }
})

let questionIndex = ref(0);
let currentQuestion = computed(() => {
  return data.value[questionIndex.value] || {}
})
let answer = ref(null);
let showAnswer = ref(false);
let drawerVisible = ref(false);

const goBack = () => {
  router.go(-1)
}
const handleShowAnswer = () => {
  showAnswer.value = true
}
const handlePage = (type) => {
  if (type === 'prev' && questionIndex.value > 0) {
    questionIndex.value --
    showAnswer.value = false;
    answer.value = null;
    return;
  }
  if (type === 'next' && questionIndex.value < data.value.length - 1) {
    questionIndex.value ++
    showAnswer.value = false;
    answer.value = null;
    return;
  }
}
const goQuestion = (num) => {
  questionIndex.value = num;
  showAnswer.value = false;
  answer.value = null;
  drawerVisible.value = false;
}
</script>

<style lang="less" scoped>
.title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  font-size: 12px;
  background-color: #fff;
  box-shadow: 1px 0px 5px 0 rgba(0,0,0,.03);
}
.go-back {
  position: absolute;
  left: 4px;
  font-size: 16px;
  color: #000;
  z-index: 2;
  padding: 12px;
}
.content {
  padding: 20px 14px;
  .content-head {
    padding: 0 10px;
    margin-right: -6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .progress {
      font-size: 14px;
      color: rgba(0,0,0,0.65);
    }
    .menu {
      padding: 4px;
      font-size: 14px;
      color: #409eff;
    }
  }
  .content-body {
    margin-top: 12px;
    padding: 20px 16px 0 16px;
    background-color: #fff;
    border-radius: 8px;
    .stem {
      margin-bottom: 30px;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0,0,0,0.85);
    }
    .option-section {
      .el-radio {
        margin-bottom: 28px;
        height: auto;
        white-space: pre-wrap;
        align-items: flex-start;
        /deep/.el-radio__input {
          margin-top: 2px;
        }
      }
    }
  }
  .answer {
    margin: 20px 0 0 8px;
    font-size: 16px;
    color: rgba(0,0,0,0.85);
  }
}
.footer-btn {
  position: fixed;
  left: 20px;
  bottom: 30px;
  .btn {
    width: calc(100vw - 40px);
    height: 42px;
    background-image: linear-gradient(to right, #385ffb ,#476bfd, #527afc);
    border-radius: 8px;
    text-align: center;
    line-height: 42px;
    font-size: 13px;
    color: #fff;
    &.prev {
      margin-bottom: 16px;
    }
    &.disable {
      background-image: none;
      background-color: #e3e3e3;
      cursor: not-allowed;
      &:active {
        background-color: #e3e3e3;
      }
    }
    &:active {
      background-color: #527afc90;
      background-image: none;
    }
  }
}
/deep/.el-drawer {
  width: 80% !important;
}
.question-list {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    margin: 0 15px 15px 0;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: rgba(0,0,0,0.85);
    border: 1px solid rgba(0,0,0,0.65);
    border-radius: 2px;
    background-color: #f5f5f5;
    &:active {
      background-color: #e3e3e3;
    }
  }
}
</style>