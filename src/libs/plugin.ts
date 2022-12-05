import {
  TrendArrow,
  Grid,
  GridItem,
  Icon,
  Tabs,
  TabPane,
  InfiniteLoading,
  Sticky,
  Avatar,
  List,
} from "@nutui/nutui-taro";

const UI = [
  TrendArrow,
  Grid,
  GridItem,
  Icon,
  Tabs,
  TabPane,
  InfiniteLoading,
  Sticky,
  Avatar,
  List,
];

export default (app) => {
  //  全局注册ui组件
  UI.forEach((item) => {
    app.use(item);
  });
};
