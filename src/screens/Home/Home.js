import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {
  console.log(AsyncStorage.getItem("token"));
  return (
    <Section>
      <Pressable onPress={() => navigation.navigate("Detail")}>
        <Text>go to detail</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Daily")}>
        <Text>go to Daily</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("LocalTrip")}>
        <Text>go to LocalTrip</Text>
      </Pressable>
    </Section>
  );
};

const Section = styled.View`
  background-color: ${(props) => props.theme.beautyBg};
`;
