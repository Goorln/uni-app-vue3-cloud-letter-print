<script setup>
import { ref, toRefs } from 'vue'
import { stepList, options } from '@/static/json/dataJson.js'
const optionsRef = toRefs(options)
console.log(optionsRef, 'optionsRef')
const count = ref(0)
</script>

<template>
  <view>
    <!-- 步骤条 -->
    <YxySteps :options="stepList" :active="1" />
    <YxyRadioItem v-model:options="options" @update:options="options = $event" />
    <YxyTest v-model:count="count" />
  </view>
</template>

<style lang="scss"></style>
