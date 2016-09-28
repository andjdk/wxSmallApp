//me.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    listdata:[
      {
        image:'../../image/ic_exercise.png',
        text:'我的资料'
      },
      {
        image:'../../image/ic_exercise.png',
        text:'我的钱包'
      },
      {
        image:'../../image/ic_exercise.png',
        text:'我的订单'
      },
      {
        image:'../../image/ic_exercise.png',
        text:'我的会员卡'
      },
      {
        image:'../../image/ic_exercise.png',
        text:'设置'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }, 
  onclickList: function(e) {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

