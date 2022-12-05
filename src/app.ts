import { createApp } from "vue";

import installPlugin from "@/libs/plugin";
import "./app.less";

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
//  插件依赖安装
installPlugin(App);

export default App;
