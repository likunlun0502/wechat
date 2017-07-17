//app.js
App({

    globalData:{
        url: "https://weixin.nuanwan.wekeji.com"
    },

    onLaunch: function() {
        console.log("onlaunch")
    },

    onShow: function(options) {
        console.log("onshow")
        console.log(options)
    },

    onHide: function() {
        console.log("onHide")
    },

    calculate: function(a,b) {
        return a + b;
    }
})
