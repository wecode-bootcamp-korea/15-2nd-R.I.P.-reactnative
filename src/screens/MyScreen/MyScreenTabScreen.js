import React from "react";
import { Fontisto } from "@expo/vector-icons";
import styled from "styled-components/native";
import { HEIGHT } from "../../constants/layout";

const MyScreenTabScreen = () => (
  <Outline>
    <IconView>
      <Icon>
        <Fontisto name="ticket" size={80} color="#e1e1e1" />
      </Icon>
      <IconText>아직 사용가능한 프립이 없어요</IconText>
    </IconView>
  </Outline>
);

export default MyScreenTabScreen;
const Outline = styled.View`
  align-items: center;
  justify-content: center;
  height: ${HEIGHT / 2.3};
  background-color: white;
`;
const IconView = styled.View`
  height: 130px;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.View``;
const IconText = styled.Text`
  color: #e3e3e3;
`;
