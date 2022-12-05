<template>
  <view class="body">
    <view class="title">吉顺办中台系统</view>
    <view class="form-box">
      <view class="row-input">
        <input class="input" placeholder="请输入账号" maxlength="18" />
        <text class="tip">账号</text>
      </view>
      <view class="row-input">
        <input class="input" placeholder="请输入密码" type="password" maxlength="18" />
        <text class="tip">密码</text>
      </view>
      <view class="menu-link">
        <text>忘记密码?</text>
      </view>
      <view class="login-btn" @click="sign()">
        <image src="../../assets/images/go.png">
        </image>
      </view>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro';

export default {
  name: 'Login',
  components: {

  },
  setup() {
    const state = reactive({

    });
    const sign = () => {
      Taro.switchTab({
        url: '/pages/Weapp/Home/index'
      })
    }

    return {
      ...toRefs(state),
      sign
    }
  }
}
</script>

<style lang="less">
.body {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/images/bg.png');
  background-repeat: no-repeat;
  background-size: cover;

  .title {
    height: 30vh;
    line-height: 30vh;
    text-align: center;
    font-size: 70rpx;
    font-weight: bold;
    -webkit-text-fill-color: snow;
    -webkit-text-stroke: 3rpx #5cbdfe;
  }

  .form-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding: 70rpx 0rpx 50rpx 0rpx;
    border-radius: 20rpx;
    top: 30vh;
    left: 60rpx;
    right: 60rpx;
    background-color: #FFFFFF;
    box-shadow: @shadow;

    .row-input {
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      height: 100rpx;
      border-radius: 12rpx;
      border: 1rpx solid @colorSuccess;
      width: 90%;

      .input {
        width: 100%;
        font-size: 14px;
        padding-left: 14px;
      }

      .tip {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100rpx;
        color: @colorSuccess;
        background-color: #FFFFFF;
        top: -16rpx;
        left: 50rpx;
        font-size: 24rpx;
      }
    }

    .menu-link {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      line-height: 100rpx;
      padding-right: 100rpx;
      font-size: 26rpx;
      color: @colorMain;
    }

    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140rpx;
      height: 140rpx;
      border-radius: 100%;
      box-shadow: 0px 5px 3px #96e6a159;
      background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

      image {
        width: 80rpx;
        height: 60rpx;
      }
    }

  }
}
</style>
