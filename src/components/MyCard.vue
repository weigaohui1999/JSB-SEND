<template>
    <view class="Card">
        <view class="header" v-if="title">
            <nut-icon :name="icon"></nut-icon>
            <text class="">{{title}}</text>
        </view>
        <view class="main">
            <slot />
        </view>
    </view>
</template>

<script setup>
const props = defineProps({
    title: String,
    align: {
        type: String,
        default: 'center'
    },
    icon: {
        type: String,
        default: 'am-blink'
    }
})


</script>

<style lang="less">
.Card {
    box-sizing: border-box;
    margin: 8PX 20PX;
    box-shadow: @shadow;
    border-radius: @radio;


    .header {
        width: 100%;
    }
}
</style>
