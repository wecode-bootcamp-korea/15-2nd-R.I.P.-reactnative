import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Daily from "../screens/Daily/Daily";
import Detail from "../screens/Detail/Detail";
import LocalTrip from "../screens/LocalTrip/LocalTrip";
import Login from "./LoginStack";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Daily" component={Daily} />
      <Stack.Screen name="LocalTrip" component={LocalTrip} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="SignUp" component={Login} />
    </Stack.Navigator>
  );
};
