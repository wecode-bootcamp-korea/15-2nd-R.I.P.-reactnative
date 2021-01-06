import React from "react";
import { Dimensions, View, Text, Image } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { HEIGHT } from "../../../constants/Layout";

const silderImg = require("../../../data/SilderImg.json");

const Silder = ({ ModifiedHeight, ModifiedPadding, ModifiedBorder }) => {
  return (
    <SliderContainer height={ModifiedHeight} padding={ModifiedPadding}>
      <Swiper loop timeout={3}>
        {silderImg.silderImg.map((img, idx) => (
          <SilderImg key={idx + 1} source={{ uri: `${img.uri}` }} />
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Silder;

const SliderContainer = styled.View`
  width: 100%;
  height: ${(props) => props.height};
`;

const SilderImg = styled.Image`
  width: 100%;
  height: 100%;
`;
