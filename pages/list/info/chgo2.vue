<template>
	<view>
		学习页
<!--    <view class="" v-for="item in list" :key="item.id">
      <text class="mr20">{{item.name}}</text>
      <text>{{item.parent_name}}</text>
    </view> -->
    <view class="">
      <uni-badge text="0" type="default" ></uni-badge>
      <uni-badge text="1" type="primary" size="small"></uni-badge>
      <uni-badge text="2" type="error" size="normal"></uni-badge>
      <uni-badge text="3" type="success"></uni-badge>
      <uni-badge text="4" type="warning"></uni-badge>
      <uni-badge text="5" type="primary" :inverted="true"></uni-badge>
      <uni-badge text="6" type="primary" :inverted="false"></uni-badge>
      
      <uni-badge text="2" type="purple" @click="bindClick"></uni-badge>
      <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
    </view>
    <view class="">
      <view>
          <uni-calendar 
          :insert="true"
          :lunar="true"
          :data="'2019-3-2'"
          :start-date="'2019-3-2'"
          :end-date="'2019-5-20'"
          @change="change"
           />
      </view>
    </view>
    <view class="">
      <view>
          <uni-calendar 
          ref="calendar"
          :insert="false"
          @confirm="confirm"
           />
           <button @click="open">打开日历</button>
      </view>
    </view>
    
    <view class="">
      <!-- 一般用法 -->
      <uni-card title="标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">
          内容主体，可自定义内容及样式
      </uni-card>
      
      <!-- 内容通栏 -->
      <uni-card is-full="true" title="DCloud" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="2018.12.12" >
          <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" style="width: 100%;"></image>
      </uni-card>
      
      <!-- 图文卡片模式 -->
      <uni-card
          title="标题文字"
          mode="style"
          :is-shadow="true"
          thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
          extra="Dcloud 2019-05-20 12:32:19"
          note="Tips"
      >
        那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。
      </uni-card>
      
      <!-- 标题卡片模式 -->
      <uni-card 
          title="Dcloud" 
          mode="title" 
          :is-shadow="true" 
          thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg" 
          extra="技术没有上限" 
          note="Tips"
      >
          那是一个秋意盎然、金风送爽的日子,我和父母一起来到了位于上师大旁的康健园.一踏进公园,一股浓郁的桂香扑鼻而来,泌人心脾,让我心旷神怡,只见一朵朵开得正烈的金色桂花,迎风而立,仿佛在向我招手.我们追着这桂香,走进了清幽的公园.
      </uni-card>
      
      <!-- 自定义底部按钮 -->
      <uni-card title="Dcloud" note="true">
          默认内容
          <template v-slot:footer>
              <view class="footer-box">
                  <view>喜欢</view>
                  <view>评论</view>
                  <view>分享</view>
              </view>
          </template>
      </uni-card>
    </view>
    
    <view class="">
      <uni-collapse @change="change">
          <uni-collapse-item title="标题文字">
              <uni-list>
                  <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
                  <uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
                  <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
              </uni-list>
          </uni-collapse-item>
          <uni-collapse-item title="默认开启" :open="true">
              <view style="padding: 30rpx;"> 折叠内容主体，可自定义内容及样式 </view>
          </uni-collapse-item>
          <uni-collapse-item title="禁用状态" :disabled="true">
              <view style="padding: 30rpx;"> 禁用状态 </view>
          </uni-collapse-item>
      </uni-collapse>
      
      <!-- 手风琴效果 -->
      <uni-collapse accordion="true">
          <uni-collapse-item title="标题文字">
              <view style="padding: 30rpx;">
                  手风琴效果
              </view>
          </uni-collapse-item>
          <uni-collapse-item title="标题文字">
              <view style="padding: 30rpx;">
                  手风琴效果
              </view>
          </uni-collapse-item>
          <uni-collapse-item title="标题文字">
              <view style="padding: 30rpx;">
                  手风琴效果
              </view>
          </uni-collapse-item>
      </uni-collapse>
      
      <!-- 带图标 -->
      <uni-collapse>
          <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
              <view style="padding: 30rpx;">
                  折叠内容主体，可自定义内容及样式
              </view>
          </uni-collapse-item>
          <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
              <view style="padding: 30rpx;">
                  折叠内容主体，可自定义内容及样式
              </view>
          </uni-collapse-item>
      </uni-collapse>
      
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
      async init () {
        // console.log(res)
      },
      change(e){
        console.log(e)
      },
      open(){
          this.$refs.calendar.open();
      },
      confirm(e) {
          console.log(e);
      }
    },
    created(){
      this.init() 
    }
	}
</script>

<style lang="less">
.mr20{
  margin-right: 20px;
}
</style>
