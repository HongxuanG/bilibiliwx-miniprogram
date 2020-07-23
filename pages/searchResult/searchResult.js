// pages/searchResult/searchResult.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value:"",
        select_item:[
            {name:"默认播放",order:"totalrank"},
            {name:"播放多",order:"click"},
            {name:"新发布",order:"pubdate"},
        ],
        currentIndex:0, //选择排序
        totalrankList:[],
        clickList:[],
        pubdateList:[],
        active:0
    },
    // 当搜索框输入时
    onChange(e){
        this.setData({
            value:e.detail
        })
    },
    onSearch(evt){
        console.log(evt.detail)
    },
    onClick() {
        console.log(this.data.value);
        wx.request({
            url: app.baseUrl+'/agency', //给后台帮忙请求
            data:{
                requestUrl:"http://api.bilibili.com/x/web-interface/search/type", //请求搜索
                requestData:{
                    keyword:this.data.value,
                    search_type:"video",
                    order:"totalrank"
                },
                mtd:"get"
            },
            method:"get",
            success:(res)=>{
                console.log(res.data.data.result);
                this.setData({
                    totalrankList:res.data.data.result
                })
            }
        })
    },
    changeSelect(event){
        this.setData({currentIndex:event.target.dataset.idx});
        let index = event.target.dataset.idx;
        switch(this.data[this.data.select_item[index].order+'List'].length==0 && event.target.dataset.idx){
            case 0 :
                this.requestList("totalrank");
                break;
            case 1 :
                this.requestList("click");
                break;
            case 2 :
                this.requestList("pubdate");
                break;
            default: break;
        }
        console.log(this.data.totalrankList);
        console.log(this.data.clickList);
        console.log(this.data.pubdateList);
    },
    requestList(order){
        wx.request({
            url: app.baseUrl+'/agency', //给后台帮忙请求
            data:{
                requestUrl:"http://api.bilibili.com/x/web-interface/search/type", //请求搜索
                requestData:{
                    keyword:this.data.value,
                    search_type:"video",
                    order
                },
                mtd:"get"
            },
            method:"get",
            success:(res)=>{
                console.log(res)
                console.log(`${order}List:`,res.data.data.result);
                this.setData({
                    [order+'List']:res.data.data.result
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('getDataFromOpenerPage', function({list,keyword}) {
            _this.setData({
                totalrankList:list,
                value:keyword
            })
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