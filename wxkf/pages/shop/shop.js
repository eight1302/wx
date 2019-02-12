Page({
  data: {
      carts:[],               // 购物车列表
      hasList:false,          // 列表是否有数据
      totalPrice:0.00,           // 总价，初始为0
      selectAllStatus:false    // 全选状态，默认全选
  },
  onLoad: function () {
    if(this.data.carts.lenght>0){
      this.data.carts.lenght=0;
    }else{
      this.data.carts=0;
    }
   
    this.data.carts = wx.getStorageSync('shop');
    this.setData(this.data)
  },
  onShow() {
      this.onLoad();
  },
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for(let i = 0; i<carts.length; i++) {         // 循环列表得到每个数据
        if(carts[i].selected) {                   // 判断选中才会计算价格
            total += carts[i].price;     // 所有价格加起来
        }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
        carts: carts,
        totalPrice: total.toFixed(2)
    });
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;                    // 获取购物车列表
    const selected = carts[index].selected;         // 获取当前商品的选中状态
    carts[index].selected = !selected;              // 改变状态
    this.setData({
        carts: carts
    });
    this.getTotalPrice();                           // 重新获取总价
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
        carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
        selectAllStatus: selectAllStatus,
        carts: carts
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);              // 删除购物车列表里这个商品
    wx.setStorageSync('shop', carts);
    this.setData({
        carts: carts
    });
    if(!carts.length){                  // 如果购物车为空
        this.setData({
            hasList: false             // 修改标识为false，显示购物车为空页面
        });
    }else{                              // 如果不为空
        this.getTotalPrice();           // 重新计算总价格
    }   
  },
  pay_on(e){
    wx.removeStorage({
      key: 'shop',
      success: function() {
        wx.setStorageSync('pay',e.currentTarget.dataset);
        wx.requestPayment({
          'timeStamp': '',
          'nonceStr': '',
          'package': '',
          'signType': 'MD5',
          'paySign': '',
          'success':function(res){
            console.log(res);
          },
          'fail':function(res){
           
          }
       });
      } 
    });
    wx.setData({                                // 最后赋值到data中渲染到页面
      totalPrice: 0.00
    });
    wx.onShow();
  }
})