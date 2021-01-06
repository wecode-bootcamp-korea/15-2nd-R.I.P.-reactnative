import React from "react";
import styled from "styled-components/native";
import { View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WIDTH } from "../../../constants/layout";

const SignUpBTN = ({
  backgroundColor,
  iconName,
  iconColor,
  BTNText,
  navigation,
  navigate,
}) => {
  return (
    <SignUpView style={{ backgroundColor: backgroundColor }}>
      <SignUpBotton onPress={() => navigation.navigate(`${navigate}`)}>
        <IconView>
          <Ionicons name={iconName} size={22} color={iconColor} />
        </IconView>
        <SignUpBTNText color={iconColor}>{BTNText}</SignUpBTNText>
      </SignUpBotton>
    </SignUpView>
  );
};

export default SignUpBTN;

const SignUpView = styled.View`
  width: ${WIDTH / 1.3};
  height: 50px;
  justify-content: center;
  border-radius: 10;
  margin: 4px 0;
`;
const SignUpBotton = styled.Pressable`
  position: relative;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const IconView = styled.View`
  position: absolute;
  left: 13px;
`;

const SignUpBTNText = styled.Text`
  font-size: 14px;
  margin: 0 auto;
  font-weight: 500;
  color: ${(props) => props.color};
`;
