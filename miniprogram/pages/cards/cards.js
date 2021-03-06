// miniprogram/pages/cards/cards.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSearchIcon:true,
    openid:'',
    searchData:'',
    cardItems:[],
    pageStart:0,
    pageNum:8,
    needGetList:true,
    moreTips:'上拉加载更多...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },
  
  getList(){
    let _this=this
    const db = wx.cloud.database()
    const _ = db.command
    wx.showLoading({
      title: '',
    })
    db.collection('guaiwu').where({
      id:_.gte(_this.data.pageStart).and(_.lte((_this.data.pageNum)))
    }).get({
      success(res) {
        wx.hideLoading()
        console.log(res.data)
        if(res.data.length<9){
          _this.setData({
            needGetList:false
          })
        }
        let listArr=_this.data.cardItems.concat(res.data)
        _this.setData({
          cardItems:listArr
        })
      },
      fail(){
        wx.hideLoading()
      }
    })
  },
  onReachBottom: function () {
      if(!this.data.needGetList){
        this.setData({
          moreTips:'没有更多了...'
        })
        return
      }
      console.log('加载下一页')
      this.setData({
        pageStart:this.data.pageStart+9,
        pageNum:this.data.pageNum+9
      })
      console.log(this.data.pageStart,this.data.pageNum)
      this.getList()
  },
  inputSearch(e){
    this.setData({
      searchData:e.detail.value
    })
  },
  searchFocus(){
    this.setData({
      showSearchIcon:false
    })
  },
  searchBulr(){
    this.setData({
      showSearchIcon:true
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