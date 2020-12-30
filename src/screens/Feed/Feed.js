import React from "react";
import { View, Text, Pressable } from "react-native";

export default ({ navigation }) => (
  <View>
    <Pressable onPress={() => navigation.navigate("Detail")}>
      <Text>go to detail</Text>
    </Pressable>
    <Text>Feed</Text>
  </View>
);
