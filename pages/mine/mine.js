// pages/mine/mine.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        record:[]
    },
    biliLogin(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
    },
    history(){
        wx.navigateTo({
          url: '/pages/history/history',
        })
    },
    grouping:function(data,num){
      var group = [];
      for(var i =0 ; i < data.length ; i+=num){
          group.push(data.slice(i,i+num));
      }
      return group;
    },
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

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      this.setData({
        record:this.grouping(wx.getStorageSync('history'),3)
      })
      console.log(this.data.record)
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