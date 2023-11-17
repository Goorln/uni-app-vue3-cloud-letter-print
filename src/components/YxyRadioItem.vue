<script setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { useLetterStore } from '@/stores'

const props = defineProps({
  options: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['update:selected'])
const selectedIndex = ref(0)
const onClickItem = (index) => {
  selectedIndex.value = index
  emit('update:selected', index)
  props.options.items.forEach((item, i) => {
    if (index === i) {
      item.current = !item.current
    } else {
      item.current = false
    }
  })
}

const imgArr = ref([])
const imagePath = ref()
const uploadImg = () => {
  uni.chooseImage({
    success: (res) => {
      imagePath.value = res.tempFilePaths[0]
      // 裁剪图片

      // console.log(res.tempFilePaths[0])
      imgArr.value.push(res.tempFilePaths[0])
      // console.log(imgArr.value)
    },
  })
}
// 删除照片
const delImg = (id) => {
  imgArr.value.splice(id, 1)
}
// 信件编辑
const formData = ref({
  toName: '', // 称呼
  content: '', // 信件内容
  fromName: '', // 署名
  letterCount: 0,
})
// 判断页面是否需要回显信件内容
// const type = ref('0')
const letterStore = useLetterStore()

onShow(() => {
  if (letterStore.letterInfo && letterStore.letterInfo.letterCount > 0) {
    formData.value = letterStore.letterInfo
  }
})
</script>

<template>
  <view class="radioItem">
    <text class="desc">{{ options.desc }}</text>
    <!-- 选项 -->
    <view class="option">
      <view
        v-for="(item, index) in options.items"
        :key="index"
        class="item"
        :class="item.current ? 'selected' : ''"
        @tap="onClickItem(index)"
      >
        <view class="item-t">{{ item.name }}</view>
        <view class="price"><text v-if="!options.showImg">￥</text>{{ item.price }}</view>
      </view>
      <view class="item" v-show="options.showImg">
        <view class="item-t"
          >数量: <text class="red">{{ imgArr.length ? imgArr.length : 0 }}</text> 张</view
        >
        <view
          >价格:
          <text class="red">{{
            imgArr.length && imgArr.length > 1 ? ((imgArr.length - 1) * 2.5).toFixed(1) : 0
          }}</text>
          元</view
        >
      </view>
    </view>
    <!-- 选择照片 -->
    <view class="images" v-if="options.showImg">
      <view v-if="options[0]?.current"></view>
      <view v-if="options[1]?.current">
        <view class="desc">选择您要添加的照片</view>
        <view class="imgItems">
          <view class="imgItem" v-for="(ite, j) in imgArr" :key="j">
            <image class="upload" :src="ite" mode="widthFix" />
            <view @click.stop="delImg(j)" style="display: inline">
              <uni-icons type="closeempty" class="close" size="20"></uni-icons>
            </view>
          </view>
          <image
            class="upload gray"
            @click="uploadImg"
            src="/static/images/picture.png"
            mode="widthFix"
          />
        </view>
      </view>
    </view>
    <!-- 信件内容 -->
    <view class="content">
      <navigator url="/pages/common/letterEdit" open-type="navigate" hover-class="none">
        <uni-easyinput
          class="toName"
          v-model="formData.toName"
          :inputBorder="false"
          :clearable="false"
          :disabled="true"
          placeholder="请输入称呼，例如：亲爱的XX"
        />
        <uni-easyinput
          type="textarea"
          v-model="formData.content"
          placeholder="请输入内容"
          :inputBorder="false"
          :disabled="true"
        ></uni-easyinput>
        <view class="content-b">
          <view>{{ formData.letterCount }}/9000</view>
          <view class="content-b-r">
            <uni-easyinput
              class="fromName"
              v-model="formData.fromName"
              :inputBorder="false"
              :clearable="false"
              :disabled="true"
              placeholder="请输入署名"
            />
            <uni-dateformat :date="Date.now()" format="yyyy/MM/dd"></uni-dateformat>
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<style scoped lang="scss">
.radioItem {
  background: #fff;
  margin-top: 20rpx;
  padding: 20rpx;
  .desc {
    font-size: 26rpx;
    color: #7e7e7e;
    margin-bottom: 20rpx;
  }

  .option {
    display: flex;
    flex-wrap: wrap;
    // align-items: center;
    // justify-content: space-between;
    margin: 20rpx 0;
    .item {
      width: 200rpx;
      border: 1rpx solid #ccc;
      text-align: center;
      padding: 15rpx 0;
      margin-right: 30rpx;
      margin-bottom: 20rpx;
      &:last-child {
        border: 0;
        width: 200rpx;
        text-align: left;
      }
      .item-t {
        padding-bottom: 8rpx;
      }
      .red {
        color: red;
      }
      &.selected {
        border: 1rpx solid #007aff;
        position: relative;
      }
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0rpx;
        right: 0rpx;
        border-bottom: 30rpx solid #007aff;
        border-left: 30rpx solid transparent;
      }
      &.selected::before {
        content: '';
        position: absolute;
        width: 15rpx;
        height: 8rpx;
        background: transparent;
        bottom: 10rpx;
        right: 0rpx;
        border: 2rpx solid white;
        border-top: none;
        border-right: none;
        transform: rotate(-55deg);
        z-index: 1;
      }
      .price {
        font-size: 26rpx;
        color: rgb(0, 106, 255);
      }
    }
  }
  .images {
    .imgItems {
      display: flex;
      flex-wrap: wrap;
      .imgItem {
        width: 200rpx;
        height: 300rpx;
        position: relative;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        border: 1px solid pink;
        overflow: hidden;
        .close {
          position: absolute;
          right: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.4);
          color: #fff;
        }
      }
    }
    .upload {
      width: 200rpx;
    }
    .gray {
      opacity: 0.6;
    }
  }
  .content {
    border: 1rpx dashed #ccc;
    padding: 28rpx;
    font-size: 28rpx;
    // color: #7e7e7e;
    .content-b {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .content-b-r {
        text-align: right;
      }
    }
  }
}
</style>
