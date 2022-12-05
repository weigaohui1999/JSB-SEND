<template>
  <view class="Accept">
    <scroll-view
      style="height: 100%"
      :scroll-y="true"
      @scrolltolower="loadMore"
      :scroll-top="0"
      :lowerThreshold="200"
      scrollAnchoring
    >
      <view class="item" v-for="item in data.list" :key="item">
        {{ item }}
      </view>
      <view class="getMore">
        {{ state.isMore ? "加载中..." : "哎呀，这里是底部了啦" }}
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import commossionApi from "@/api/commossion";
const state = reactive({
  refresherEnabled: false,
  isMore: true,
});
const data = reactive({
  list: [],
});

const loadMore = (done) => {
  if (state.refresherEnabled) return;
  state.refresherEnabled = true;
  setTimeout(() => {
    const curLen = data.list.length;
    for (let i = curLen; i < curLen + 10; i++) {
      data.list.push({
        title: "黄慌晃皇荒",
        id: i,
      });
    }
    if (data.list.length > 80) {
      state.isMore = false;
    } else {
      state.refresherEnabled = false;
    }
  }, 500);
};

loadMore();
</script>

<style lang="less">
.Accept {
  height: calc(100vh - 230px);
  overflow: hidden;

  .getMore {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #888;
  }
}
</style>
