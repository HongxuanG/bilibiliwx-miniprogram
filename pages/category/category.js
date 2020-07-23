// pages/category/category.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex:0, // 当前索引值
        select_item:[
            {name:"番剧"},
            {name:"国创"},
        ],
        animeList:[],  // 番剧列表
        guocList:[],   // 国创列表
        animeListPage:1,  // 番剧列表当前页码
        guocListPage:1,   // 国创列表当前页码
        animeListPageIsEmpty:false,  // 到底了，数据全部加载出来了
        guocListPageIsEmpty:false,   // 到底了，数据全部加载出来了
        height:"",
        conditionAnime: null, // 番剧索引条件
        conditionGuoc: null,  // 国创索引条件
        selectSign:[0,0,0],  // 箭头方向 0 收回  1 展开
        initialValue:[0,0,0], // 选项初始 索引值
        select_id:[-1,-1,-1]
    },
    // 选择
    changeSelect(event){
        this.setData({currentIndex:event.currentTarget.dataset.idx})
        if(this.data.currentIndex == 1 && this.data.guocList.length==0){
            wx.request({
                url: 'https://bangumi.bilibili.com/media/web_api/search/result',
                data:{
                  pagesize:30,
                  season_type:4,
                  season_version:-1,
                  style_id:-1,
                  is_finish:-1,
                  page:1,
                  is_up:0
                },
                method:"get",
                success:(res)=>{
                  console.log(res);
                  this.setData({
                    guocList: res.data.result.data
                  })
                }
            })
        }
    },
    selectOption(evt){
        let index = evt.currentTarget.dataset.idx;
        let arr = this.data.selectSign;
        if(arr[index]==1){
            arr[index] = 0;
            this.setData({
                selectSign: arr
            })
            return false;
        }
        for(var i=0;i<arr.length;i++){
            arr[i] = 0;
        }
        arr[index] = 1;
        
        this.setData({
            selectSign: arr
        })
    },
    selected(evt){
        let id = evt.target.dataset.id;
        let index = evt.target.dataset.k;
        let arr = this.data.select_id;
        let arrOfIndex = this.data.initialValue;
        let _this = this;
        if(this.data.selectSign[0]){
            arr[0] = id;
            arrOfIndex[0] = index;
            this.setData({
                select_id: arr,
                initialValue: arrOfIndex
            })
        }else if(this.data.selectSign[1]){
            arr[1] = id;
            arrOfIndex[1] = index;
            this.setData({
                select_id: arr,
                initialValue: arrOfIndex
            })
        }else if(this.data.selectSign[2]){
            arr[2] = id;
            arrOfIndex[2] = index;
            this.setData({
                select_id: arr,
                initialValue: arrOfIndex
            })
        }
        console.log(this.data.initialValue)
        if(this.data.currentIndex == 0){
            this.setData({
                animeListPage: 1
            },()=>{
                wx.request({
                    url: 'https://bangumi.bilibili.com/media/web_api/search/result',
                    data:{
                      pagesize:30,
                      season_type:1,
                      season_version:_this.data.select_id[0],
                      style_id:_this.data.select_id[1],
                      is_finish:_this.data.select_id[2],
                      page:1,
                      is_up:0
                    },
                    method:"get",
                    success:(res)=>{
                        console.log(res);
                        _this.setData({
                            animeList: res.data.result.data
                        })
                        console.log(this.data.animeList)
                    }
                })
            })
        }else{
            this.setData({
                animeListPage: 1
            },()=>{
                wx.request({
                    url: 'https://bangumi.bilibili.com/media/web_api/search/result',
                    data:{
                        pagesize:30,
                        season_type:4,
                        season_version:_this.data.select_id[0],
                        style_id:_this.data.select_id[1],
                        is_finish:_this.data.select_id[2],
                        page:1,
                        is_up:0
                    },
                    method:"get",
                    success:(res)=>{
                        console.log(res);
                        _this.setData({
                            guocList: res.data.result.data
                        })
                    }
                })
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            height:app.globalData.height
        })
        wx.request({
          url: 'https://bangumi.bilibili.com/media/web_api/search/result',
          data:{
            pagesize:30,
            season_type:1,
            season_version:-1,
            style_id:-1,
            is_finish:-1,
            page:1,
            is_up:0
          },
          method:"get",
          success:(res)=>{
            this.setData({
                animeList: res.data.result.data,
                animeListPage:this.data.animeListPage + 1
            })
          }
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
        if(this.data.conditionAnime == null && this.data.conditionGuoc == null){
            wx.request({
                url: 'https://bangumi.bilibili.com/media/web_api/search/v2/condition',
                data:{
                    season_type:1
                },
                method:"get",
                success:(res)=>{
                    console.log(res)
                    this.setData({
                        conditionAnime: [res.data.result.filter[0]].concat([res.data.result.filter[7]],[res.data.result.filter[2]])
                    })
                }
            })
            wx.request({
                url: 'https://bangumi.bilibili.com/media/web_api/search/v2/condition',
                data:{
                    season_type:4
                },
                method:"get",
                success:(res)=>{
                    console.log(res)
                    this.setData({
                        conditionGuoc: [res.data.result.filter[0]].concat([res.data.result.filter[5]],[res.data.result.filter[1]])
                    })
                }
            })
        }
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
        console.log("onReachBottom")
        if(this.data.currentIndex == 0){
            if(this.data.animeListPage >= 10){
                this.setData({
                    animeListPageIsEmpty:true
                })
            }else{
                wx.request({
                    url: 'https://bangumi.bilibili.com/media/web_api/search/result',
                    data:{
                        pagesize:30,
                        season_type:1,
                        season_version:-1,
                        style_id:-1,
                        is_finish:-1,
                        page:this.data.animeListPage,
                        is_up:0
                    },
                    success:(res)=>{
                        console.log(res);
                        this.setData({
                            animeList: this.data.animeList.concat(res.data.result.data),
                            animeListPage:this.data.animeListPage + 1
                        })
                    }
                })
            }
        }else if(this.data.currentIndex == 1){
            if(this.data.guocListPage >= 10){
                this.setData({
                    guocListPageIsEmpty:true
                })
            }else{
                wx.request({
                    url: 'https://bangumi.bilibili.com/media/web_api/search/result',
                    data:{
                        pagesize:30,
                        season_type:4,
                        season_version:-1,
                        style_id:-1,
                        is_finish:-1,
                        page:this.data.guocListPage,
                        is_up:0
                    },
                    success:(res)=>{
                        console.log(res);
                        this.setData({
                            guocList: this.data.guocList.concat(res.data.result.data),
                            guocListPage:this.data.guocListPage + 1
                        })
                    }
                })
            }
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})