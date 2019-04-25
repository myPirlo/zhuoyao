// miniprogram/pages/shiyanshi/overview/overview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },
  toPriceView(){
    wx.navigateTo({
      url: '/pages/shiyanshi/price/price',
    })
  },
  toStepView(){
    wx.navigateTo({
      url: '/pages/tobeContinue/tobeContinue',
    })
  },
  toCatchView(){
    wx.navigateTo({
      url: '/pages/catchOne/catchOne',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '《一起来捉妖》!带你一发入魂满32资质妖灵',
      imageUrl: "https://636c-cloudfdh-1259038312.tcb.qcloud.la/article/封面2.jpg?sign=3195976fb9c301ddc05900c6cc42e564&t=1555645749"
    }
  }
})