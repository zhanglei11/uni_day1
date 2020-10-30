<template>
  <view class="tabs1">
    <view class="title1">
      <uni-swiper-dot :info="info" :current="currentImage" field="currentImage" :mode="mode">
        <swiper class="swiper-box" @change="change">
          <swiper-item v-for="(item ,index) in info" :key="index">
            <view class="swiper-item">
              <image style="width: 100%;" :mode="item.mode" :src="item.src"></image>
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
    </view>
    <view class="title2">
      <button type="warn" size="mini">
        <view>15.00</view>
        <view>满100.00可使用</view>
      </button>
    </view>

    <view class="title3">
      <uni-search-bar placeholder="搜索商品" @confirm="search()" @cancel="cancelSearch()" radius="10"></uni-search-bar>
    </view>
    <view class="title4">
      <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#4cd964"></uni-segmented-control>
      <view class="content">
        <view v-if="current === 0" class="aaaa">
          <view v-for="(item,index) in list" :key="index">
            <image style="width: 100%; height: 200px;border-radius: 10px;" :src="item.image"></image>
            <view class="ml5">{{item.name}}</view>
            <view class="ml5 min-size">{{item.name1}}</view>
            <view class="ml5 min-size text-s">
              <text class="red big">{{item.money}}</text>
              <text class="red">{{item.moneymin}}</text>
              <text class="ml10 line">{{item.moneyOld}}</text>
              <text class="ml10">{{item.num}}</text>
              <button class="button" type="warn" size="mini">立即抢购</button>
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
  export default {
    data() {
      return {
        items: ['选项卡1', '选项卡2', '选项卡3'],
        current: 0,
        info: [{
          mode: 'aspectFill',

          src: '/static/image/image1.jpg'
        }, {
          mode: 'scaleToFill',

          src: '/static/image/image2.jpeg'
        }, {
          mode: 'scaleToFill',

          src: '/static/image/image3.jpeg'
        }],
        currentImage: 0,
        mode: 'round',
        imageCard: '/static/image/image1.jpg',
        list: [{
            image: '/static/image/image1.jpg',
            name: '关于美女的介绍',
            name1: '这里我再介绍一次',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40',
            num: '已售15件/仅剩20件'
          },
          {
            image: '/static/image/image1.jpg',
            name: '关于美女的介绍',
            name1: '这里我再介绍一次',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40',
            num: '已售15件/仅剩20件'
          },
          {
            image: '/static/image/image1.jpg',
            name: '关于美女的介绍',
            name1: '这里我再介绍一次',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40',
            num: '已售15件/仅剩20件'
          },
          {
            image: '/static/image/image1.jpg',
            name: '关于美女的介绍',
            name1: '这里我再介绍一次',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40',
            num: '已售15件/仅剩20件'
          },
          {
            image: '/static/image/image1.jpg',
            name: '关于美女的介绍',
            name1: '这里我再介绍一次',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40',
            num: '已售15件/仅剩20件'
          },
          {
            image: '/static/image/image1.jpg',
            name: '关于美女的介绍',
            name1: '这里我再介绍一次',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40',
            num: '已售15件/仅剩20件'
          },

        ],
      }
    },
    methods: {
      search() {},
      cancelSearch() {},
      change(e) {
        this.currentImage = e.detail.currentImage;
      },
      onClickItem(e) {
        if (this.current !== e.currentIndex) {
          this.current = e.currentIndex;
        }
      }
    }
  }
</script>

<style lang="less">
  .aaaa {
    padding: 10px;
    border-radius: 10px;
    background: antiquewhite;

    &>uni-view {
      margin-bottom: 10px;
      background: #fff;
      border-radius: 10px;
    }
  }

  .ml5 {
    margin-left: 5px;
  }

  .ml10 {
    margin-left: 10px;
  }

  .min-size {
    font-size: 14px;
    color: #9b9b9b;

    .red {
      color: red;
    }

    .big {
      font-size: 18px;
    }

    .line {
      text-decoration: line-through;
    }
  }

  .text-s {
    padding-bottom: 5px;

    &>uni-text {
      line-height: 30px;
      height: 30px;
    }

    &>.button {
      float: right;
      margin-right: 10px;
    }
  }

  .title2 {
    padding: 10px;
  }

  // .uni-card{
  //   margin: 0 !important;
  // }
</style>
