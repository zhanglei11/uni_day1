<template>
  <view>
    学习页3
    <view class="">
      <uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>

    </view>

    <view class="">
      <!-- 一般用法 -->
      <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

      <!-- 不显示天数 -->
      <uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

      <!-- 修改颜色 -->
      <uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30"
        :second="0"></uni-countdown>
    </view>

    <view class="">
      <button type="primary" size="mini" @click="open">打开</button>
      <uni-drawer :mask="true" :maskClick="true" mode="left" ref="ddddd">
        <view style="padding:30rpx;">
          <view class="uni-title">抽屉式导航</view>
        </view>
      </uni-drawer>
    </view>

    <view class="">
      <uni-fab :pattern="pattern" horizontal="left" vertical="bottom" direction="horizontal" @trigger="trigger"></uni-fab>
    </view>

    <view class="">
      <uni-fav :checked="true" @click="onClick"></uni-fav>
      <uni-fav :checked="false" class="favBtn" circle="true" bg-color="#dd524d" bg-color-checked="#007aff" @click="onClick"></uni-fav>
    </view>

    <view class="">
      <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />

    </view>

    <view class="">
      <!-- 一般用法 -->
      <uni-grid :column="3">
        <uni-grid-item>
          <uni-icons type="contact" size="30"></uni-icons>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
      </uni-grid>

      <!-- 不带边框并矩形显示 -->
      <uni-grid :column="3" :show-border="false" :square="false">
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
      </uni-grid>
    </view>


  </view>
</template>

<script>
  export default {
    data() {
      return {
        city: '',
        candidates: [],
        pattern: {
          color: '#3c3e49',
          selectedColor: '#007AFF',
          backgroundColor: '#ffffff',
          buttonColor: '#3c3e49',
        },
        options: [{
          icon: 'headphones',
          text: '客服'
        }, {
          icon: 'shop',
          text: '店铺',
          info: 2,
          infoBackgroundColor: '#007aff',
          infoColor: "red"
        }, {
          icon: 'cart',
          text: '购物车',
          info: 2
        }],
        buttonGroup: [{
            text: '加入购物车',
            backgroundColor: '#ff0000',
            color: '#fff'
          },
          {
            text: '立即购买',
            backgroundColor: '#ffa200',
            color: '#fff'
          }
        ],
        list: [{
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
    methods: {
      async getlist() {

      },
      open() {
        this.$refs.ddddd.open()

      },
      onClick() {},
      onClick(e) {
        uni.showToast({
          title: `点击${e.content.text}`,
          icon: 'none'
        })
      },
      buttonClick(e) {
        console.log(e)
        this.options[2].info++
      }
    },
    created() {
      this.getlist()
    }
  }
</script>

<style lang="less">

</style>
