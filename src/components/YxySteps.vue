<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  active: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <view class="steps">
    <uni-steps :options="options" :active="active" />
  </view>
</template>

<style lang="scss">
.steps {
  background: #fff;
  padding: 20rpx 0;
}
</style>
