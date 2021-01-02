import React, { useState, useEffect } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

function CommentsModalHeader(props) {
  const { navigation } = props;

  return (
    <Header>
      <StyledPressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="left" size={24} color="black" />
      </StyledPressable>

      <View style={styles.box}>
        <Text style={styles.font}>댓글</Text>
      </View>
    </Header>
  );
}

export default CommentsModalHeader;

const styles = StyleSheet.create({
  font: {
    fontSize: 18,
    fontWeight: "700",
  },
  box: {
    justifyContent: "flex-end",
    marginBottom: 10,
  },
});

const Header = styled.View`
  position: relative;
  height: 100px;
  flex-direction: row;
  border: 1px solid #eaecee;
  justify-content: center;
`;

const StyledPressable = styled.Pressable`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;
