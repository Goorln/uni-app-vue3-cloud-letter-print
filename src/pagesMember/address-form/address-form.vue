<script setup>
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const baseFormData = ref({
  receiverName: '',
  receiverPhone: '',
  receiverFullLocation: '',
  receiverPostCode: '',
  receiverAddress: '',
  senderName: '',
  senderPhone: '',
  senderFullLocation: '',
  senderPostCode: '',
  senderAddress: '',
})
// 地址改变
const onRegionChange = (ev) => {
  console.log(ev)
  baseFormData.value.receiverFullLocation = ev.detail.value.join(' ')
  console.log(baseFormData.value)
}
// 表单校验规则
const rules = {
  receiverName: {
    rules: [{ required: true, errorMessage: '请输入收件人姓名' }],
  },
  receiverPhone: {
    rules: [
      { required: true, errorMessage: '请输入收件人联系方式' },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' },
    ],
  },
  receiverFullLocation: {
    rules: [{ required: true, errorMessage: '请选择收件人地区' }],
  },
  receiverAddress: {
    rules: [{ required: true, errorMessage: '请选择收件人详细地址' }],
  },
  senderName: {
    rules: [{ required: true, errorMessage: '请输入寄件人姓名' }],
  },
  senderPhone: {
    rules: [
      { required: true, errorMessage: '请输入寄件人联系方式' },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' },
    ],
  },
  senderFullLocation: {
    rules: [{ required: true, errorMessage: '请选择寄件人地区' }],
  },
  senderAddress: {
    rules: [{ required: true, errorMessage: '请选择寄件人详细地址' }],
  },
}
// 表单组件实例
const formRef = ref()
// 表单提交数据
const onSubmit = async () => {
  // 表单校验
  console.log(formRef.value, formRef.value.validate(), 'formRef.value')
  formRef.value.validate().then((res) => {
    console.log(res, 'res')
  })
}
</script>

<template>
  <view class="address-form">
    <uni-forms ref="formRef" :model="baseFormData" :rules="rules">
      <uni-section title="收件人信息" type="line">
        <uni-group mode="card">
          <uni-forms-item class="form-item" label="收件人姓名" name="receiverName" required>
            <uni-easyinput
              v-model="baseFormData.receiverName"
              placeholder="请输入收件人姓名"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
          <uni-forms-item class="form-item" label="收件人电话" name="receiverPhone" required>
            <uni-easyinput
              type="number"
              v-model="baseFormData.receiverPhone"
              placeholder="请输入收件人电话"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
          <uni-forms-item class="form-item" label="收件地址" name="receiverFullLocation" required>
            <picker
              class="picker"
              mode="region"
              :value="baseFormData.receiverFullLocation"
              @change="onRegionChange"
            >
              <view v-if="baseFormData.receiverFullLocation">{{
                baseFormData.receiverFullLocation
              }}</view>
              <view v-else class="placeholder">请选择省/市/区(县)</view>
            </picker>
          </uni-forms-item>
          <uni-forms-item class="form-item" label="收件人邮编" name="receiverPostCode" required>
            <uni-easyinput
              v-model="baseFormData.receiverPostCode"
              placeholder="邮编会根据地址自动填入"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
          <uni-forms-item class="form-item" label="详细地址" name="receiverAddress" required>
            <uni-easyinput
              v-model="baseFormData.receiverAddress"
              placeholder="请输入收件人详细地址"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
        </uni-group>
      </uni-section>
      <uni-section title="寄件人信息" type="line">
        <uni-group mode="card">
          <uni-forms-item class="form-item" label="寄件人姓名" name="senderName" required>
            <uni-easyinput
              v-model="baseFormData.senderName"
              placeholder="请输入寄件人姓名"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
          <uni-forms-item class="form-item" label="寄件人电话" name="senderPhone" required>
            <uni-easyinput
              type="number"
              v-model="baseFormData.senderPhone"
              placeholder="请输入寄件人电话"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
          <uni-forms-item class="form-item" label="寄件地址" name="senderFullLocation" required>
            <!-- <uni-easyinput
              v-model="baseFormData.senderFullLocation"
              placeholder="请输入寄件人地址"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            /> -->
            <picker
              class="picker"
              mode="region"
              :value="baseFormData.senderFullLocation"
              @change="onRegionChange"
            >
              <view v-if="baseFormData.senderFullLocation">{{
                baseFormData.senderFullLocation
              }}</view>
              <view v-else class="placeholder">请选择省/市/区(县)</view>
            </picker>
          </uni-forms-item>
          <uni-forms-item class="form-item" label="寄件人邮编" name="senderPostCode" required>
            <uni-easyinput
              v-model="baseFormData.senderPostCode"
              placeholder="邮编会根据地址自动填入"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
          <uni-forms-item class="form-item" label="详细地址" name="senderAddress" required>
            <uni-easyinput
              v-model="baseFormData.senderAddress"
              placeholder="请输入寄件人详细地址"
              :styles="{ borderColor: '#fff' }"
              :inputBorder="false"
            />
          </uni-forms-item>
        </uni-group>
      </uni-section>
    </uni-forms>
    <button class="button" :style="{ bottom: safeAreaInsets?.bottom + 'px' }" @tap="onSubmit">
      保存
    </button>
    <!-- 底部占位空盒子 -->
    <view class="toolbar-height"></view>
  </view>
</template>

<style scoped lang="scss">
.address-form {
  .picker {
    height: 62rpx;
    line-height: 62rpx;
    padding-left: 20rpx;
    .placeholder {
      color: #999;
      font-size: 24rpx;
    }
  }
  .button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    overflow: hidden;

    width: 80%;
    height: 68rpx;
    line-height: 68rpx;
  }
  .toolbar-height {
    height: 100rpx;
  }

  ::v-deep .uni-forms-item__error {
    padding-top: 0 !important;
  }
  ::v-deep .uni-forms-item {
    margin-bottom: 20rpx !important;
  }
  ::v-deep .uni-forms-item:last-child {
    margin-bottom: 0 !important;
  }
  ::v-deep .uni-forms-item__label {
    width: 200rpx !important;
  }
}
</style>
