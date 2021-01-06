import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Activity from "../screens/Home/Activity/Activity";

const MiddleTab = ({ navigation }) => (
  <Tab.Navigator
    tabBarOptions={{
      style: { backgroundColor: "powderblue" },
    }}
  >
    <Tab.Screen name="액티비티" component={Activity} navigation={navigation} />
    <Tab.Screen name="배움" component={Activity} />
    <Tab.Screen name="건강∙뷰티" component={Activity} />
    <Tab.Screen name="모임" component={Activity} />
  </Tab.Navigator>
);

export default MiddleTab;

const Tab = createMaterialTopTabNavigator();
