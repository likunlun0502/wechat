Page({
	data: {
		HasResult: false,
		searchWorld: "",
		resultList: []
	},

	handleSearchChange: function(e) {
		this.setData({
			searchWorld: e.detail.value
		})
	},

	handleSearchTap: function() {
		wx.request({
            url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_search_list', 
            data: {keyword: this.data.searchWorld},
            method: "POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: this.handleGetListSucc.bind(this)
        })
	},

	handleGetListSucc: function(response) {
		var hasResult = response.data.ret;
		if(hasResult) {
			this.setData({
				resultList: response.data.data,
				HasResult: true
			})
		}else {
			this.setData({
				resultList: [],
				HasResult: false
			})
		}
	},
	handleItemTap: function(e) {
		wx.navigateTo({
			url: '/pages/detail/detail?id=' + e.currentTarget.id
		})
	}
})