import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 购物车数据
    const cartInfo = ref([])

    // 定义加入购物车的方法
    const addCart = (goods) => {
      // 如果商品被添加两次则数量加一
      const item = cartInfo.value.find((item) => item.id === goods.id)
      if (item) {
        item.quantity++
      } else {
        cartInfo.value.push({
          id: goods.id,
          name: goods.name,
          price: goods.price,
          picture: goods.picture,
          quantity: 1,
        })
      }
    }

    // 计算总数量
    const allCount = computed(() => cartInfo.value.reduce((pur, cur) => pur + cur.quantity, 0))
    //  计算总价
    const allPrice = computed(() => cartInfo.value.reduce((x, y) => x + y.quantity * y.price, 0))

    // 清除购物车数据
    const clearCartInfo = () => {
      cartInfo.value = []
    }

    return {
      cartInfo,
      addCart,
      allCount,
      allPrice,
      clearCartInfo,
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
