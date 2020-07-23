// pages/searchPage/searchPage.
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value:"", //搜索框的内容
        historyList:[],
        search_sug:["逃生","孤独的美食家","从零开始的异世界生活","火影忍者","贝爷冒险","华农兄弟","我爱中国","刀剑神域","明日方舟","美国口罩令"]
    },
    // 当搜索框输入时
    onChange(e){
        this.setData({
            value:e.detail,
        })
    },
    onSearch(evt){
        this.onClick();
    },
    onClick() {
        console.log(this.data.value);
        wx.request({
            url: app.baseUrl+'/agency', //后台代理一下
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
                wx.navigateTo({
                  url: '/pages/searchResult/searchResult',
                  success:(result)=>{
                    result.eventChannel.emit("getDataFromOpenerPage",{list:res.data.data.result,keyword:this.data.value})
                  }
                })
            }
        })
        // historylist是否存在 存在
        if(wx.getStorageSync('historyList')){
            let arr = wx.getStorageSync('historyList');
            let valueIndex = arr.indexOf(this.data.value);
            if(valueIndex <= -1){ // 如果不存在 这个value
                arr.unshift(this.data.value);
                wx.setStorage({
                    key: 'historyList',
                    data: arr
                })
            }else{
                // 存在 value提前
                arr.unshift(this.data.value); // 返回的是新的数组长度
                arr = this.removeSame(arr)
                wx.setStorage({
                    key: 'historyList',
                    data: arr
                })
            }
        }else{ //不存在
            let arr = [];
            arr.unshift(this.data.value);
            wx.setStorage({
                key: 'historyList',
                data: arr
            })
        }
    },
    // 去重
    removeSame(arr){
        let newArr = [];
        arr.forEach(item=>{
            if(newArr.indexOf(item) <= -1){
                newArr.push(item);
            }
        })
        return newArr;
    },
    // 
    delItem(evt){
        let array = this.data.historyList;
        array.splice(evt.target.dataset.idx,1);
        this.setData({
            historyList:array
        },()=>{
            wx.setStorageSync('historyList',this.data.historyList)
        })
    },
    // 全部删除
    delHistory(){
        wx.removeStorage({
          key: 'historyList',
        })
        this.setData({
            historyList:[]
        })
    },
    searchsug(e){
        this.setData({
            value:e.target.dataset.value
        })
        this.onClick()
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
        console.log("onshow")
        this.setData({
            historyList:wx.getStorageSync('historyList')
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