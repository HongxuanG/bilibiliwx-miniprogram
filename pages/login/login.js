// pages/login/login.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username:'',
        password:"",
        input_pwd:false,
        loadCaptcha:false,
        gt:"",
        challenge:"",
        offline:false,
        encryptedPwd:'',
        result:null,  // 极验成功后的返回值
        key:'' //登录秘钥
    },
    bindUsername(e){
        this.setData({
            username: e.detail.value
        })
    },
    bindPassword(e){
        this.setData({
            password: e.detail.value
        })
    },
    onfocus(){
        this.setData({
            input_pwd:true
        })
    },
    onblur(){
        this.setData({
            input_pwd:false
        })
    },
    doLogin(){
        var _this = this;
        const getData = (url,mtd,data,header)=>{
            return new Promise((resolve,reject)=>{
                wx.request({
                    url,
                    method: mtd,
                    data,
                    header,
                    success:(res)=>{
                        resolve(res.data)
                    },
                    fail:(err)=>{
                        reject(err);
                    }
                })
            })
        }
        getData('https://passport.bilibili.com/web/captcha/combine','get',{plat:11},{'cookie':'buvid3=E78DB76A-87D1-474A-BA29-025F3D830C9840963infoc'}).then((res)=>{
            console.log(res)
            let {gt,challenge,key,success} = res.data.result;
            _this.setData({ 
                loadCaptcha:true,
                gt,
                challenge, 
                offline: !success,
                key
            })
            // E78DB76A-87D1-474A-BA29-025F3D830C9840963infoc
            return getData('https://passport.bilibili.com/login/getkey','get',null,{'cookie':'buvid3=E78DB76A-87D1-474A-BA29-025F3D830C9840963infoc'})
        }).then((res)=>{
            console.log(res);
            return getData(app.baseUrl+'/RSApwd','post',{
                text:res.hash + this.data.password,
                publicKey:res.key
            })
        }).then((res)=>{
            console.log(res);
            this.setData({
                encryptedPwd:res
            })
        })
    },
    // 监听到验证成功后
    captchaSuccess:function(res){
        console.log("captcha-Success!");
        this.setData({
            result: res.detail
        },()=>{
            console.log(res)
            wx.request({
                url: 'https://passport.bilibili.com/web/login/wmp',
                header:{
                    "content-type":"application/x-www-form-urlencoded",
                    'cookie':'buvid3=E78DB76A-87D1-474A-BA29-025F3D830C9840963infoc'
                },
                method:'post',
                data:{
                    captchaType:11,
                    username:this.data.username,
                    password:this.data.encryptedPwd,
                    keep:true,
                    key:this.data.key,
                    challenge:this.data.challenge,
                    validate:this.data.result.geetest_validate,
                    seccode:this.data.result.geetest_seccode
                },
                // data:`captchaType=11&username=${this.data.username}&password=${this.data.encryptedPwd}&keep=true&key=${this.data.key}&challenge=${this.data.challenge}&validate=${this.data.result.geetest_validate}&seccode=${this.data.result.geetest_seccode}`,
                success:(res)=>{
                    console.log(res)
                    if(res.data.code!=0){
                        console.log("请求错误")
                    }
                }
            })
        })
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