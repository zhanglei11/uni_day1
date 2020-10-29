<template>
  <view class="tabs2">
    <view class="left">
      <button v-for="item in list" :key="item.id" :class="ID==item.id?'active':''" @click="select(item.id)">{{item.name}}</button>

    </view>
    <view class="right">
      <view class="" v-if="ID == 1">
        <view class="list" v-for="(item,index) in listCon" :key="index">
          <view class="left-s">
            <image style="height: 80px;width: 100px;" :src="item.img" :mode="item.id"></image>
          </view>
          <view class="right-s">
            <view>{{item.name}}</view>
            <view class="min-size">{{item.name1}}</view>
            <view class="min-size text-s">
              <text class="red big">{{item.money}}</text>
              <text class="red">{{item.moneymin}}</text>
              <text class="ml10 line">{{item.moneyOld}}</text>
              <button class="button" type="warn" size="mini">
                <uni-icons type="qq" size="30"></uni-icons>
              </button>
            </view>
          </view>
        </view>
      </view>
      <view class="" v-if="ID == 2">列表2</view>
      <view class="" v-if="ID == 3">列表3</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        ID: 1,
        list: [{
            id: 1,
            name: '列表1'
          },
          {
            id: 2,
            name: '列表2'
          },
          {
            id: 3,
            name: '列表3'
          },
        ],
        listCon: [{
            id: 'aspectFill',
            img: '/static/image/image1.jpg',
            name: '大米介绍',
            name1: '小字体介绍',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40'
          },
          {
            id: 'aspectFill',
            img: '/static/image/image1.jpg',
            name: '大米介绍',
            name1: '小字体介绍',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40'
          },

          {
            id: 'aspectFill',
            img: '/static/image/image1.jpg',
            name: '大米介绍',
            name1: '小字体介绍',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40'
          },

          {
            id: 'aspectFill',
            img: '/static/image/image1.jpg',
            name: '大米介绍',
            name1: '小字体介绍',
            money: '￥14',
            moneymin: '.30',
            moneyOld: '22.40'
          },

        ]

      };
    },
    methods: {
      select(id) {
        if (id == this.ID) return
        this.ID = id
      }
    }
  }
</script>

<style lang="less">
  uni-page-body {
    height: 100%;
  }

  .tabs2 {
    background: #fff;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  .ml10 {
    margin-left: 10px;
  }

  .left {
    background: #9b9b9b;
    width: 25%;
    height: 100%;
    float: left;

    &>uni-button {
      border-radius: 0 !important;

      &::after {
        border-bottom: 0 solid #fff !important;
        border-right: 0 solid #fff !important;
        border-radius: 0 !important;
      }

      &.active {
        // background: blue;
        // color: #ffff;
        color: red;

        &::after {
          border-left: 5px solid red !important;

        }
      }

    }
  }

  .right {
    float: left;
    display: inline-block;
    width: 75%;

    .list {
      display: flex;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #9b9b9b;
      padding: 10px 0;

      &>.left-s {
        float: left;
        margin-left: 10px;
      }

      &>.right-s {
        float: left;
        width: 100%;
        padding-left: 10px;
      }
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
        float: right;
        margin-right: 10px;
        width: 60px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;

        &>uni-text {
          color: #fff !important;
          font-size: 22px !important;

        }
      }
    }
  }
</style>
