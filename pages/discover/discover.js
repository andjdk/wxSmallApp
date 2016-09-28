//main.js
//获取应用实例
var app = getApp()

Page({
  data: {
    listdata:[
        {
            image:'../../image/ic_exercise.png',
            text:'动友俱乐部'
        },
        {
            image:'../../image/ic_invite.png',
            text:'附近动友'
        },
        {
            image:'../../image/ic_nearby_new.png',
            text:'最新活动'
        },
        {
            image:'../../image/ic_scan.png',
            text:'扫一扫'
        },
        {
            image:'../../image/ic_exercise.png',
            text:'滴滴出行'
        }
    ],
    toast:true,
    toastMessage:''
  },
  onLoad: function () {
    console.log('onLoad-main')
    var that = this
  
  },
  onclicklist:function(event){
        console.log(event.currentTarget.dataset.type)
        this.setData({
            toast:false,
            toastMessage:event.currentTarget.dataset.type
        })
  },
  toastChange:function(){
    this.setData({
            toast:true
        })
  }

})
