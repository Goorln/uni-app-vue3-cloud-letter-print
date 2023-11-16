import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义Store
export const useLetterStore = defineStore(
  'letter',
  () => {
    // 信件信息
    const letterInfo = ref()

    // 保存信件信息
    const setLetterInfo = (val) => {
      letterInfo.value = val
    }

    //清除信件信息
    const clearLetterInfo = () => {
      letterInfo.value = undefined
    }

    return {
      letterInfo,
      setLetterInfo,
      clearLetterInfo,
    }
  },
  {
    // 小程序端持久化
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
