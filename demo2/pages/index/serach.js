// pages/index/serach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    hotel:{},
    room:'',
    checkin: '', checkout: '', checkinshort:'',checkoutshort:'',
    roomnum:1
  },

/****************点击事件*********************/
  confirm:function(){
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    prevPage.setData({//直接给上移页面赋值 
      refcity: this.data.city,
      refhotel:this.data.hotel,
      refroom:this.data.room,
      refcheckin:this.data.checkin,
      refcheckout:this.data.checkout,
      refroomnum: this.data.roomnum
    });
    wx.navigateBack({//返回
      delta: 1
    }) 
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
   
  dateinputbindfocus:function(e){
    wx.navigateTo({
      url: './btCalendar',
    })
  },
/****************点击事件*********************/


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
    if (typeof (currPage.data.refcheckin) != "undefined" && typeof (currPage.data.refcheckout) != "undefined"){
      console.log("serach接收到日期" + currPage.data.refcheckin + "|||" + currPage.data.refcheckout);
      this.setData({ 
        checkin: currPage.data.refcheckin, checkout: currPage.data.refcheckout
        , checkinshort: currPage.data.refcheckin.substring(5), checkoutshort: currPage.data.refcheckout.substring(5)
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