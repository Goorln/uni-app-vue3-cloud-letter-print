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

export const options1 = [
  { name: '无照片', price: '￥0.00', current: false },
  { name: '上传照片', price: '首张免费', current: true },
]

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
}
// type,0 => 线上写信, 1 => 手写拍照, 2 => 钢笔代写，3=> 是否回显
export const letterPopupList = [
  {
    text: '线上写信,方便快捷',
    button: '线上写信',
    type: '0',
  },
  {
    text: '手写信件,情怀满满',
    button: '手写拍照',
  },
  {
    text: '钢笔代写,真情流露',
    button: '钢笔代写',
  },
]

export const postcardPopupList = [
  {
    text: '线上写明信片,方便快捷',
    button: '线上编辑',
  },
  {
    text: '钢笔代写明信片,情怀满满',
    button: '钢笔代写',
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
    picture: 'https://z1.ax1x.com/2023/11/17/pitL3U1.jpg',
    name: '日历',
    desc: '每份3封，自带邮票',
    salesVolume: 9389,
    price: 9.9,
  },
  {
    id: '5',
    picture: 'https://z1.ax1x.com/2023/11/17/pitLI5q.png',
    name: '表情贴',
    desc: '每份3封，自带邮票',
    salesVolume: 9389,
    price: 9.9,
  },
  {
    id: '6',
    picture: 'https://z1.ax1x.com/2023/11/17/pitLXqJ.png',
    name: '姓名贴纸',
    desc: '每份3封，自带邮票',
    salesVolume: 9389,
    price: 9.9,
  },
  {
    id: '7',
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
