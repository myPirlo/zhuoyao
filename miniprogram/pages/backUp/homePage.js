// miniprogram/pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[],
    pageStart: 0,
    pageNum: 2,
    needGetList: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },
  getList(){
    wx.showLoading({
      title: '',
    })
    let _this=this
    const db = wx.cloud.database()
    const _ = db.command
    db.collection('articles').where({
      id: _.gte(_this.data.pageStart).and(_.lte((_this.data.pageNum)))
    }).orderBy('id', 'desc').get({
      success(res) {
        wx.hideLoading()
        if (res.data.length < 3) {
          _this.setData({
            needGetList: false
          })
        }
        let listArr = _this.data.articles.concat(res.data)
        _this.setData({
          articles: listArr
        })
      }
    })
  },
  toDetail(e){
    console.log(e)
    let articleId=e.currentTarget.dataset.articleid
    wx.navigateTo({
      url: `/pages/articleDetail/articleDetail?id=`+articleId,
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
    if (!this.data.needGetList) {
      console.log('没有数据了')
      return
    }
    this.setData({
      pageStart: this.data.pageStart + 3,
      pageNum: this.data.pageNum + 3
    })
    this.getList()
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