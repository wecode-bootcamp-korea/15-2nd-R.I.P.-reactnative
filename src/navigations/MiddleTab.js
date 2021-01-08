import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Activity from "../screens/Home/Activity/Activity";
import Trip from "../screens/Home/Activity/Trip";
import { HEIGHT } from "../constants/layout";

const MiddleTab = ({ navigation }) => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: "#0e74ef",
      },
      labelStyle: {
        fontSize: 15,
        color: "white",
      },
    }}
  >
    <Tab.Screen name="강릉여행" component={Trip} />
    <Tab.Screen name="서핑" component={Activity} />
  </Tab.Navigator>
);

export default MiddleTab;

const Tab = createMaterialTopTabNavigator();
