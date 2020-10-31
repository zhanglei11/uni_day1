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
      async getlist () {
        const res = await this.$myRuquest({
          url: '/v1/area/list',
          method:'GET',
        })
        this.list = res.data.data
        // console.log(res)
      }
    },
    created(){
      this.getlist() 
    }
	}
</script>

<style lang="less">
.mr20{
  margin-right: 20px;
}
</style>
