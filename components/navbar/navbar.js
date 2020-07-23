// components/navbar/navbar.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        type:{
            type:Number,
            value:0
        },
        title:{
            type:String,
            value:"哔哩哔哩"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        navBarHeight:"",
        height:"",
        MenuCapsule:null
    },

    /**
     * 组件的方法列表
     */
    methods: {
        back(){
            console.log(1)
            wx.navigateBack({
                delta: 1
            })
        },
        toHome(){
            wx.switchTab({
              url: '/pages/index/index',
            })
        },
        goSearch(){
            wx.navigateTo({
              url: '/pages/searchPage/searchPage',
            })
        }
    },
    lifetimes:{
        attached:function(){
            this.setData({
                height:app.globalData.height,
                navBarHeight: app.globalData.navHeight, // 顶部导航栏高度
                MenuCapsule:wx.getMenuButtonBoundingClientRect()
            })
            console.log(wx.getMenuButtonBoundingClientRect())
        }
    }
})
