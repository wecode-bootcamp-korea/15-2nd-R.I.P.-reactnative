import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Daily from "../screens/Home/Daily/Daily";
import Recommend from "../screens/Home/Recommend/Recommend";

const TopTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="recommend" component={Recommend} />
    <Tab.Screen name="Daily" component={Daily} />
  </Tab.Navigator>
);

export default TopTab;

const Tab = createMaterialTopTabNavigator();
