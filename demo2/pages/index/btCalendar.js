// pages/index/btCalendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkin: '2018-03-11', checkout:'2018-03-19',
    month:3,
    array: [{
      "month": "2018年03月",
      "days": [{
        "id": 1, "date": "2018-03-05", "number": "05", "flag": ""
          }, {
          "id": 2, "date": "2018-03-06", "number": "06", "flag": ""
          },{
          "id": 3, "date": "2018-03-07", "number": "07", "flag": ""
          }, {
            "id": 3, "date": "2018-03-08", "number": "08", "flag": ""
          }, {
            "id": 3, "date": "2018-03-09", "number": "09", "flag": ""
          }, {
            "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
          }, {
            "id": 1, "date": "2018-03-05", "number": "05", "flag": "入住"
          }, {
            "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
          }, {
            "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
          }, {
            "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
          }, {
            "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
          }, {
            "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
          },   {
            "id": 3, "date": "2018-03-08", "number": "", "flag": ""
          }, {
            "id": 3, "date": "2018-03-09", "number": "", "flag": ""
          }, {
            "id": 3, "date": "2018-03-10", "number": "", "flag": ""
          }, {
            "id": 3, "date": "2018-03-11", "number": "", "flag": ""
          }]
    }, {
      "month": "2018年03月",
      "days": [{
        "id": 1, "date": "2018-03-05", "number": "05", "flag": "入住"
      }, {
        "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
      }, {
        "id": 1, "date": "2018-03-05", "number": "05", "flag": "入住"
      }, {
        "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
      }, {
        "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
      }, {
        "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-11", "number": "11", "flag": "入住"
      }, {
        "id": 2, "date": "2018-03-06", "number": "06", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-07", "number": "07", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-08", "number": "08", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-09", "number": "09", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-10", "number": "10", "flag": "入住"
      }, {
        "id": 3, "date": "2018-03-08", "number": "", "flag": ""
      }, {
        "id": 3, "date": "2018-03-09", "number": "", "flag": ""
      }, {
        "id": 3, "date": "2018-03-10", "number": "", "flag": ""
      }, {
        "id": 3, "date": "2018-03-11", "number": "", "flag": ""
      }]
    }]
  },
/*************点击事件******************/
  selectdate:function(e){    
    var selectdate = e.currentTarget.dataset.date;
    var checkin = this.data.checkin;
    var checkout =this.data.checkout; 
    if (checkin&&checkout){
      this.setData({ checkin: selectdate, checkout: "" }); 
    }else if (!checkin || checkin>selectdate) { 
        this.setData({ checkin: selectdate}); 
    } else if (!checkout || checkin<selectdate){
      this.setData({ checkout: selectdate }); 
      let pages = getCurrentPages();//当前页面
      let prevPage = pages[pages.length - 2];//上一页面
      prevPage.setData({//直接给上移页面赋值 
        refcheckout: this.data.checkout,
        refcheckin: this.data.checkin
      });
      wx.navigateBack({//返回
        delta: 1
      })  
       }
  },
/*************点击事件******************/


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
  //num传入的数字，n需要的字符长度
    PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { 
   var date = new Date(); 
   var year = date.getFullYear();
   var month = date.getMonth(); //+1
   var day = date.getDate();
   var week =  date.getDay(); // 星期几number
  
   var array = [];  
   var showMonths = this.data.month;
   var itemid =0;
   for (var i = 1; i <= showMonths;i++){  
     var item = {}; 
     var showMonth=month+i;  
     if(showMonth>12){showMonth=showMonth-12;year=year+1;}
     item.month = year + "年" + showMonth + "月"; 
     if(month+1!=showMonth){day=1;}
     item.days=[]; 
     for (var k = 1; k <= week; k++) {
       item.days.push({});// 补 
     }
     var temp = (new Date(year, showMonth, 0)).getDate();// 每个月天数 
     for (var j = day; j <= temp; j++) {
       var _day = {}; 
       _day.id = itemid++;
       _day.date = year + "-" + this.PrefixInteger(showMonth, 2) + "-" + this.PrefixInteger(j.toString(), 2);
       _day.number = this.PrefixInteger(j.toString(), 2);
       item.days.push(_day); 
     }
     var itemdayslength = item.days.length;
     for (var k = 1,a =7-itemdayslength%7; k <= a; k++) {
       item.days.push({});// 补 
     } 
     array.push(item);
     this.setData({
       array: array
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