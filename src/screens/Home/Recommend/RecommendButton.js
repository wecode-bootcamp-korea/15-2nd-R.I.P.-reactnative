import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styled from "styled-components/native";

const RecommendButton = ({ navigation, address, categoryName }) => {
  return (
    <Form>
      <IconButton onPress={() => navigation.navigate("Detail")}>
        <GoToList
          source={{
            uri: `${address}`,
          }}
        />
        <Text>{categoryName}</Text>
      </IconButton>
    </Form>
  );
};

export default RecommendButton;

const Form = styled.View`
  width: 23%;
  height: 100px;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

const IconButton = styled.Pressable`
  width: 70px;
  align-items: center;
`;

const GoToList = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50;
  margin-bottom: 7px;
`;
