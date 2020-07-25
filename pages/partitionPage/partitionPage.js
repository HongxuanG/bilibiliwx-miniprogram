// pages/partitionPage/partitionPage.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0, //默认第一项高亮显示
        lists:[],
        index:0,
        currentIndex:0,
        tabBar:[
            {
                partitonName:'番剧',
                children:[
                    {tname:'推荐',rid:13},
                    {tname:'连载动画',rid:33},
                    {tname:'完结动画',rid:32},
                    {tname:'资讯',rid:51},
                    {tname:'官方延伸',rid:152}
                ]
            },
            {
                partitonName:'国创',
                children:[
                    {tname:'推荐',rid:167},
                    {tname:'国产动画',rid:153},
                    {tname:'国产原创相关',rid:168},
                    {tname:'布袋戏',rid:169},
                    {tname:'动态漫·广播剧',rid:195},
                    {tname:'资讯',rid:170},
                ]
            },
            {
                partitonName:'纪录片',
                children:[
                    {tname:'推荐',rid:177},
                    {tname:'人文历史',rid:37},
                    {tname:'科学·探索·自然',rid:178},
                    {tname:'军事',rid:179},
                    {tname:'社会·美食·旅行',rid:180}
                ]
            },
            {
                partitonName:'动画',
                children:[
                    {tname:'推荐',rid:1},
                    {tname:'MAD-AMV',rid:24},
                    {tname:'MMD-3D',rid:25},
                    {tname:'短片手书配音',rid:47},
                    {tname:'手办·模玩',rid:210},
                    {tname:'特摄',rid:86},
                    {tname:'综合',rid:27}
                ]
            },
            {
                partitonName:'音乐',
                children:[
                    {tname:'推荐',rid:3},
                    {tname:'原创音乐',rid:28},
                    {tname:'翻唱',rid:31},
                    {tname:'VOCALOID-UTAU',rid:30},
                    {tname:'电音',rid:194},
                    {tname:'演奏',rid:59},
                    {tname:'MV',rid:193},
                    {tname:'音乐现场',rid:29},
                    {tname:'音乐综合',rid:130},
                ]
            },
            {
                partitonName:'舞蹈',
                children:[
                    {tname:'推荐',rid:129},
                    {tname:'宅舞',rid:20},
                    {tname:'街舞',rid:198},
                    {tname:'明星舞蹈',rid:199},
                    {tname:'中国舞',rid:200},
                    {tname:'舞蹈综合',rid:154},
                    {tname:'舞蹈教程',rid:156},
                ]
            },
            {
                partitonName:'游戏',
                children:[
                    {tname:'推荐',rid:4},
                    {tname:'单机游戏',rid:17},
                    {tname:'电子竞技',rid:171},
                    {tname:'手机游戏',rid:172},
                    {tname:'网络游戏',rid:65},
                    {tname:'桌游棋牌',rid:173},
                    {tname:'GMV',rid:121},
                    {tname:'音游',rid:136},
                    {tname:'Mugen',rid:19},
                ]
            },
            {
                partitonName:'知识',
                children:[
                    {tname:'推荐',rid:36},
                    {tname:'科学科普',rid:124},
                    {tname:'社科人文',rid:201},
                    {tname:'财经',rid:207},
                    {tname:'校园学习',rid:208},
                    {tname:'职业职场',rid:209},
                    {tname:'野生技术协会',rid:122},
                ]
            },
            {
                partitonName:'数码',
                children:[
                    {tname:'推荐',rid:188},
                    {tname:'手机平板',rid:95},
                    {tname:'电脑装机',rid:189},
                    {tname:'摄影摄像',rid:190},
                    {tname:'影音智能',rid:191}
                ]
            },
            {
                partitonName:'生活',
                children:[
                    {tname:'推荐',rid:160},
                    {tname:'搞笑',rid:138},
                    {tname:'日常',rid:21},
                    {tname:'美食圈',rid:76},
                    {tname:'动物圈',rid:75},
                    {tname:'手工',rid:161},
                    {tname:'绘画',rid:162},
                    {tname:'运动',rid:163},
                    {tname:'汽车',rid:176},
                    {tname:'其他',rid:174}
                ]
            },
            {
                partitonName:'鬼畜',
                children:[
                    {tname:'推荐',rid:119},
                    {tname:'鬼畜调教',rid:22},
                    {tname:'音MAD',rid:26},
                    {tname:'人力VOCALOID',rid:126},
                    {tname:'教程演示',rid:127}
                ]
            },
            {
                partitonName:'时尚',
                children:[
                    {tname:'推荐',rid:155},
                    {tname:'美妆',rid:157},
                    {tname:'健身',rid:158},
                    {tname:'T台',rid:164},
                    {tname:'风尚标',rid:159}
                ]
            },
            {
                partitonName:'娱乐',
                children:[
                    {tname:'推荐',rid:5},
                    {tname:'综艺',rid:71},
                    {tname:'明星',rid:137}
                ]
            },
            {
                partitonName:'影视',
                children:[
                    {tname:'推荐',rid:181},
                    {tname:'影视杂谈',rid:182},
                    {tname:'影视剪辑',rid:183},
                    {tname:'短片',rid:85},
                    {tname:'预告·资讯',rid:184}
                ]
            },
            {
                partitonName:'电影',
                children:[
                    {tname:'推荐',rid:23},
                    {tname:'华语电影',rid:147},
                    {tname:'欧美电影',rid:145},
                    {tname:'日本电影',rid:146},
                    {tname:'其他国家',rid:83}
                ]
            },
            {
                partitonName:'电视剧',
                children:[
                    {tname:'推荐',rid:11},
                    {tname:'国产剧',rid:185},
                    {tname:'海外剧',rid:187}
                ]
            },
            {
                partitonName:'游戏赛事',
                children:[
                    {tname:'推荐',rid:0,mid:0,gid:0,tid:0,year:0,tag:0,sort:2}
                ]
            }
            
        ],
    },
    onChange(event) {
        let i = event.detail.index;
        this.setData({
            currentIndex:i
        })
        if(!JSON.stringify(this.data.lists[i])){
            wx.request({
                url: app.baseUrl + '/agency',
                data:{
                    requestUrl: 'https://api.bilibili.com/x/web-interface/dynamic/region',
                    requestData:{
                      pn:1,
                      ps:50,
                      rid:this.data.tabBar[this.data.index].children[i].rid
                    },
                    mtd:"get"
                },
                success:(res)=>{
                    console.log(res)
                    let arr = this.data.lists;
                    arr[i] = res.data.data;
                    this.setData({
                        lists: arr
                    })
                    console.log(this.data.lists)
                }
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    
    onLoad: function (options) {
        let arr = [];
        this.setData({
            index:options.index,
        },()=>{
            for(let i=0;i<this.data.tabBar[this.data.index].length;i++){
                arr.push({})
            }
            this.setData({
                lists: arr
            },()=>{
                if(this.data.index==16){
                   
                    wx.request({
                        url: app.baseUrl + '/agency',
                        data:{
                            requestUrl: 'https://api.bilibili.com/x/esports/video/list',
                            requestData:{
                              pn:1,
                              ps:50,
                              rid:this.data.tabBar[this.data.index].children[0].rid,
                              mid:0,
                              gid:0,
                              tid:0,
                              year:0,
                              tag:0,
                              sort:2
                            },
                            mtd:"get"
                        },
                        success:(res)=>{
                            console.log(res)
                            let arr = this.data.lists;
                            arr[0] = res.data.data;
                            this.setData({
                                lists: arr
                            })
                        }
                    })
                }else{

                    wx.request({
                        url: app.baseUrl + '/agency',
                        data:{
                            requestUrl: 'https://api.bilibili.com/x/web-interface/dynamic/region',
                            requestData:{
                              pn:1,
                              ps:50,
                              rid:this.data.tabBar[this.data.index].children[0].rid
                            },
                            mtd:"get"
                        },
                        success:(res)=>{
                            console.log(res)
                            let arr = this.data.lists;
                            arr[0] = res.data.data;
                            this.setData({
                                lists: arr
                            })
                        }
                    })
                }
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