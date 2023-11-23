export const normalLetterInstrcImgs = ['https://z1.ax1x.com/2023/11/17/pitRteO.png']

export const postcardInstrcImgs = [
  'https://z1.ax1x.com/2023/11/17/pitRyOf.jpg',
  'https://z1.ax1x.com/2023/11/17/pitRyOf.jpg',
]

export const stepList = [
  {
    title: '选择照片',
  },
  {
    title: '填写信件',
  },
  {
    title: '选择模板',
  },
  {
    title: '选择商品',
  },
  {
    title: '确认支付',
  },
]

export const options11 = [
  { name: '无照片', price: '￥0.00', current: false },
  { name: '上传照片', price: '首张免费', current: true },
]

// 线上写信
export const options = {
  desc: '请选择需要的信件字数',
  items: [
    { name: '1500字', price: '0.00', current: true },
    { name: '3000字', price: '2.00', current: false },
    { name: '4500字', price: '4.00', current: false },
    { name: '6000字', price: '6.00', current: false },
    { name: '7500字', price: '8.00', current: false },
    { name: '9000字', price: '10.00', current: false },
  ],
  showImg: false,
  showWrite: true,
}

// 手写拍照
export const options1 = {
  desc: `1. 请将您写好的信，将信纸铺平拍照，我们复印出来；
         2. 手写的信，请放在光亮的地方拍照，不要有阴影；
         3. 可使用手机自带的扫描功能，效果更佳`,
  items: [
    { name: '1张照片', price: '2.00', current: true },
    { name: '2张照片', price: '4.00', current: false },
    { name: '3张照片', price: '6.00', current: false },
    { name: '4张照片', price: '8.00', current: false },
    { name: '5张照片', price: '10.00', current: false },
    { name: '6张照片', price: '12.00', current: false },
    { name: '7张照片', price: '14.00', current: false },
    { name: '8张照片', price: '16.00', current: false },
    { name: '9张照片', price: '18.00', current: false },
  ],
  showImg: true,
}

// 钢笔代写
export const options2 = {
  desc: '请选择需要的信件字数',
  items: [
    { name: '1000字', price: '19.00', current: true },
    { name: '2000字', price: '29.00', current: false },
    { name: '3000字', price: '39.00', current: false },
    { name: '4000字', price: '49.00', current: false },
    { name: '5000字', price: '59.00', current: false },
    { name: '6000字', price: '69.00', current: false },
  ],
  showImg: false,
  showWrite: true,
}

export const mailingOptions = {
  desc: '邮寄方式',
  items: [
    { name: '挂号信', price: '10.00元', current: true },
    { name: '平信', price: '5.00元', current: false },
    { name: 'EMS', price: '30.00元', current: false },
    { name: '顺丰', price: '30.00元', current: false },
  ],
  showImg: false,
  showWrite: false,
}
// type,0 => 线上写信, 1 => 手写拍照, 2 => 钢笔代写
export const letterPopupList = [
  {
    text: '线上写信,方便快捷',
    button: '线上写信',
    type: '0',
  },
  {
    text: '手写信件,情怀满满',
    button: '手写拍照',
    type: '1',
  },
  {
    text: '钢笔代写,真情流露',
    button: '钢笔代写',
    type: '2',
  },
]

export const postcardPopupList = [
  {
    text: '线上写明信片,方便快捷',
    button: '线上编辑',
    type: '3',
    path: '/pages/postcard/index',
  },
  {
    text: '钢笔代写明信片,情怀满满',
    button: '钢笔代写',
    type: '4',
    path: '/pages/common/letterEdit',
  },
]

// 信纸模板图片地址
export const galleryLists = [
  {
    picture: 'https://z1.ax1x.com/2023/11/16/pittn9H.jpg',
    title: '可爱信纸',
    price: 0,
    current: true,
    type: 1,
  },
  {
    picture: 'https://z1.ax1x.com/2023/11/16/pitt3Hf.jpg',
    title: '可爱信纸',
    price: 0,
    current: false,
    type: 2,
  },
  {
    picture: 'https://z1.ax1x.com/2023/11/16/pittJUS.jpg',
    title: '可爱信纸',
    price: 0,
    current: false,
    type: 3,
  },
  {
    picture: 'https://z1.ax1x.com/2023/11/16/pittNCQ.jpg',
    title: '可爱信纸',
    price: 0,
    current: false,
    type: 4,
  },
  {
    picture: 'https://z1.ax1x.com/2023/11/16/pittn9H.jpg',
    title: '可爱信纸',
    price: 0,
    current: false,
    type: 1,
  },
]

export const goodsList = [
  {
    id: '1',
    picture: 'https://z1.ax1x.com/2023/11/17/pitLRKg.png',
    name: '信封',
    desc: '每份3封，自带邮票',
    salesVolume: 9389,
    price: 9.9,
  },
  {
    id: '2',
    picture: 'https://z1.ax1x.com/2023/11/17/pitLe3T.jpg',
    name: '信纸',
    desc: '每份3封，自带邮票',
    salesVolume: 9389,
    price: 9.9,
  },
  {
    id: '3',
    picture: 'https://z1.ax1x.com/2023/11/17/pitL1ER.jpg',
    name: '邮票',
    desc: '每份3封，自带邮票',
    salesVolume: 9389,
    price: 9.9,
  },
  {
    id: '4',
    picture: 'https://z1.ax1x.com/2023/11/17/pitO9G6.jpg',
    name: '生日贺卡',
    desc: '每份3封，自带邮票',
    salesVolume: 9389,
    price: 9.9,
  },
]

export const feeInfo = [
  {
    name: '原订单原价',
    price: '0',
  },
  {
    name: '原订单实付价',
    price: '0',
  },
  {
    name: '原订单优惠价',
    price: '0',
  },
  {
    name: '商品费用',
    price: '0',
  },
  {
    name: '照片费用',
    price: '0',
  },
  {
    name: '彩印费用',
    price: '0',
  },
  {
    name: '信件费用',
    price: '0',
  },
  {
    name: '模板费用',
    price: '0',
  },
  {
    name: '邮费（快递）',
    price: '0',
  },
  {
    name: '总费用',
    price: '0',
  },
  {
    name: '优惠券',
    price: '0',
  },
]
