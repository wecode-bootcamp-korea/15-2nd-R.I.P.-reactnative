import React, { useState, useEffect } from "react";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { timeForToday } from "../../constants/RealTime";

function Comment({
  comments,
  setComments,
  id,
  userImgUrl,
  userName,
  comment,
  time,
  isLiked,
}) {
  const changeIsLiked = () => {
    const fakeComments = [...comments];

    const specificIsLiked = fakeComments.filter((el) => el.id === id)[0];
    specificIsLiked.isLiked = !specificIsLiked.isLiked;

    setComments(fakeComments);
  };

  return (
    <RowViewContainer>
      <Image
        style={styles.img}
        source={{
          uri: userImgUrl,
        }}
      />
      <View>
        <Text style={styles.smallFontSize}>{userName}</Text>
        <ContentContainer>
          <Text style={styles.bigFontSize}>{comment}</Text>
        </ContentContainer>
        <RowViewContainer>
          <Text style={styles.smallFontSize}>{timeForToday(time)}</Text>
          <Pressable>
            <Text style={styles.smallFontSize}>신고</Text>
          </Pressable>
          <Pressable
            style={styles.flexDirectionRow}
            onPress={() => {
              changeIsLiked();
            }}
          >
            <IconContainer>
              <AntDesign
                name={isLiked ? "heart" : "hearto"}
                size={14}
                color={isLiked ? "red" : "black"}
              />
            </IconContainer>
            <Text style={styles.smallFontSize}>좋아요</Text>
          </Pressable>
        </RowViewContainer>
      </View>
    </RowViewContainer>
  );
}

const styles = StyleSheet.create({
  img: { width: 36, height: 36, marginRight: 8, borderRadius: 50 },
  flexDirectionRow: { flexDirection: "row" },
  smallFontSize: { fontSize: 12, marginRight: 6 },
  smallFontColor: { color: "#C6CAD0" },
  bigFontSize: { fontSize: 14 },
});

const RowViewContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5;
`;

const ContentContainer = styled.View`
  width: 92%;
  padding: 10px 13px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 50;
  background-color: #f2f3f6;
`;

const IconContainer = styled.View`
  padding-top: 3;
  margin-right: 2;
`;

export default Comment;
