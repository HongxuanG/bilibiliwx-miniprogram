//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    height:"",
    hotList:[],
    currentIndex:0, //当前索引值（用于切换热门和追番）
    select_item:[
      {name:"热门"},
      {name:"追番"},
    ],
    timelineList:[], // 后端传过来的timeline数据
    bangumi:[], // 后端传过来的bangumi数据
    clickIndex:0, // 点击的索引值（用于切换日历）
    animeList:[], // 番剧推荐
    guocList:[], // 国创推荐
    animeIndex:0, // 
    goucIndex:0,
    pageIndex:1, //分页
    tempList: []
  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/searchPage/searchPage',
    })
  },
  changeSelect(event){
      this.setData({currentIndex:event.currentTarget.dataset.idx})
      if(this.data.currentIndex==1 && this.data.timelineList.length==0){
        wx.request({
          url: 'https://api.bilibili.com/pgc/web/timeline', //获取追番日历
          data:{
            types:1
          },
          method:"get",
          success:(res)=>{
            console.log(res.data.result)
            this.setData({
              timelineList:res.data.result
            })
            let todayIndex = res.data.result.findIndex(item=>{
              return item.is_today === 1
            })
            console.log(todayIndex)
            this.setData({
              clickIndex: todayIndex
            })
          }
        })
        
      }
  },
  // 点击触发
  onActive(e){
    this.setData({clickIndex:e.target.dataset.idx})
  },
  // 换一换
  changeList(evt){
    let bangumiIndex = evt.target.dataset.idx;
    if(bangumiIndex == 1){
      if(this.data.animeIndex >= this.grouping(this.data.animeList,3).length-1){

        this.rotateIcon(this.data.animeList);

        this.setData({
          animeIndex: 0
        })
      }else{

        this.rotateIcon(this.data.animeList);

        this.setData({
          animeIndex:this.data.animeIndex+1
        })
      }
    }else if(bangumiIndex == 2){
      if(this.data.goucIndex >= this.grouping(this.data.guocList,3).length-1){

        this.rotateIcon(this.data.guocList);

        this.setData({
          goucIndex: 0
        })
      }else{

        this.rotateIcon(this.data.guocList);

        this.setData({
          goucIndex:this.data.goucIndex+1
        })
      }
    }

  },
  rotateIcon(list){
    if(this.data.goucIndex >= this.grouping(list,3).length-1){
      this.animate("#changeIcon",[
        { transformOrigin:"center",rotate:0 },
        { transformOrigin:"center",rotate:360*2}
      ],400,function () {
        this.clearAnimation('#container1', { opacity: true, rotate: true }, function () {
          console.log("清除了#container上的动画属性")
        })
      }.bind(this))
    }else{
      this.animate("#changeIcon",[
        { transformOrigin:"center",rotate:0 },
        { transformOrigin:"center",rotate:360}
      ],300,function () {
        this.clearAnimation('#container1', { opacity: true, rotate: true }, function () {
          console.log("清除了#container上的动画属性")
        })
      }.bind(this))
    }
  },
  // 前往分类
  goCategory(){
    wx.navigateTo({
      url: '/pages/category/category',
    })
  },
  // 调转到指定索引
  indexCategory(){
    console.log("indexCategory")
    
  },
  grouping:function(data,num){
    var group = [];
    for(var i =0 ; i < data.length ; i+=num){
        group.push(data.slice(i,i+num));
    }
    return group;
  },
  onLoad:function(options){
    this.setData({
      height:app.globalData.height
    })
    wx.request({
      url: 'https://api.bilibili.com/pgc/app/wx/page/bangumi', //获取索引和追番推荐
      data:{

      },
      method:"get",
      success:(res)=>{
        this.setData({
          bangumi:res.data.result.modules
        },()=>{
          this.setData({
              animeList: this.data.bangumi[1].items,
              guocList:  this.data.bangumi[2].items
          })
        })
        console.log(this.data.bangumi)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onShow(){
    wx.request({
      url: app.baseUrl + '/agency',
      data:{
        requestUrl:"https://api.bilibili.com/x/web-interface/wx/hot",
        requestData:{
          
        },
        mtd:"get"
      },
      method:"get",
      success:(res)=>{
        // console.log(res.data)
        console.log(res)
        this.setData({
          tempList:res.data.data
        },()=>{
          this.setData({
            hotList: this.data.tempList.slice(0,this.data.pageIndex*10) //一开始截取前十个视频展示
          })
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
    console.log("onPullDownRefresh")
    
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
    this.setData({
      pageIndex:this.data.pageIndex+1
    },()=>{
      this.setData({
        hotList: this.data.tempList.slice(0,this.data.pageIndex*10) //pageIndex递增 ，展示的视频 n*10
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
