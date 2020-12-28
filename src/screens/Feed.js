import React from "react";
import { View, Text, Pressable } from "react-native";

export default ({ navigation }) => (
  <View>
    <Pressable onPress={() => navigation.navigate("DetailPage")}>
      <Text>go to detail page</Text>
    </Pressable>
    <Text>Feed</Text>
  </View>
);
