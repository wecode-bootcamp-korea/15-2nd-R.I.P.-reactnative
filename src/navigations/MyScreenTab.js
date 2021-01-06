import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyScreenTabScreen from "../screens/MyScreen/MyScreenTabScreen";

const MyScreenTab = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="사용가능" component={MyScreenTabScreen} />
      <Tab.Screen name="예약확정" component={MyScreenTabScreen} />
      <Tab.Screen name="신청내역" component={MyScreenTabScreen} />
    </Tab.Navigator>
  );
};
export default MyScreenTab;
const Tab = createMaterialTopTabNavigator();
