// miniprogram/pages/shiyanshi/price/price.js
const app = getApp();
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
  return(){
    wx.switchTab({
      url:'/pages/homePage/homePage'
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
    if(this.data.zizhi.length>2){
      wx.showToast({
        title: '最多选择两种主属性',
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
    this.calScore()
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
    let scoreArr=[]
    for(var i=0;i<this.data.barItem.length;i++){
      scoreArr[i]=this.data.barItem[i].value
    }
    //极品
    let x=0
    let y=0
    let z=0
    let m=0
    let n=0
    for(var i=0;i<scoreArr.length;i++){
      if(scoreArr[i]>=30){
        x++
      }else{
        y=scoreArr[i]
      }
      if(scoreArr[i]==32){
        z++
      }
      if(scoreArr[i]<10){
        m++
      }
      if(20<=scoreArr[i]&&scoreArr[i]<=29){
        n++
      }
    }
    let resultContent=''
    if(x==4&&y<20){
      console.log('瘸腿')
      resultContent='比较奇葩的属性,四极品资质却有一个瘸腿,若瘸腿属性不是主属性的话还是可以出手,只是价格会大打折扣'
    }else if(z==5){
      console.log('极品')
      resultContent='可遇而不可求的极品妖灵,欧皇必备神器。当前市场对于满属性的妖灵更是供不应求,自己用或者出手都是血赚'
    }else if(x>=3){
      console.log('出色')
      resultContent='资质算得上是很不错的妖灵了,只是因为其他几个资质不是极品,出手的话价格方面会比较尴尬。但如果是主资质占优,还是很有利用的价值'
    }else if(m==5){
      console.log('超低')
      resultContent='非酋说的就是你了!!千万别卖掉,留着做个纪念吧...毕竟全区能抓到这样全资质超低的也是很少啦'
    }else if(n==5){
      console.log('鸡肋')
      resultContent='食之无味,弃之可惜资质。目前市场并不看好这类全资质中等偏上的妖灵,所以还是推荐自用吧'
    }else{
      console.log('平庸')
      resultContent='平平无奇的资质,基本没有什么亮点。当然目前大多数野生妖灵都是这个天赋,当饲料卖了是最好的选择了'
    }
    app.globalData.Price={
      endScoreArr:scoreArr,
      endScore:Math.ceil(score),
      content:resultContent
    }
    wx.navigateTo({
      url:'/pages/shiyanshi/priceResult/priceResult'
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

  }
})