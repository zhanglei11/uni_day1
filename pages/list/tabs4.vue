<template>
	<view>
		<view class="tabs4">
      <button type="primary" class="button" size="mini" @click="init">登录</button>
		  
		</view>
    <view class="">{{bb}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aa:'',
        bb:'',
			};
		},
    methods:{
      async init() {
        if(uni.getStorageSync('token')!='') return
        
        console.log("登录")
        let params = {
          user_name:'sysadmin',
          password:'c2QyMDIwMjA=',
        }
        const res = await this.$myRuquest({
        url: '/v1/login',
        method:'POST',
        data:params
        })         
        uni.setStorageSync('token',res.data.data.token)
        // uni.navigateTo({
        //    url: `/pages/list/tabs1`,
        // });
       //   this.getlist()
       // // uni.getLocation({
       //     type: 'wgs84',
       //     success: function (res) {
       //       this.aa = res.longitude
       //       this.bb = res.latitude
       //         console.log('当前位置的经度：' + res.longitude);
       //         console.log('当前位置的纬度：' + res.latitude);
       //     }
       // });
      },
    },
    created(){
    }
	}
</script>

<style lang="less">
  .tabs4{
    text-align: center;
    .button{
      margin-top: 400rpx;
      
      
    }
  }

</style>
