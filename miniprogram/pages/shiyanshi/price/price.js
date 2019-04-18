// miniprogram/pages/shiyanshi/price/price.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barItem:[
      {
        name:'物攻',
        value:16,
        isMain:false
      },
      {
        name:'物防',
        value:16,
        isMain:false
      },
      {
        name:'法攻',
        value:16,
        isMain:false
      },
      {
        name:'法防',
        value:16,
        isMain:false
      },
      {
        name:'生命',
        value:16,
        isMain:false
      }
    ],
    attribute:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  barChange(e){
    let index=e.currentTarget.dataset.index
    let thisItem="barItem["+index+"].value"
    this.setData({
      [thisItem]:e.detail.value
    })
  },
  beginCal(){
    console.log(this.data.barItem)
  },
  changeCheck(e){
    console.log(e)
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

  }
})