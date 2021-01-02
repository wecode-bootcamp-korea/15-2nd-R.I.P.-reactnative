import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  View,
  Pressable,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";

function InputingComments(props) {
  const { comments, setComments } = props;
  const [inputingComment, setInputingComment] = useState("");

  const AddComment = () => {
    let fakeComments = [...comments];

    fakeComments.push({
      id: fakeComments[fakeComments.length - 1].id + 1,
      userImgUrl:
        "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      userName: "박채훈",
      comment: inputingComment,
      time: "1",
    });

    setComments(fakeComments);
    setInputingComment("");
  };

  return (
    <WholeContainer>
      <Image
        style={styles.img}
        source={{
          uri:
            "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        }}
      />
      <InputContainer>
        <StyledTextInput
          placeholder="댓글 달기..."
          placeholderTextColor="rgb(238, 238, 238)"
          onChangeText={(text) => setInputingComment(text)}
          value={inputingComment}
        />
        <AbsolutePressable
          disabled={inputingComment === ""}
          onPress={() => {
            AddComment();
          }}
        >
          <StyledText>등록</StyledText>
        </AbsolutePressable>
      </InputContainer>
    </WholeContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginRight: 10,
  },
});

const WholeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 82px;
  padding-top: 10;
  padding-right: 30;
  padding-left: 30;
  border: 1px solid rgb(238, 238, 238);
`;

const InputContainer = styled.View`
  position: relative;
  flex-direction: row;
  width: 90%;
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 46px;
  padding-left: 10;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 22.5;
`;

const AbsolutePressable = styled.Pressable`
  position: absolute;
  top: 18%;
  right: 5%;
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.blueText};
`;

export default InputingComments;
