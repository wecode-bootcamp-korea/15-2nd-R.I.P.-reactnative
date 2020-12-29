import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";

export default ({ navigation }) => (
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

const Section = styled.View`
  background-color: ${(props) => props.theme.beautyBg};
`;
