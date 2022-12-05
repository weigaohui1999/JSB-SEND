export default defineAppConfig({
  pages: [
    "pages/Login/index",
    "pages/Weapp/Home/index",
    "pages/Weapp/Mine/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/Weapp/Home/index",
        text: "首页",
        iconPath: "assets/images/home.png",
        selectedIconPath: "assets/images/home-o.png",
      },
      {
        pagePath: "pages/Weapp/Mine/index",
        text: "我的",
        iconPath: "assets/images/mine.png",
        selectedIconPath: "assets/images/mine-o.png",
      },
    ],
  },
});
