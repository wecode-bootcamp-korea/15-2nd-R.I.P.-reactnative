import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";

function Review({
  userProfileImgUrl,
  username,
  userGrade,
  writtenDate,
  bulletinContent,
  reviewImages,
}) {
  return (
    <WholeContainer>
      <Title>프립 후기</Title>
      <UserProfileView>
        <Image
          style={styles.img}
          source={{
            uri: userProfileImgUrl,
          }}
        />
        <View>
          <Text style={styles.userName}>{username}</Text>
          <RowContainer>
            <Text style={styles.grade}>{userGrade}점 </Text>
            <Text style={styles.date}>{writtenDate}</Text>
          </RowContainer>
        </View>
      </UserProfileView>
      <UserReviewContent>
        <Text numberOfLines={5}>{bulletinContent}</Text>
      </UserReviewContent>

      <ScrollView style={styles.scrollViewContainer} horizontal={true}>
        {reviewImages.map((el) => {
          return (
            <Image
              key={el.id}
              style={styles.reviewPhotos}
              source={{ uri: el.review_image }}
            />
          );
        })}
      </ScrollView>
      <LookAllReviewsPressable>
        <Text style={styles.button}>후기 모두 보기</Text>
      </LookAllReviewsPressable>
    </WholeContainer>
  );
}

export default Review;

const styles = StyleSheet.create({
  img: { borderRadius: 50, width: 60, height: 60, marginRight: 14 },
  userName: { fontSize: 20, fontWeight: "bold" },
  grade: { color: "#0574e6" },
  date: { paddingTop: 2, color: "#CFD0CF", fontSize: 12 },
  scrollViewContainer: { paddingTop: 20 },
  reviewPhotos: { width: 100, height: 100, marginRight: 10 },
  button: { textAlign: "center", paddingTop: 13 },
});

const RowContainer = styled.View`
  flex-direction: row;
`;

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

const UserProfileView = styled.View`
  flex-direction: row;
  padding-top: 20px;
`;

const UserReviewContent = styled.View`
  padding-top: 20px;
`;

const LookAllReviewsPressable = styled.Pressable`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #cccccc;
`;

const IMAGEARRAY = [
  "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80",
  "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80",
  "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80",
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];
