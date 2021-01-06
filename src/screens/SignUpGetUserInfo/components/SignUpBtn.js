import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { WIDTH } from "../../../constants/layout";

const SignUpBtn = ({
  navigation,
  width,
  backgroundColor,
  height,
  marginTop,
  fontColor,
  text,
  handlePressbtn,
}) => {
  return (
    <NextBtnView>
      <NextBtn
        style={{
          width: +width,
          height: +height,
          backgroundColor: backgroundColor,
          marginTop: +marginTop,
        }}
        onPress={handlePressbtn}
      >
        <NextBtnText style={{ color: fontColor }}>{text}</NextBtnText>
      </NextBtn>
    </NextBtnView>
  );
};

export default SignUpBtn;

const NextBtnView = styled.View`
  align-items: center;
`;

const NextBtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 10;
`;

const NextBtnText = styled.Text`
  color: white;
  font-weight: 600;
`;
