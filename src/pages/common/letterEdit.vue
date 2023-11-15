<script setup>
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(uni.getSystemInfoSync(), safeAreaInsets, 'safeAreaInsets')
const formData = ref({
  toName: '', // 称呼
  content: '', // 信件内容
  fromName: '', // 署名
  letterCount: 0,
})
// 字数
const changeContent = (ev) => {
  console.log(ev, ev.length, 'e')
  formData.value.letterCount = ev.length
}
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
    // 返回上一页
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
      <button class="button">日记导入</button>
      <button class="button">无需寄语</button>
      <button class="button" @tap="confirm">确定</button>
    </view>
    <!-- <uni-forms :model="formData">
      <uni-forms-item label="" name="toName">
        <uni-easyinput
          class="toName"
          v-model="formData.toName"
          :inputBorder="false"
          :clearable="false"
          placeholder="请输入称呼，例如：亲爱的XX"
        />
      </uni-forms-item>
      <uni-forms-item label="" name="content">
        <uni-easyinput
          type="textarea"
          class="textarea"
          :maxlength="9000"
          v-model="formData.content"
          placeholder="请输入内容"
          :inputBorder="false"
          @input="changeContent"
        />
      </uni-forms-item>

    </uni-forms> -->
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
