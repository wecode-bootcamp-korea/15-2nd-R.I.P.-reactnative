import React, { useState, useEffect } from "react";
import MyScreenUserInfo from "./components/MyScreenUserInfo";
import UserActive from "./components/UserActive";
import RecommenUserFriend from "./components/RecommenUserFriend";
import MyScreenTab from "../../navigations/MyScreenTab";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyScreen = ({ navigation }) => {
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem(
      "nickname",
      (err, item) => {
        setNickName(item);
      },
      []
    );
  });

  return (
    <>
      <View>
        <MyScreenUserInfo navigation={navigation} nickName={nickName} />
        <UserActive />
        <RecommenUserFriend />
      </View>
      <MyScreenTab />
    </>
  );
};

export default MyScreen;
