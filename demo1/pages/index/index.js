//index.js
//获取应用实例
const app = getApp()
  var common = require('./module.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    location:'non',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  // 生命周期函数--监听页面显示
  onShow:function(){},

  // 页面下拉事件
  onPullDownRefresh:function(options){
    console.log("onPullDownRefresh"+JSON.stringify(options));
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function (options) {
    console.log("onReachBottom" + JSON.stringify(options));
    },
    //用户点击右上角转发
  onShareAppMessage:function(){
    console.log("onShareAppMessage");
    return {
      title: '自定义转发标题',
      path: '/page/index'
    }
  },
  //页面滚动触发事件的处理函数
  onPageScroll:function(){},
  //当前是 tab 页时，点击 tab 时触发
  onTabItemTap: function (item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
    },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取地理位置
 getlocatioFun:function(e){ 
   var that =this;
   wx.getLocation({
     type: '',
     altitude: true,
     success: function (res) {
       var latitude = res.latitude // 经度
       var longitude = res.longitude // 纬度
       that.setData({ location: latitude + ',' + longitude});
      },
     fail: function (res) { that.setData({ location: "fail"}); },
     complete: function (res) {  },
   }) 
   common.sayHello('MINA')
   common.sayGoodbye('MINA')
 }
 
})
