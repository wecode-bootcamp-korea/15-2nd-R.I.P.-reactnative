import React from "react";
import MyScreenUserInfo from "./components/MyScreenUserInfo";
import UserActive from "./components/UserActive";
import RecommenUserFriend from "./components/RecommenUserFriend";
import MyScreenTab from "../../navigations/MyScreenTab";
import { View, Text } from "react-native";

const MyScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <MyScreenUserInfo navigation={navigation} />
        <UserActive />
        <RecommenUserFriend />
      </View>
      <MyScreenTab />
    </>
  );
};

export default MyScreen;
