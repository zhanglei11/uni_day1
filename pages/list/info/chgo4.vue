<template>
	<view>
 学习页
 <view class="">
   <uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>

 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        list:[{
    "letter": "A",
    "data": [
        "阿克苏机场",
        "阿拉山口机场",
        "阿勒泰机场",
        "阿里昆莎机场",
        "安庆天柱山机场",
        "澳门国际机场"
    ]
}, {
    "letter": "B",
    "data": [
        "保山机场",
        "包头机场",
        "北海福成机场",
        "北京南苑机场",
        "北京首都国际机场"
    ]
}]
			};
		},
    methods:{
      async getlist () {
        // const res = await this.$myRuquest({
        //   url: '/v1/area/list',
        //   method:'GET',
        // })
        // this.list = res.data.data
        // // console.log(res)
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
