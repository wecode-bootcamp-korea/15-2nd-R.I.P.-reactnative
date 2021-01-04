import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function BookedAndGrade({ numberOfBooked, fripGrade }) {
  return (
    <WholeContainer>
      <RowContainer>
        <FontAwesome
          style={styles.bookmark}
          name="bookmark"
          size={20}
          color="#FF3F33"
        />
        <Text> {numberOfBooked}명이 저장한 프립</Text>
      </RowContainer>
      <RowContainer>
        <AntDesign name="star" size={20} color="#0574e6" />
        <Text> 프립 평점 {fripGrade}</Text>
      </RowContainer>
    </WholeContainer>
  );
}

export default BookedAndGrade;

const styles = StyleSheet.create({
  bookmark: { paddingRight: 2, paddingLeft: 3 },
});

const WholeContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

const RowContainer = styled.View`
  flex-direction: row;
  padding: 20px 0;
`;
