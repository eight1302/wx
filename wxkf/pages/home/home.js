var app = getApp();
var shoplist = new Array();
Page({
  data: {
    imgUrls: [
      '../img/timg.jpg',
      '../img/timg1.jpg',
      '../img/timg2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    bg: '#C79C77',
    Height:"0",     //这是swiper要动态设置的高度属性
    goodsList: [
      {
          id: 1,
          imgUrl: 'https://img.alicdn.com/imgextra/i3/1917047079/TB2AaEabamWQ1JjSZPhXXXCJFXa_!!1917047079.png_430x430q90.jpg',
          title: 'Apple/苹果 iPhone 8 Plus',
          oldPrice: 6800.00,
          newPrice: 5999.00
      },
      {
          id: 2,
          imgUrl: 'http://gju1.alicdn.com/tps/i3/192621929/O1CN011Q7WTXXNeJeemt4_!!0-item_pic.jpg_400x400Q90.jpg_.webp',
          title: 'yaloo/雅鹿情侣中长款2018羽绒服女',
          oldPrice: 4099.00,
          newPrice: 1299.00
      },
      {
          id: 3,
          imgUrl: '//gju1.alicdn.com/tps/i1/O1CN01zpSGPq1K5KvAe60gb_!!0-juitemmedia.jpg_400x400Q90.jpg_.webp',
          title: 'SPORT b.2019早春新品潮流小恐龙印',
          oldPrice: 2100.00,
          newPrice: 1089.00
      },
      {
          id: 4,
          imgUrl: 'http://gju3.alicdn.com/bao/uploaded/i2/2670830951/O1CN011Itb7YP3LPr5XHA-2670830951.jpg_560x560Q90.jpg',
          title: 'GEGINA蓝黑色棉质条纹V领秋冬女士长款开衫',
          oldPrice: 2800.00,
          newPrice: 729.00
      },
      {
          id: 5,
          imgUrl: 'http://gju2.alicdn.com/bao/uploaded/i3/O1CN01L5e0Ti29oGA9arggg_!!0-juitemmedia.jpg_560x560Q90.jpg',
          title: '宝格丽水能量碧蓝男士淡香水50ml',
          oldPrice: 600,
          newPrice: 319
      },
      {
          id: 600,
          imgUrl: 'https://img.alicdn.com/imgextra/i3/2315591133/TB2vPLRgBUSMeJjy1zjXXc0dXXa_!!2315591133.jpg_430x430q90.jpg',
          title: '利仁200F多功能电热锅火锅分体304不锈钢电迷你电煮锅学生锅赠吹风机或定制蒸笼 304不锈钢',
          oldPrice: 99.00,
          newPrice: 89.00
      }
  ]
  },
  goToDetail : function(data){
    shoplist.push(data.target.dataset);
    wx.setStorageSync('shop', shoplist);
  }
})