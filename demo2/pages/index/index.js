//index.js
//获取应用实例
const app = getApp()

Page({
  data: { 
    dialog: { title: '提示', content:'提示内容'},
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    address:"",
    array:[]
  },
  /********************点击事件**************************/
  showDialog:function() { 
    this.setData({
      dialog: {title:'',content:'你要干什么？'}
    });
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
,
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  serachinputbindfocus:function(e){
    wx.navigateTo({
      url: './serach'
    })
  },
  /********************点击事件**************************/

  onLoad: function (option) {
    console.log(option);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


   
  },
 
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  ,
   /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
   
    var that = this
    wx.request({
      url: 'http://localhost:63147/api/App/hotel',
      method: 'POST',
      dataType: 'json',
      data: {
        cityName: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        // if (res.data.msg == 'success') {
          that.setData({
            array: res.data,
          });
        // }
        // console.log(that.data.array)
      }
    }) 
  },
    /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // //获得dialog组件
      this.dialog = this.selectComponent("#dialog");
  },
  ready: function () {
    this.animation = wx.createAnimation({
      duration: this.data.animationOption.duration,
      timingFunction: "linear",
      delay: 0
    });
  },
})
