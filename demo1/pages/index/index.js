//index.js
//获取应用实例
const app = getApp()
  var common = require('./module.js')
var types = ['default', 'primary', 'warn']
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    location:'non',
    hasUserInfo: false,
    array: [1, 2, 3, 4, 5],
    view: 'MINA',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    , items: [{
      index: 0,
      msg: 'this is a template',
      time: '2018-01-25',
      name: 'USA', value: '美国'
    }, {
      index: 1,
      msg: 'this is a template',
      time: '2018-01-25',
      name: 'CHN', value: '中国', checked: 'true'
      }, { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },]
    ,
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    console.log('checkbox发生change事件，携带value值为：', e.detail.value[0])
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
  onShow:function(){
    wx.login({
      complete: (res) => {
        console.log('wx.login',res);
      },
    })
  },

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
    console.log('1111111111111',e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  wxlogin:function(e){
    console.log('222222222222222',e)

  },
  // 获取地理位置
  getlocationFun:function(e){ 
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
   console.log(e);
   console.log(e.currentTarget.id);
   common.sayGoodbye('MINA')

 },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(typeof (e.detail.value));
    console.log(JSON.stringify (e.detail.value));

    wx.request({
      url: 'http://172.16.2.162/api/Position/Post',
      method:'POST',
      data: {
        DeviceID: 'wxlittleprogram',
        Longitude: '110',
        Latitude:'120',
        Mark: new Date().toString(),
        date:new Date()
      },
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
 
})
