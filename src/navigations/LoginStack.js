import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import SignUpGetUserInfo from "../screens/SignUpGetUserInfo/SignUpGetUserInfo";
import Main from "../navigations/Stack";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUpGetUserInfo" component={SignUpGetUserInfo} />
    </Stack.Navigator>
  );
};
