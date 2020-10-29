const BASE_URL = 'http://121.229.14.124:8022'

export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			header:{
				'token':uni.getStorageSync('token') || '',
				'Content-Type':'application/x-www-form-urlencoded'
			},
			url:BASE_URL+ options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				if(res.data.errcode !== 0) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}