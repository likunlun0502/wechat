var app = getApp(),
    deviceInfo = app.globalData.deviceInfo;
Page({
    data: {
        latitude: "",
        longitude: "",
        controls: [{
            id: 1,
            iconPath: '/resource/pin.png',
            position: {
                left: deviceInfo.windowWidth/2 - 10,
                top: (deviceInfo.windowHeight - 42)/2 - 30,
                width: 20,
                height: 30
            }
        },{
            id: 2,
            iconPath: '/resource/center.png',
            position: {
                left: 20,
                top: deviceInfo.windowHeight - 100,
                width: 30,
                height: 30
            },
            clickable: true
        }],
        markers: []
    },

    staticData: {
        markersInfo: []
    },

    onReady: function (e) {
        this.mapCtx = wx.createMapContext('map')
    },

    onShow: function() {
        wx.getLocation({
            type: 'gcj02',
            success: this.handleGetlocationSucc.bind(this)
        });
        wx.request({
            url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_list', 
            data: {},
            method: "GET",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: this.handleGetMarkersSucc.bind(this)
        })
    },

    handleGetMarkersSucc: function(res) {
        this.staticData.markersInfo = res.data.data;
        //console.log(this.staticData.markersInfo)
        var markers = res.data.data,
            l = markers.length,
            results = [];
        for(var i=0;i<l;i++){
            var item = markers[i];
            results.push({
                iconPath: "/resource/"+item.type+".png",
                id: i,
                latitude: item.latitude,
                longitude: item.longitude,
                width: 30,
                height: 30
            })
        }
        this.setData({
            markers: results
        })
    },

    handleGetlocationSucc: function(res) {
        this.setData({
            latitude: res.latitude,
            longitude: res.longitude
        })
    },

    onShareAppMessage: function () {
        return {
            title: '最实用闲置家居平台',
            path: '/pages/index/index'
        }
    },

    handleControltap:  function(e) {
        var id = e.controlId;
        if(id = 2) {
            this.mapCtx.moveToLocation();
        }
    },

    bindMarkerTap: function(e) {
        var id = e.markerId,
            infoid = this.staticData.markersInfo[id].id;
            wx.navigateTo({
                url: '/pages/detail/detail?id='+infoid
            })
    },


})
