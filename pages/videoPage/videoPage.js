// pages/videoPage/videoPage.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bullet_switch:true, //切换弹幕开关
        video:null, // 当前的视频流
        currentIndex:0, //切换介绍和评论
        cid:null, //当前视频的cid
        aid:null, //当前视频的aid
        currentPageData:null, //当前视频详情页的数据
        commentList:null, //评论区
        videoUrl:null,
        danmuList:[],
        tempList:[]  // 弹幕暂存
    },
    switch(){
        // 打开
        if(this.data.bullet_switch){
            this.setData({
                danmuList: []  // 清空弹幕
            })
        }else{
            this.setData({
                danmuList: this.data.tempList
            })
        }
        this.setData({
            bullet_switch:!this.data.bullet_switch,
        })
    },
    changeBrief(){
        this.setData({
            currentIndex:0
        })
    },
    changeComment(){
        this.setData({
            currentIndex:1
        })
    },
    toggleFullScreen(event){
        console.log(event.detail.fullScreen)
        this.videoContext = wx.createVideoContext("myvideo",this);
        this.videoContext.requestFullScreen({direction:90})
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            aid:options.aid
        })
        
        var _this = this;
        // 接收上一个页面传过来的数据
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on("getDataFromOpenerPage",function(data){
            _this.setData({
                cid:data.cid
            })
        })
        wx.request({
            url: app.baseUrl+'/agency',
            data:{
                requestUrl: 'https://api.bilibili.com/x/web-interface/view/detail', //视频详情
                requestData:{
                    aid:options.aid
                },
                mtd:"get"
            },
            method:'get',
            success:(res)=>{
                _this.setData({
                    currentPageData:res.data.data
                })
                console.log(this.data.currentPageData);
            }
        })
    },
    // addBarrage() {
    //     const barrageComp = this.selectComponent('.barrage')
    //     this.barrage = barrageComp.getBarrageInstance({
    //       font: 'bold 16px sans-serif',
    //       duration: 10,
    //       lineHeight: 2,
    //       mode: 'separate',
    //       padding: [10, 0, 10, 0],
    //       tunnelShow: false
    //     })
    //     this.barrage.open()
    //     this.barrage.addData(data)
    // },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var _this = this;
        wx.request({
            url: app.baseUrl + '/getDanmaku',
            method:"get",
            data:{
                url:'https://api.bilibili.com/x/v1/dm/list.so',
                comp:0,
                oid:this.data.cid
            },
            success:(res)=>{
                let barrageList = res.data.result.i.d;
                let danmuInfo = null;
                let array = [];
                
                barrageList.forEach((item,index)=>{
                    danmuInfo = item.$.p.split(",");
                    array.push({
                        text: item._,
                        time: parseInt(danmuInfo[0]),
                        color: _this.colorToString(danmuInfo[3])
                    })
                })
                this.setData({
                    danmuList: array,
                    tempList:array
                })
            }
        })
        wx.request({
            url: app.baseUrl+'/agency',
            data:{
                requestUrl:"https://api.bilibili.com/x/player/playurl", //请求视频流
                requestData:{
                    avid:_this.data.aid,
                    cid:_this.data.cid,
                    otype:"json",
                    platform:"html5",
                    type:"mp4",
                    html5:1
                },
                mtd:"get"
            },
            method:"get",
            success:(res)=>{
                _this.setData({
                    video:res.data.data,
                    videoUrl:res.data.data.durl[0].url,
                })
            }
        })
        // this.addBarrage()
    },
    // 颜色十进制转十六进制
    colorToString(num10){
        let colorNum = new Number(num10).toString(16);
        colorNum = ("000000"+colorNum).slice(-6);
        return "#"+colorNum;
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var _this = this;

        
                    
        console.log("onshow");
        wx.request({
            url: app.baseUrl + '/agency',
            data:{
                requestUrl:'http://api.bilibili.com/x/v2/reply', //评论区
                requestData:{
                    type:1,
                    oid:this.data.aid,
                    sort:1,
                    pn:1,
                    ps:20,
                    nohot:1
                },
                mtd:"get"
            },
            method:"get",
            success:(res)=>{
                console.log(res);
                this.setData({
                    commentList:res.data.data
                })
            }
        })
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