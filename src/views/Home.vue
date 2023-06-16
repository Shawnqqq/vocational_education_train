<template>
  <div>
    <div class="title">职业技能培训</div>
  </div>
  <div class="content">
    <div
      class="item"
      @click="goPage('elementary')"
    >
      <div class="item-info" >
        <div class="item-name">初级保育师学习</div>
      </div>
      <div class="item-icon">></div>
    </div>
    <div
      class="item"
      @click="goPage('middle')"
    >
      <div class="item-info" >
        <div class="item-name">中级保育师学习</div>
      </div>
      <div class="item-icon">></div>
    </div>
    <div
      class="item"
      @click="goPage('middleNursery')"
    >
      <div class="item-info" >
        <div class="item-name">中级育婴师学习</div>
      </div>
      <div class="item-icon">></div>
    </div>
    <div
      class="item"
      @click="goPage('baoyushi')"
    >
      <div class="item-info" >
        <div class="item-name">保育师364题</div>
      </div>
      <div class="item-icon">></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goPage = (str) => {
  router.push({
    name: 'Level',
    params: {
      id: str
    }
  })
}
// a.forEach((d) => {
//   let one = {...d,"option": "正确"}, two = {...d,"option": "错误"}
//   b.push(one);
//   b.push(two);
// })
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
        font-size: 14px;
        font-weight: bold;
        color: rgba(0,0,0,0.7);
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