Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      console.log(1)
      wx.getStorage({
        key: 'name',
        success(res) {
          wx.switchTab({
            url: '/pages/homePage/homePage',
          })
        }
      }) 
    },
    /**
     * 设置初始化值
     */

    // 订制
    toBegin(e) {
      //授权成功
      if(e.detail.userInfo){
        wx.setStorage({
          key: 'name',
          data: e.detail.userInfo.nickName
        })
        wx.switchTab({
          url: '/pages/homePage/homePage',
        })
      }
      //拒绝
    },
    crossToBegin(){
      wx.switchTab({
        url: '/pages/homePage/homePage',
      })
    }
})