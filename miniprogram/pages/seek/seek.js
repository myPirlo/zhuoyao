const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        mask:true,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

      wx.getStorage({
        key: 'name',
        success(res) {
          wx.switchTab({
            url: '/pages/homePage/homePage',
          })
        }
      }) 
      //但愿不会再用上这段代码
      // let _this=this
      // db.collection('mask').get({
      //   success(res) {
      //     if(res.data[0].isShow=='0'){
      //       _this.setData({
      //         mask: false
      //       })
      //       wx.getStorage({
      //         key: 'name',
      //         success(res) {
      //           wx.switchTab({
      //             url: '/pages/homePage/homePage',
      //           })
      //         }
      //       }) 
      //     }
      //   }
      // })
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
    },
    catchOne(){
      wx.showToast({
        title: '捕捉成功',
      })
    } 
    
})