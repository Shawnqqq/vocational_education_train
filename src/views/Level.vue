<template>
  <div>
    <div class="go-back" @click="goBack">&lt;</div>
    <div class="title">{{ title }}</div>
  </div>
  <div class="content">
    <div
      v-for="(value,key) in data"
      :key="key"
      class="item"
      @click="value.length ? goDetail(titles[key]) : goVideoDetail(value,titles[key])"
    >
      <div class="item-info">
        <div class="item-name">{{titles[key]}}</div>
        <div class="item-count" v-show="value.length">题目数量：<strong>{{value.length}}</strong></div>
      </div>
      <div class="item-icon">></div>
    </div>
  </div>
</template>

<script setup>
import typeArr from '../resource';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter(),route = useRoute();
const type = route.params.id;
let resource = typeArr[type] || {}
const typeTitle = {
  'middle': '中级保育师',
  'elementary': '初级保育师',
  'middleNursery': '中级育婴师',
  'baoyushi': '保育师364题',
  'middleNurseryVideo': '中级保育师实操视频'
}
let title = typeTitle[type] || '职业技能培训'
// 数据过滤
let data = [];
if (type === 'middleNurseryVideo') {
  data = Object.values(resource).map((r) => ({id: r}))
} else {
  data = Object.values(resource).map((r) => {
    const result = [];
    r.forEach((d) => {
      const temp = result.find((i) => i.id === d.question_id)
      if (temp) {
        temp.options.push(d.option)
      } else {
        result.push({
          id: d.question_id,
          stem: d.stem,
          answer: d.answer,
          options: [d.option]
        })
      }
    })
    return result
  })
}
const titles = Object.keys(resource);

const goDetail = (data) => {
  router.push({
    name: 'Detail',
    params: {
      id: data
    },
    query: {
      type
    }
  })
}
const goVideoDetail = (value,title) => {
  router.push({
    name: 'VideoDetail',
    params: {
      id: value.id
    },
    query: {
      title
    }
  })
}
const goBack = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 1px 0px 5px 0 rgba(0,0,0,.03);
  letter-spacing: 1px;
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
  padding: 12px 24px;
  .item {
    margin: 12px 0;
    padding: 0 12px;
    width: 100%;
    height: 56px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    align-items: center;
    .item-info {
      .item-name {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: bold;
        color: rgba(0,0,0,0.7);
      }
      .item-count {
        font-size: 12px;
        color: rgba(0,0,0,0.35);
        strong {
          color: #93A9FF;
        }
      }
    }
    .item-icon {
      margin-left: auto;
      font-size: 14px;
      color: rgba(0,0,0,0.75);
    }
  }
}
</style>