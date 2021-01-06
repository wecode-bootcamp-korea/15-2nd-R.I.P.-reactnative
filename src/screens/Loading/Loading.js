import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

export default ({ navigation }) => {
  return <Background source={image} />;
};

const image = require("../../../assets/images/loadingRN.png");

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
