// components/ClassificationCard/ClassificationCard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        video:{
            type:Object,
            value:{
                aid:1,
                pic:"../../images/account.png",
                duration:451234,
                title:"测试标题测试标题测试标题测试标题测试标题测试标题",
                tag:"美食圈•人气飙升",
                owner:{
                    name:"测试名字"
                },
                stat:{
                    view:8545125
                },
                ctime:Date.now(),
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
