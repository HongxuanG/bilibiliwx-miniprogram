// components/videoCard/videoCard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        video:{
            type:Object,
            value:{
                aid:1,
                pic:"../../images/account.png",
                duration:451234,
                title:"测试标题测试标题测试标题测试标题测试标题测试标题",
                tag:"美食圈•人气飙升",
                owner:{
                    name:"测试名字"
                },
                stat:{
                    view:8545125
                },
                ctime:Date.now(),
            }
        },
        transmit:{
            type:Boolean,
            value:false
        },
        cardType:{
            type:Number,
            value:0 // 0 默认卡片 1 搜索得到的视频卡片
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        videoDetail(event){
            let avid = event.currentTarget.dataset.aid
            wx.request({
              url: 'https://www.bilibili.com/widget/getPageList',
              
              data:{
                aid:avid
              },
              success:(res)=>{
                console.log(res.data[0].cid);
                wx.navigateTo({
                  url: '/pages/videoPage/videoPage?aid='+avid,
                  events:{
        
                  },
                  success:(result)=>{
                    result.eventChannel.emit("getDataFromOpenerPage",{cid:res.data[0].cid})
                  }
                })
              }
            })
            var videoArray = [];
            if(wx.getStorageSync('history')){
              videoArray = wx.getStorageSync('history');
              videoArray.unshift({video:this.data.video,dateTime:Date.now()}) // 点击时间和视频内荣
              wx.setStorage({
                data: videoArray,
                key: 'history',
              })
            }else{
              wx.setStorage({
                data: [{video:this.data.video,dateTime:Date.now()}],
                key: 'history',
              })
            }
        },
    }
})
