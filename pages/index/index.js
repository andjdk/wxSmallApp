//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   imgUrls: [
      'http://imgdata1.healthmall.cn/group1/M00/96/1B/fViYUleos72AUVvmAACgtNbiQlU628.jpg',
      'http://imgdata1.healthmall.cn/group1/M00/96/1C/fViYUleos76AVW6dAAD9uo5dM4g733.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navs: [
      {
        image: '../../image/ic_book_coach_new.png',
        text: '约私教'
      }, {
        image: '../../image/ic_shop_new.png',
        text: '健康商城'
      }, {
        image: '../../image/ic_life_house_new.png',
        text: '运动馆'
      }, {
        image: '../../image/ic_health_club_new.png',
        text: '养生馆'
      }, {
        image: '../../image/ic_book_venue_new.png',
        text: '约场管'
      }
    ],
    navstwo: [
      {
        image: '../../image/ic_group_buy_new.png',
        text: '私教团购'
      }, {
        image: '../../image/ic_to_b_new.png',
        text: '企业服务'
      }, {
        image: '../../image/ic_circle_new.png',
        text: '动力圈'
      }, {
        image: '../../image/ic_sporter_new.png',
        text: '约动友'
      }, {
        image: '../../image/ic_jinduan.png',
        text: '武术晋段'
      }
    ],
    weekstar_url:'http://imgdata1.healthmall.cn/group1/M00/96/4D/fViYUleotDSAdnwEAAA-x0_Mn5U580.jpg',
    star_name:'杨圳波',
    star_level:'中小学体育教师资格证',
    star_desc:'国家二级运动员，福建省太极拳健身赛冠军，中国科学院体育竞赛男子青年组组32式太极剑亚军',
    coach:[
      {
        image:'http://imgdata1.healthmall.cn/group1/M00/96/4C/fViYUleotDOABHBXAABFOEFVz-g613.jpg',
        text:'梁广焯',
        loc:'广州市'
      },
      {
        image:'http://imgdata1.healthmall.cn/group1/M00/96/4D/fViYUleotDWAOZgPAAA28WsDixo461.jpg',
        text:'苏保成',
        loc:'天津市'
      },
      {
        image:'http://imgdata1.healthmall.cn/group1/M00/96/4E/fViYUleotDeALMMIAAAfbfmYIoo615.jpg',
        text:'黄杰',
        loc:'南宁市'
      },
      {
        image:'http://imgdata1.healthmall.cn/group1/M00/96/4D/fViYUleotDWANxxAAAAqU6smyas981.jpg',
        text:'徐伟',
        loc:'中山市'
      }
    ],
    venues_url:'http://imgdata1.healthmall.cn/group1/M00/EA/63/fViYUleaIcqAItK4AAF-XoamL4k689.jpg'
  },
  onLoad: function () {
    console.log('onLoad-main')
    var that = this
    wx.showNavigationBarLoading()
  
  },
  go: function(event) {
    console.log(event)
    console.log(event.currentTarget.dataset.type)
    wx.navigateTo({
      url: '../main/main?type=' + event.currentTarget.dataset.type
    })
  }
})

