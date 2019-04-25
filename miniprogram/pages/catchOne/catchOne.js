// miniprogram/pages/catchOne/catchOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCard:false,
    name:'土元素',
    wg:'21',
    wf:'21',
    fg:'21',
    ff:'21',
    sm:'21',
    animalArr:['小呼噜', '猪刚鬣', '天蓬元帅', '瓷偶娃娃', '牵线傀儡', '落雁', '六耳猕猴', '玄灵六耳猴', '金灵童子', '金灵上仙', '金灵尊者', '小狐狸', '狐公子', '狐娘子', '红玉', '黄九郎', '酒狐', '乔娜', '婴宁', '黄甫公子', '秋容', '三魂', '七魂', '陆无名', '无影鼠', '捉妖记笨笨', '穿山甲', '搬山甲士', '御岭力士', '檐上喵', '喵大力', '猫头鹰', '夜行枭', '不眠生', '鹿跳跳', '鹿呦呦', '鹿鸣王', '书中仙', '白秋练', '孤白鳍', '江如愿', '麻将仔', '聚财小仙', '赌徒之魂', '小黑鱼', '鱼摆尾', '霸波尔奔', '三魂莫邪', '七魂莫邪', '莫邪', '三魂干将', '七魂干将', '干将', '布鲁', '一觉布鲁', '二觉布鲁', '捉妖记小花', '斗眼蟹', '小白蛇', '小盗鼠', '小安康', '火元宝宝', '土元宝宝', '金元宝宝', '水元宝宝', '木元宝宝', '元素值灵', '犀牛仔', '石灵', '巨灵神', '小蝌蚪', '护法蛙', '颜如玉', '狮小坏', '木人桩', '捉妖记血妖怪', '地火小龟', '银角小妖', '树桩凳', '咸鱼', '多余', '鲲', '金鼻白毛鼠', '迷蝴蝶', '小程序作者(捂脸)', '摸鱼', '超梦(不好意思走错片场了)', '大娃', '二娃', '三娃', '四娃', '五娃', '六娃', '七娃', '小蝙蝠', '六尾', '九尾', '金角小妖', '狻猊', '招风', '贪狼', '花无邪', '木偶娃娃', '蛇灵儿', '雷童子', '小葫芦', '风雪虎', '山毛毛', '螺莉莉', '小沙弥', '骰子', '命运之掷', '神之概率', '捉妖记骰子怪', '嘟嘟象', '玉兔', '浣小熊', '丹炉', '顽铜狮', '甲空空']
  },
  catchOne(){
    let name = this.data.animalArr[Math.floor(Math.random() * this.data.animalArr.length)]  
    let wg=Math.ceil(Math.random()*32)
    let wf = Math.ceil(Math.random() * 32)
    let fg = Math.ceil(Math.random() * 32)
    let ff = Math.ceil(Math.random() * 32)
    let sm = Math.ceil(Math.random() * 32)
    if (wf<10){
      wf='0'+wf
    }
    if (ff < 10) {
      ff = '0' + ff
    }
    if (wg < 10) {
      wg = '0' + wg
    }
    if (fg < 10) {
      fg = '0' + fg
    }
    if (sm < 10) {
      sm = '0' + sm
    }
    if (name =='超梦(不好意思走错片场了)'){
      wg = 12500
      wf = 28000
      fg = 89100
      ff = 56800
      sm = 62900
    }
    if (name =='小程序作者(捂脸)'){
      wg=32
      wf=32
      fg=32
      ff=32
      sm=32
    }

    this.setData({
      showCard:true,
      name,
      wg,
      wf,
      fg,
      ff,
      sm
    })
  },
  closeOne(){
    this.setData({
      showCard: false
    })
  },
  backHome() {
    wx.navigateTo({
      url: '/pages/seek/seek',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      title: '你甚至可以在《一起来捉妖》里捉到一只超梦！',
      imageUrl: "https://636c-cloudfdh-1259038312.tcb.qcloud.la/article/封面2.jpg?sign=3195976fb9c301ddc05900c6cc42e564&t=1555645749"
    }


  }
})