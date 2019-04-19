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
    zizhi:[],
    attr:[]
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
  changeZizhi(e){
    this.setData({
      zizhi:e.detail.value
    })
  },
  changeAttr(e){
    this.setData({
      attr:e.detail.value
    })
  },
  beginCal(){
    if(this.data.zizhi.length==0){
      wx.showToast({
        title: '请选择妖灵主资质',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if(this.data.attr.length==0){
      wx.showToast({
        title: '请选择妖灵属性',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if(this.data.attr.length>2){
      wx.showToast({
        title: '最多选择两种属性',
        icon: 'none',
        duration: 2000
      })
      return
    }
    console.log(this.calScore())
  },
  calScore(){
    let sum=0;
    let baseScore=40
    for(var i=0;i<this.data.barItem.length;i++){
      if(this.data.zizhi.indexOf(String(i))!=-1){
        //如果是主属性,价值乘以1.9,否则乘以0.5
        sum+=this.data.barItem[i].value*1.9
      }else{
        sum+=this.data.barItem[i].value*0.5
      }
    }
    let score=sum+baseScore
    for(var i=0;i<this.data.attr.length;i++){
      if(0<=this.data.attr[i]&&this.data.attr[i]<=5){
        score*=1
      }
      if(6<=this.data.attr[i]&&this.data.attr[i]<=8){
        score*=1.4
      }
      if(9<=this.data.attr[i]&&this.data.attr[i]<=11){
        score*=1.6
      }
      if(12<=this.data.attr[i]&&this.data.attr[i]<=14){
        score*=1.8
      }
      if(15<=this.data.attr[i]&&this.data.attr[i]<=17){
        score*=2
      }
    }
    return Math.ceil(score)
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

  }
})