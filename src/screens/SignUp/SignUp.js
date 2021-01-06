import React, { useEffect } from "react";
import { View, Text, pressable, Image } from "react-native";
import styled from "styled-components/native";
import { WIDTH, HEIGHT } from "../../constants/layout";
import SignUpBTN from "./components/SignUpBTN";

const BTNStyle = require("../../data/loginButton.json");

const SignUp = ({ navigation }) => {
  return (
    <BackgroundView>
      <BackgroundTopView>
        <BackgroundImg
          source={{
            uri:
              "https://images.unsplash.com/photo-1503414265207-455bcd0955dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          }}
        />
      </BackgroundTopView>
      <BackgroundBottomView>
        <TextView>
          <HelloText>반가워요!</HelloText>
          <BenefitText>
            지금 프립 가입하고 5만원 상당의&nbsp; 쿠폰팩 받아가세요.
          </BenefitText>
        </TextView>
        {BTNStyle.result.map((btn, idx) => (
          <SignUpBTN
            key={idx + 1}
            backgroundColor={btn.backgroundColor}
            iconName={btn.iconName}
            iconColor={btn.iconColor}
            BTNText={btn.BTNText}
            navigation={navigation}
            navigate={btn.navigate}
          />
        ))}
      </BackgroundBottomView>
    </BackgroundView>
  );
};
export default SignUp;

const BackgroundView = styled.View`
  background-color: white;
`;

const BackgroundTopView = styled.View`
  width: 100%;
  height: ${HEIGHT / 2.3};
`;

const BackgroundImg = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BackgroundBottomView = styled.View`
  align-items: center;
`;

const TextView = styled.View`
  align-items: center;
  width: ${WIDTH / 1.8};
  margin: 50px 0 40px 0;
`;

const HelloText = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

const BenefitText = styled.Text`
  color: #9b9b9b;
  margin-top: 30px;
  font-weight: 600;
`;
