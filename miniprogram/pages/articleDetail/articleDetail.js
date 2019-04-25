// miniprogram/pages/articleDetail/articleDetail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:'',
    title:'',
    author:'',
    date:'',
    articleImg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showArticle(options.id)

  },
  backHome(){
    wx.navigateTo({
      url: '/pages/seek/seek',
    })

  },
  showArticle(id){
    let _this=this
    const db = wx.cloud.database()
    db.collection('articles').where({
      id:parseInt(id)
    }).get({
      success(res) {
        console.log(res.data)
        _this.setData({
          article:res.data[0].content,
          title: res.data[0].articleTitle,
          date: res.data[0].publicTime,
          author: res.data[0].author,
          articleImg: res.data[0].articleImg
        })
        WxParse.wxParse('article', 'html', _this.data.article, _this, 5);
      }
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
  onShareAppMessage: function () {
    return {
      title: this.data.title,
      imageUrl: this.data.articleImg
    }

  }
})