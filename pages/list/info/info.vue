<template>
	<view>
    <view class="title">这个文件干嘛来着</view>
 <!--    <div class="map-main">
        <img-over :src="imageSrc" :minZoom="0" :maxZoom="10" :isScale="true"></img-over>
      </div> -->

		<image :src="imageSrc" mode="scaleToFill" style="width: 100%; height: 400rpx;"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        imageSrc:'',
				
			};
		},
    onLoad:function(option){
      console.log(option)
      this.imageSrc = option.imageSrc
        // plus.screen.lockOrientation('landscape-primary'); //锁定
      	// // plus.screen.lockOrientation('landscape-primary');
      	// 	plus.screen.lockOrientation('landscape-secondary');
    },
    methods:{
      
    },
    
	}
</script>

<style lang="less">
  .title{
    text-align: center;
    margin: 20rpx;
    font-size: 38px;
  }
  .map-main {
    position: relative;
    width: 100%;
    height: 400rpx;
    background-color: #e6f7ce;
  }

</style>
