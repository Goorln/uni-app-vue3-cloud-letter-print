<script setup>
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import LetterSection from '@/pages/index/components/LetterSection.vue'
import SpecService from '@/pages/index/components/SpecService.vue'
</script>

<template>
  <CustomNavbar />
  <LetterSection />
  <SpecService />
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
}
</style>
