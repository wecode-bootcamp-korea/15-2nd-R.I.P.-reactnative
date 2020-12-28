import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Login from "../screens/Login";
import SingUpInput from "../screens/SingUpInput";
import SingUpPage from "../screens/SingUpPage";
import Loading from "../screens/Loading";
import Daily from "../screens/Daily";
import DetailPage from "../screens/DetailPage";
import LocalTrip from "../screens/LocalTrip";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SingUpInput" component={SingUpInput} />
    <Stack.Screen name="SingUpPage" component={SingUpPage} />
    <Stack.Screen name="Loading" component={Loading} />
    <Stack.Screen name="Daily" component={Daily} />
    <Stack.Screen name="LocalTrip" component={LocalTrip} />
    <Stack.Screen name="DetailPage" component={DetailPage} />
  </Stack.Navigator>
);
