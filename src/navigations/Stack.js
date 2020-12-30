import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import SignUpGetUserInfo from "../screens/SignUpGetUserInfo/SignUpGetUserInfo";
import CheckEmail from "../screens/CheckEmail/CheckEmail";
import Loading from "../screens/Loading/Loading";
import Daily from "../screens/Daily/Daily";
import Detail from "../screens/Detail/Detail";
import LocalTrip from "../screens/LocalTrip/LocalTrip";

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
