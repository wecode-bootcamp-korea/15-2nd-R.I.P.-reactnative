import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import SignUpGetUserInfo from "../screens/SignUpGetUserInfo";
import CheckEmail from "../screens/CheckEmail";
import Loading from "../screens/Loading";
import Daily from "../screens/Daily";
import Detail from "../screens/Detail";
import LocalTrip from "../screens/LocalTrip";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignUpGetUserInfo" component={SignUpGetUserInfo} />
    <Stack.Screen name="CheckEmail" component={CheckEmail} />
    <Stack.Screen name="Loading" component={Loading} />
    <Stack.Screen name="Daily" component={Daily} />
    <Stack.Screen name="LocalTrip" component={LocalTrip} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
