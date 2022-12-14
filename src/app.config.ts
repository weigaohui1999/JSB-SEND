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
        text: "้ฆ้กต",
        iconPath: "assets/images/home.png",
        selectedIconPath: "assets/images/home-o.png",
      },
      {
        pagePath: "pages/Weapp/Mine/index",
        text: "ๆ็",
        iconPath: "assets/images/mine.png",
        selectedIconPath: "assets/images/mine-o.png",
      },
    ],
  },
});
