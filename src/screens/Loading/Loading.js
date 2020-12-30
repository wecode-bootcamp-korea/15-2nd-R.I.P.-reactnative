import React from "react";
import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export default () => <Background source={image} />;

const image = require("../../../assets/images/loadingRN.png");

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;