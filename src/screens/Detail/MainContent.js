import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import styled from "styled-components/native";

function MainContent({ contextImgs, contextText }) {
  return (
    <WholeContainer>
      <Title>프립 소개</Title>
      {contextImgs.map((el) => {
        return (
          <Image
            key={el.id}
            style={styles.img}
            source={{
              uri: el.image_url,
            }}
          />
        );
      })}
      <Text>{contextText}</Text>
    </WholeContainer>
  );
}

export default MainContent;

const styles = StyleSheet.create({
  img: { width: "100%", height: 500, marginTop: 20 },
});

const WholeContainer = styled.View`
  padding-top: 20;
  padding-bottom: 20;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

const Title = styled.Text`
  padding-top: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #333d4b;
`;
