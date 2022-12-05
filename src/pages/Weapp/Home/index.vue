<template>
  <view class="Home">
    <view class="header">
      <!-- 办件概况 -->
      <MyCard>
        <nut-grid :column-num="data.statistics.length" :border="false" square>
          <nut-grid-item v-for="(item,index) in data.statistics" :key="index">
            <view class="num">{{item.num}}件</view>
            <view class="types">{{item.title}}</view>
          </nut-grid-item>
        </nut-grid>
      </MyCard>
    </view>
    <view class="main">
      <!-- 业务清单 -->
      <nut-tabs v-model="state.isTab" type="smile" background="#fff">
        <!-- 待受理 -->
        <nut-tabpane title="待受理" pane-key="0">
          <Accept />
        </nut-tabpane>
        <!-- 已受理 -->
        <nut-tabpane title="已受理" pane-key="1">
          Tab 2
        </nut-tabpane>
        <!-- 已完结 -->
        <nut-tabpane title="已完结" pane-key="2">
          Tab 3
        </nut-tabpane>
        <!-- 已终结 -->
        <nut-tabpane title="已终结" pane-key="3">
          Tab 3
        </nut-tabpane>
      </nut-tabs>
    </view>
  </view>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import MyCard from "@/components/MyCard.vue"
import Accept from "./components/accept.vue"

const state = reactive({
  isTab: '0'
});
const data = reactive({
  statistics: [{
    title: '总办件量',
    num: 2233
  }, {
    title: '今日办件量',
    num: 12
  }, {
    title: '昨日办件量',
    num: 23
  }]
})

const handleClick = (type, msg, cover = false) => {

};

</script>

<style lang="less">
.Home {
  .header {

    .num {
      color: #333;
      font-size: 16PX;
    }

    .types {
      color: #888;
      font-size: 15PX;
    }
  }

  .main {}
}
</style>
