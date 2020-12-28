import React from "react";
import { View, Text, Pressable } from "react-native";

export default ({ navigation }) => (
  <View>
    <Pressable onPress={() => navigation.navigate("DetailPage")}>
      <Text>go to detail page</Text>
    </Pressable>
    <Pressable onPress={() => navigation.navigate("Daily")}>
      <Text>go to Daily</Text>
    </Pressable>
    <Pressable onPress={() => navigation.navigate("LocalTrip")}>
      <Text>go to LocalTrip</Text>
    </Pressable>
  </View>
);
