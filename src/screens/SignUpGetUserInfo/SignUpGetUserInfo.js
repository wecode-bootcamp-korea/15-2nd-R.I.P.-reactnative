import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import styled from "styled-components/native";
import SignUpHeader from "./components/SignUpHeader";
import SignUpInput from "./components/SignUpInput";
import SignUpBtn from "./components/SignUpBtn";
import { WIDTH } from "../../constants/layout";
import CountDown from "react-native-countdown-component";
import {
  SEND_AUTH_NUMBER,
  CHECK_AUTH_NUMBER,
  USER_SIGNUP,
} from "../../../src/config";
import { emailRegex, passwordRegex, phoneRegex } from "../../../src/regax";

const SignUpGetUserInfo = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");

  const [isAuthBtnPress, setIsAuthBtnPress] = useState(false);
  const [isCorrectAuthNubmer, setIsCorrectAuthNumber] = useState(false);
  const [isAllInpuValueCheck, setIsAllInpuValueCheck] = useState(false);

  const sendAuthNumber = async () => {
    fetch(SEND_AUTH_NUMBER, {
      method: "POST",
      body: JSON.stringify({
        phone_number: phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "SUCCESS") {
          setIsAuthBtnPress(true);
        }
      });
  };

  const CheckphoneNumber = () => {
    fetch(CHECK_AUTH_NUMBER, {
      method: "POST",
      body: JSON.stringify({
        phone_number: phoneNumber,
        sms_number: authNumber,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "SUCCESS") {
          Alert.alert("인증번호가 일치합니다");
        } else {
          Alert.alert("인증번호가 일치하지 않습니다.");
        }
      });
  };

  const onSignUpPressBtn = () => {
    const emailCheck = emailRegex.test(email);
    const passWordCheck = passwordRegex.test(pw);
    const phoneNumberCheck = phoneRegex.test(phoneNumber);
    const nickNameCheck = nickName.length;
    if (
      emailCheck &&
      passWordCheck &&
      phoneNumberCheck &&
      pw === rePw &&
      nickNameCheck &&
      authNumber
    ) {
      return userSignUp();
    } else {
      return Alert.alert("정보를 확인해 주세요 ");
    }
  };

  const userSignUp = () => {
    fetch(USER_SIGNUP, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pw,
        nickname: nickName,
        phone_number: phoneNumber,
        sms_number: authNumber,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "SUCCESS") {
          Alert.alert("회원가입 성공");
          navigation.navigate("Login");
        } else {
          Alert.alert("회원가입 실패");
        }
      });
  };

  const onPressSendAuthNumberBtn = () => {
    if (!emailRegex.test(email)) return Alert.alert("이메일을 확인해 주세요");
    if (!passwordRegex.test(pw)) return Alert.alert("패스워드를 확인해 주세요");
    if (!phoneRegex.test(phoneNumber))
      return Alert.alert("번호를 확인해 주세요");
    if (pw !== rePw) return Alert.alert("비밀번호가 일치하지 않습니다.");
    if (!nickName.length) return Alert.alert("닉네임을 입력해 주세요.");
    if (
      emailRegex.test(email) &&
      passwordRegex.test(pw) &&
      phoneRegex.test(phoneNumber)
    )
      return sendAuthNumber();
  };

  const userInfo = [
    {
      secureTextEntry: false,
      placeholderValue: "아이디(이메일)",
      width: WIDTH / 1.2,
      type: "email",
      valueState: email,
      setValue: setEmail,
    },
    {
      secureTextEntry: true,
      placeholderValue: "비밀번호",
      width: WIDTH / 1.2,
      type: "pw",
      valueState: pw,
      setValue: setPw,
    },
    {
      secureTextEntry: true,
      placeholderValue: "비밀번호 한 번 더",
      width: WIDTH / 1.2,
      type: "rePw",
      valueState: rePw,
      setValue: setRePw,
    },
    {
      placeholderValue: "닉네임",
      width: WIDTH / 1.2,
      valueState: nickName,
      setValue: setNickName,
    },
  ];

  return (
    <>
      <SignUpHeader
        text="회원가입"
        navigation={navigation}
        navigationLocation="SignUp"
      />
      {!isAuthBtnPress && (
        <>
          {userInfo.map((el, idx) => {
            return (
              <SignUpInput
                key={idx + 1}
                secureTextEntry={el.secureTextEntry}
                placeholderValue={el.placeholderValue}
                width={el.width}
                type={el.type}
                valueState={el.valueState}
                setValue={el.setValue}
              />
            );
          })}
        </>
      )}
      <SendMailView>
        <SignUpInputView>
          <SignUpInput
            placeholderValue={"휴대폰 번호 (- 없이 입력)"}
            width={WIDTH / 1.2 - 100}
            valueState={phoneNumber}
            setValue={setPhoneNumber}
          />
        </SignUpInputView>

        <SignUpBtn
          navigation={navigation}
          width="90"
          backgroundColor="#eeeeee"
          height="50"
          marginTop="10"
          fontColor="#afafaf"
          text="인증번호 전송"
          handlePressbtn={onPressSendAuthNumberBtn}
        />
      </SendMailView>

      {isAuthBtnPress && (
        <SendMailView>
          <SignUpInputView>
            <SignUpInput
              placeholderValue={"인증번호를 입력해 주세요"}
              width={WIDTH / 1.2 - 80}
              valueState={authNumber}
              setValue={setAuthNumber}
            />
          </SignUpInputView>

          <SignUpBtn
            navigation={navigation}
            width="75"
            backgroundColor="white"
            height="50"
            marginTop="10"
            fontColor="#0e76ef"
            text="인증하기"
            disabled={isCorrectAuthNubmer}
            handlePressbtn={CheckphoneNumber}
          />
        </SendMailView>
      )}
      {isAuthBtnPress && (
        <CountDown
          until={300}
          size={15}
          digitStyle={{ backgroundColor: "none" }}
          digitTxtStyle={{ color: "red" }}
          timeLabels={{ d: null, h: null, m: null, s: null }}
          timeToShow={["M", "S"]}
          showSeparator
        />
      )}

      <SignUpBtn
        navigation={navigation}
        width={WIDTH / 1.2}
        backgroundColor="#b5c5d5"
        height="60"
        marginTop="10"
        fontColor="white"
        text="가입하기"
        disabled={isAllInpuValueCheck}
        handlePressbtn={onSignUpPressBtn}
      />
    </>
  );
};

export default SignUpGetUserInfo;

const SendMailView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const SignUpInputView = styled.View`
  margin-right: 10px;
`;
