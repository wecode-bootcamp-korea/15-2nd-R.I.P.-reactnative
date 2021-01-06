import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../src/screens/Home/Home";
import Category from "../screens/Category/Category";
import Feed from "../screens/Feed/Feed";
import MyScreen from "../screens/MyScreen/MyScreen";

const Tabs = createBottomTabNavigator();

export default ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = "";
          switch (route.name) {
            case "Home":
              iconName += "home-outline";
              break;
            case "Category":
              iconName += "menu-outline";
              break;
            case "Feed":
              iconName += "chatbubble-ellipses-outline";
              break;
            case "MyScreen":
              iconName += "person-outline";
              break;
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? "blue" : "gray"}
              size={25}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Category" component={Category} />
      <Tabs.Screen name="Feed" component={Feed} navigation={navigation} />
      <Tabs.Screen
        name="MyScreen"
        component={MyScreen}
        navigation={navigation}
      />
    </Tabs.Navigator>
  );
};
