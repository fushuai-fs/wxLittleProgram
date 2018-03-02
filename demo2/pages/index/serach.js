// pages/index/serach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    hotel:{},
    room:'',
    daterange:'',
    roomnum:1
  },
 
  confirm:function(){
    console.log('开始搜索啦');
  },
 
  cityinputbindfocustest: function (e) {
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    prevPage.setData({//直接给上移页面赋值 
      refcity: this.data.city
    });
    wx.navigateBack({//返回
      delta: 1
    }) 
  },
  /*选择城市*/
  cityinputbindfocus: function (e) {
   wx.navigateTo({
     url: './city',
   })
  },
  hotelinputbindfocus:function(e){
    wx.navigateTo({
      url: './hotel?city='+this.data.city,
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
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1]; 
    if (typeof (currPage.data.refcity) != "undefined") {
      this.setData({//将携带的参数赋值
        city: currPage.data.refcity
      });
    }
   
    if (typeof (currPage.data.refhotel) !="undefined"){
      this.setData({
        hotel: currPage.data.refhotel
      });
    }
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
  
  }
})