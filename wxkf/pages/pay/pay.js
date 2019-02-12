Page({
  data: {
      carts:[],               // 购物车列表
      payAll : '',
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
    this.data.carts = wx.getStorageSync('pay').carts;
    this.data.payAll = "消费总金额："+wx.getStorageSync('pay').pay;
    this.setData(this.data)
  },
  onShow() {
      this.onLoad();
  }
})