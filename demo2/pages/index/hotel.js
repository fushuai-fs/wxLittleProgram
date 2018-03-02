// pages/index/hotel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },
  itemclick: function (e) {
    var value = e.target.dataset.value;
   
     var result = this.data.array.filter(item => item.HotelCode==value);
     
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    prevPage.setData({//直接给上移页面赋值 
      refhotel: result[0]
    });
    wx.navigateBack({//返回
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this
      wx.request({
        url: 'http://172.16.1.51:91/data/HotelInfoHandler.ashx',  
        dataType:'json',
        data: {
          action: "LoadHotel", cityID: 0 //options.city 
        },
        header: {
          'content-type': 'application/json'  
        },
        success: function (res) {
          console.log(res)
          if (res.data.msg=='success'){
            that.setData({
              array:res.data.Data,
            });
          }
          console.log(that.data.array)
        }
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})