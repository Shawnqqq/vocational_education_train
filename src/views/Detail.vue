<template>
  <div>
    <div class="go-back" @click="goBack">&lt</div>
    <div class="title">{{key}}</div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { middleResource } from '../resource';
import { ref } from 'vue';
const route = useRoute(),router = useRouter();

const type = route.query.type,key = route.params.id;
let resource = ref({});
if (type === 'middle') {
  resource = middleResource
}
const question_origin = resource[key] || []

let data = ref([])
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
console.log(data)
const goBack = () => {
  router.go(-1)
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
</style>