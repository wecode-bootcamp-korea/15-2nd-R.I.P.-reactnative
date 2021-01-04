import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Daily from "../screens/Daily/Daily";
import Detail from "../screens/Detail/Detail";
import LocalTrip from "../screens/LocalTrip/LocalTrip";
import Login from "./LoginStack";
import FeedCommentsModal from "../screens/FeedCommentsModal/FeedCommentsModal";
import MoreSuffing from "../screens/Home/Recommend/MoreSuffing/MoreSuffing";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Daily" component={Daily} />
      <Stack.Screen name="LocalTrip" component={LocalTrip} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="SignUp" component={Login} />
      <Stack.Screen
        mode="modal"
        name="FeedCommentsModal"
        component={FeedCommentsModal}
      />
      <Stack.Screen name="MoreSuffing" component={MoreSuffing} />
    </Stack.Navigator>
  );
};
