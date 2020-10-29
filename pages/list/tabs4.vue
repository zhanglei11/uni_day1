<template>
	<view>
		<view class="">
      {{aa}}
		  
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
       uni.getLocation({
           type: 'wgs84',
           success: function (res) {
             this.aa = res.longitude
             this.bb = res.latitude
               console.log('当前位置的经度：' + res.longitude);
               console.log('当前位置的纬度：' + res.latitude);
           }
       });
      },
    },
    created(){
      this.init()
    }
	}
</script>

<style lang="less">

</style>
