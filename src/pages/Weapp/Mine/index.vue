<template>
  <view class="Mine">
    <view class="header">
      <view class="user">
        <nut-avatar size="large"
          icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png">
        </nut-avatar>
        <view class="title">{{day().format('a')}}好,丶纸蓟</view>
      </view>
      <MyWave />
    </view>
  </view>
</template>

<script setup>
import MyWave from "@/components/MyWave.vue"

import { day } from "@/libs/utils"
</script>

<style lang="less">
.Mine {
  .header {
    position: relative;
    height: 30vh;
    background-image: url('../../../assets/images/mine-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .user {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.3);

      .title {
        width: 100%;
        text-align: center;
        color: snow;
        font-size: 16px;
      }
    }
  }
}
</style>
