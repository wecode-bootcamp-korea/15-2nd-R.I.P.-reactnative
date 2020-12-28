import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Feed from "../screens/Feed";
import MyPage from "../screens/MyPage";

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Category" component={Category} />
      <Tabs.Screen name="Feed" component={Feed} />
      <Tabs.Screen name="Mypage" component={MyPage} />
    </Tabs.Navigator>
  );
};
