<script setup>
import { ref } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { useLetterStore } from '@/stores'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const props = defineProps({
  type: {
    type: String,
  },
})
console.log(props.type, 'type')

const formData = ref({
  toName: '', // 称呼
  content: '', // 信件内容
  fromName: '', // 署名
  letterCount: 0, // 字数
})
// 字数
const changeContent = (ev) => {
  formData.value.letterCount = ev.length
}
// 判断letterStore是否有内容
const letterStore = useLetterStore()
console.log(letterStore.letterInfo, 'letterStore.letterInfo')
onLoad(() => {
  if (letterStore.letterInfo && letterStore.letterInfo.letterCount > 0) {
    formData.value = letterStore.letterInfo
  }
  console.log(formData.value, 'formData.value')
})
// 确认
const confirm = () => {
  //判断字段值不为空
  if (formData.value.toName == '') {
    return uni.showToast({ icon: 'none', title: '请输入称呼~' })
  } else if (formData.value.content == '') {
    return uni.showToast({ icon: 'none', title: '请输入内容~' })
  } else if (formData.value.fromName === '') {
    return uni.showToast({ icon: 'none', title: '请输入署名~' })
  } else {
    // 保存信件信息
    letterStore.setLetterInfo(formData.value)
    // 回显信件信息
    // uni.navigateTo({ url: '/pages/write/write?type=3' })
    uni.navigateBack()
  }
}
</script>

<template>
  <view class="letterEdit">
    <view class="content-t">
      <uni-easyinput
        class="toName"
        v-model="formData.toName"
        :inputBorder="false"
        :clearable="false"
        placeholder="请输入称呼，例如：亲爱的XX"
      />
      <uni-easyinput
        type="textarea"
        class="textarea"
        :maxlength="9000"
        v-model="formData.content"
        placeholder="请输入内容"
        :inputBorder="false"
        @input="changeContent"
      />
    </view>
    <view class="content-b">
      <view>{{ formData.letterCount }}/9000</view>
      <view class="content-b-r">
        <uni-easyinput
          class="fromName"
          v-model="formData.fromName"
          :inputBorder="false"
          :clearable="false"
          placeholder="请输入署名"
        />
        <uni-dateformat :date="Date.now()" format="yyyy/MM/dd"></uni-dateformat>
      </view>
    </view>
    <view class="button-group" :style="{ bottom: safeAreaInsets.bottom + 28 + 'px' }">
      <button class="button" v-if="type !== '4'">日记导入</button>
      <button class="button" v-if="type !== '4'">无需寄语</button>
      <button class="button" @tap="confirm">确定</button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.letterEdit {
  margin: 28rpx;
  font-size: 28rpx;
  color: #7e7e7e;
  background: #fff;
  .content-t {
    border: 1rpx dashed #ccc;
    padding: 24rpx;
  }

  .content-b {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: #f7f7f7;
    .content-b-r {
      text-align: right;
    }
  }
  .button-group {
    display: flex;
    background: #f7f7f7;
    position: absolute;
    left: 12rpx;
    right: 12rpx;
    .button {
      width: 30%;
    }
  }
}

::v-deep .content-b-r .uni-easyinput {
  text-align: right !important;
}
::v-deep .uni-easyinput__content-input {
  padding-left: 0 !important;
}
::v-deep .uni-easyinput__content-textarea {
  height: 60vh;
}
::v-deep .content-b .uni-easyinput__content {
  background: #f7f7f7 !important;
}
</style>
