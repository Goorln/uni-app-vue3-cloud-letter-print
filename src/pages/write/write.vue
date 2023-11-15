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

<style lang="scss" scoped>
::v-deep .is-disabled {
  background-color: transparent !important;
}
::v-deep .content-b-r .uni-easyinput {
  text-align: right !important;
}
::v-deep .content .uni-easyinput__content-input {
  padding-left: 0 !important;
}
</style>
