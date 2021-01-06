import React from "react";
import styled from "styled-components/native";

const Alarm = ({ text }) => {
  return (
    <AlarmView>
      <AlarmText>{text}</AlarmText>
    </AlarmView>
  );
};

export default Alarm;

const AlarmView = styled.View`
  height: 15px;
  margin: 10px 0 5px 35px;
`;

const AlarmText = styled.Text`
  font-size: 12px;
  color: red;
`;
