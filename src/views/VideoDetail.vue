<template>
  <div>
    <div class="go-back" @click="goBack">&lt;</div>
    <div class="title">{{title}}</div>
    <div class="content">
      content
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute(),router = useRouter();
const goBack = () => {
  router.go(-1)
};
const title = route.query.title || '职业技能培训'
const videoId = route.params.id;
console.log(videoId)

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
}
</style>