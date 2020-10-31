<template>
  <view class="tabs1">
    
    <view class="title1">
      <uni-swiper-dot :info="infoImage" :current="currentImage" field="currentImage" mode="round">
        <swiper class="swiper-box" @change="changeImage">
          <swiper-item v-for="(item ,index) in infoImage" :key="index">
            <view class="swiper-item">
              <image style="width: 100%;" :mode="item.mode" :src="item.src" @click="checkImage(item)"></image>
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
    </view>
   

    <view class="title3">
      <uni-search-bar placeholder="搜索商品" @confirm="search" @cancel="cancelSearch"></uni-search-bar>
    </view>
   

    <view class="title4">
      <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#F55955"></uni-segmented-control>
      <view class="content">
        <view v-if="current === 0" class="list">
          <view v-for="(item,index) in list" :key="index" class="list-biew">
            <image style="width: 100%; height: 400rpx;border-radius: 20rpx;" :src="item.image"></image>
            <view class="ml5">{{item.name}}</view>
            <view class="ml5 min-size">{{item.name1}}</view>
            
            <view class="ml5 min-size text-s">
              <text class="red big text">{{item.money}}</text>
              <text class="red text">{{item.moneymin}}</text>
              <text class="ml10 line text">{{item.moneyOld}}</text>
              <text class="ml10 text">{{item.num}}</text>
              <button class="button" type="warn" size="mini" @click="_chgo(item)">立即抢购</button>
            </view>
          </view>
        </view>
        <view v-if="current === 1">
          选项卡2的内容
        </view>
        <view v-if="current === 2">
          选项卡3的内容
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  import './index.less'
  export default {
    data() {
      return {
        infoImage: [{ //轮播图图片
          id:1,
          mode: 'aspectFill',
          src: '/static/image/image22.jpeg'
        }, {
          id:2,
          mode: 'scaleToFill',
          src: '/static/image/image33.jpeg'
        }, {
          id:1,
          mode: 'scaleToFill',
          src: '/static/image/image44.jpeg'
        }],
        currentImage: 0, //选中状态
        
        items: ['选项卡1', '选项卡2', '选项卡3'],
        current: 0,
        
        
        imageCard: '/static/image/image1.jpg',
        
        list: [
          
        ],
      }
    },

    methods: {
      //图片滑动
      changeImage(e) {
        console.log('图片滑动触发')
        console.log(e)
        this.currentImage = e.detail.current;
      },
      //点击图片
      checkImage(item){
        console.log(item)
        uni.navigateTo({
            url: `/pages/list/info/info?id=${item.id}&imageSrc=${item.src}`,
        });

      },
      //查询
      search(e) {
        this.$refs.popup.open()
        console.log(e)
      },
      //取消查询
      cancelSearch(e) {
        console.log(e)
      },
      //切换栏目
      onClickItem(e) {
        console.log(e)
        if (this.current !== e.currentIndex) {
          this.current = e.currentIndex;
        }
      },
      //初始化列表
      init(){
        this.list = []
        for (let i = 1; i < 10; i++) {
          let jj = String(i)+String(i)+String(i)
          let bb = String(i)+String(i)
          let cc = parseInt(bb) * 4
          let obj = {
            id:i,
            image: `/static/image/image${jj}.jpeg`,
            name: `这是第${i}图片`,
            name1: `这是第${i}图片的具有介绍`,
            money: `￥${bb}`,
            moneymin: `.${bb}`,
            moneyOld: `${cc}.${bb}`,
            num: `已售${cc}件/仅剩${cc*3}件`
          }
          this.list.push(obj)
        }
      },
      _chgo(item){
        console.log(item)
        switch (item.id){
          case 1:
            uni.navigateTo({
              url: `/pages/list/info/chgo`,
            });
            break;
            case 2:
              uni.navigateTo({
                url: `/pages/list/info/chgo2`,
              });
              break;
              case 3:
                uni.navigateTo({
                  url: `/pages/list/info/chgo2`,
                });
                break;
          default:
            break;
        }

      },
    },
    created() {
      this.init()
    },
  }
</script>
