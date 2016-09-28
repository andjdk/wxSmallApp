//message.js
//获取应用实例
var app = getApp()
Page({
  data: {
   progressNumber:'100',
   menu:["动态","通知","聊天"],
   curNav:'动态',
   hidden:'false'
  },
  onLoad: function () {
    console.log('onLoad-main')
    var that = this
  
    wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log("ddd"+res.data)
                that.data.navLeftItems = res.data;
                that.data.navRightItems = res.data;
                that.data.hidden=true;
                // that.data.progressNumber='0';
            }
        })
  },
  onclicktag:function(event){
     console.log(event.currentTarget.dataset.type)
     let id = event.currentTarget.dataset.type
     this.setData({
			curNav: id
		})
  },
  onBindChange:function(event){
    let id = event.currentTarget.dataset.type
  },


})
