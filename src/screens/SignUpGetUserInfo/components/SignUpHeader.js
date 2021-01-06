import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import { HEIGHT } from "../../../constants/layout";

const SignUpHeader = ({ navigation, navigationLocation, text }) => (
  <Outline>
    <BackButton onPress={() => navigation.navigate(navigationLocation)}>
      <BackIconView>
        <Ionicons name="chevron-back" size={30} color="black" />
      </BackIconView>
    </BackButton>
    <HeaderNameView>
      <HeaderName>{text}</HeaderName>
    </HeaderNameView>
  </Outline>
);

export default SignUpHeader;

const Outline = styled.View`
  margin-top: 20px;
  height: ${HEIGHT / 11};
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.Pressable`
  position: absolute;
  left: 10px;
`;
const BackIconView = styled.View``;

const HeaderNameView = styled.View``;
const HeaderName = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
