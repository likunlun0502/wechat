    Page({
        data: {
           
    },
    onLoad: function () {
        console.log("page onload")
    },
    onReady: function() {
        console.log("page onReady")
    },
    onShow: function() {
        console.log("page onshow")
    },
    onHide: function() {
        console.log("page onHide")
    },
    onunload: function() {
        console.log("page onunload")
    },
    onPullDownRefresh: function() {
        console.log("123")
    },
    onReachBottom: function() {
        console.log("456")
    },
    onShareAppMessage: function () {
        return {
            title: '最实用闲置家居平台',
            path: '/pages/index/index'
        }
    },
    handletap: function() {
        wx.getLocation({
            type: 'wgs84',
            success: function(res) {
                console.log(res)
            }
        })
    },



})
