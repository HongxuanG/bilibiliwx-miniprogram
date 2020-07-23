// pages/history/history.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        historyRecord:[]
    },
    goDetail(event){
        console.log(event)
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
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            historyRecord:wx.getStorageSync('history')
        },()=>{
            console.log(this.data.historyRecord)
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