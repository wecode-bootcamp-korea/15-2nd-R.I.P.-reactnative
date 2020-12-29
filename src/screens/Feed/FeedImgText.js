import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

function FeedImgText(props) {
  const { feedPhotoUrl, reviewContent, className, navigation } = props;

  return (
    <View>
      <StyledImage
        source={{
          uri: feedPhotoUrl,
        }}
      />
      <LinkToDetail onPress={() => navigation.navigate("Detail")}>
        <StyledText numberOfLines={1}>{className}</StyledText>
      </LinkToDetail>
      <TextContainer>
        <Text numberOfLines={2}>{reviewContent}</Text>
      </TextContainer>
    </View>
  );
}

const StyledText = styled.Text`
  color: ${(props) => props.theme.blueText};
  margin-top: 12px;
  margin-left: 12px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 344;
  border-radius: 24;
  margin: 0 auto;
`;

const TextContainer = styled.View`
  margin: 5px auto;
`;

const LinkToDetail = styled.Pressable`
  width: 100%;
  height: 48px;
  margin: 12px auto;
  border: 1px solid #eaecee;
  border-radius: 50px;
  background-color: transparent;
`;

export default FeedImgText;
