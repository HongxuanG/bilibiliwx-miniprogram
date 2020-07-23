//app.js
const config = require("./config");
App({
  baseUrl:config.http.baseUrl,

  onLaunch: function () {
    // console.log(config)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    wx.getSystemInfo({
      success: (result) => {
        // 46为顶部导航栏高度 statusBarHeight是状态栏高度
        this.globalData.height = result.statusBarHeight + 46;
        this.globalData.navHeight = 46;
      },
      fail:(err)=>{
        console.log(err);
      }
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data:{
            appid: "wxd0a743df0c6a0eeb",
            secret: "f4e511468b84a82bd9e2ec5b5d772d3b", // 秘钥
            js_code: res.code,
            grant_type: "authorization_code"
          },
          success:(res)=>{
            console.log(res)
          }
        })
      },
      fail:(err)=>{
        console.log(err);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          
        }
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },
  globalData: {
    userInfo: null,
    height:0,
    navHeight:0,
  }
})