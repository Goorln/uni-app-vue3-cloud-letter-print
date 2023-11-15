//子组件 Children
<template>
  <h1>{{ count }}</h1>
  <button @click="addCount">点击改变父组件的值</button>
</template>
<script setup>
import { ref, defineProps, reactive, onMounted, watch } from 'vue'
const props = defineProps({
  count: { type: Number, required: true },
})
const emit = defineEmits(['update:count'])
const addCount = () => {
  emit('update:count', props.count + 1)
}
</script>
