import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import styled from "styled-components/native";
import SignUpInput from "../SignUpGetUserInfo/components/SignUpInput";
import SignUpBtn from "../SignUpGetUserInfo/components/SignUpBtn";
import { WIDTH, HEIGHT } from "../../../src/constants/layout";
import SignUpHeader from "../SignUpGetUserInfo/components/SignUpHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN } from "../../../src/config";
import { emailRegex, passwordRegex } from "../../../src/regax";

const Login = ({ navigation }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onPressSendAuthNumberBtn = () => {
    if (emailRegex.test(loginEmail) && passwordRegex.test(loginPassword)) {
      return getToken();
    } else {
      Alert.alert("정보를 확인하세요");
    }
  };

  const getToken = () => {
    fetch(LOGIN, {
      method: "POST",
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "SUCCESS") {
          Alert.alert("RIP에 오신것을 환영합니다.");
          AsyncStorage.setItem("token", res.ACCESS_TOKEN);
          AsyncStorage.setItem("nickname", res.nickname);
          navigation.navigate("Main");
        } else {
          Alert.alert("로그인에 실패하셨습니다.");
        }
      });
  };

  return (
    <>
      <SignUpHeader
        text="로그인"
        navigation={navigation}
        navigationLocation="SignUp"
      />

      <SignUpInput
        secureTextEntry={false}
        placeholderValue={"아이디(이메일)"}
        width={WIDTH / 1.2}
        valueState={loginEmail}
        setValue={setLoginEmail}
      />

      <SignUpInput
        secureTextEntry={true}
        placeholderValue={"비밀번호"}
        width={WIDTH / 1.2}
        valueState={loginPassword}
        setValue={setLoginPassword}
      />
      <SignUpBtn
        navigation={navigation}
        width={WIDTH / 1.2}
        backgroundColor="#b5c5d5"
        height="60"
        marginTop="50"
        fontColor="white"
        text="로그인"
        handlePressbtn={onPressSendAuthNumberBtn}
      />
    </>
  );
};

export default Login;
