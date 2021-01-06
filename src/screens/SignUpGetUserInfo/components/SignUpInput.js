import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { WIDTH } from "../../../constants/layout";

const SignUpInput = ({
  placeholderValue,
  secureTextEntry,
  width,
  valueState,
  setValue,
  checkValue,
}) => {
  const [isFocus, setFocus] = useState(false);

  const onChangeBackground = () => {
    setFocus(!isFocus);
  };

  return (
    <SignUpInputView>
      <SignUpInputText
        onFocus={onChangeBackground}
        placeholder={placeholderValue}
        secureTextEntry={secureTextEntry}
        backgroundColor={isFocus ? "white" : "#fafafa"}
        width={+width}
        onChange={checkValue}
        onChangeText={(valueState) => setValue(valueState)}
        defaultValue={valueState}
      />
    </SignUpInputView>
  );
};

export default SignUpInput;

const SignUpInputView = styled.View`
  align-items: center;
  border-radius: 10;
  border: 1px solid #f0f0f0;
`;
const SignUpInputText = styled.TextInput`
  margin-top: 10px;
  height: 50px;
  padding: 10px;
  border-radius: 10;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
`;
