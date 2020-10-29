<template>
	<view>
		此处为调用接口案例
    <view class="" v-for="item in list" :key="item.id">
      <text class="mr20">{{item.name}}</text>
      <text>{{item.parent_name}}</text>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        list:[]
			};
		},
    methods:{
      async getLogin() {
      	let params = {
      		user_name:'sysadmin',
      		password:'c2QyMDIwMjA=',
      	}
      	const res = await this.$myRuquest({
      		url: '/v1/login',
      		method:'POST',
      		data:params
      	})
        console.log(res.data.data.token)
        
      	uni.setStorageSync('token',res.data.data.token)
        this.getlist()
      },
      async getlist () {
        const res = await this.$myRuquest({
          url: '/v1/area/list',
          method:'GET',
        })
        this.list = res.data.data
        console.log(res)
      }
    },
    created(){
      this.getLogin()
    }
	}
</script>

<style lang="less">
.mr20{
  margin-right: 20px;
}
</style>
