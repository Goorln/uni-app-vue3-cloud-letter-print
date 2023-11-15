<script setup>
import { ref } from 'vue'
import { stepList, options } from '@/static/json/dataJson.js'
const selectedIndex = ref(0)
</script>

<template>
  <view>
    <!-- 步骤条 -->
    <YxySteps :options="stepList" :active="1" />
    <YxyRadioItem
      v-model:options="options"
      @update:options="options = $event"
      v-model:selected="selectedIndex"
      @update:selected="
        (index) => {
          options.items[index].current = true
          options.items.forEach((item) => {
            if (item !== options.items[index]) {
              item.current = false
            }
          })
        }
      "
    />
  </view>
</template>

<style lang="scss"></style>
