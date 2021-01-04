import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";

function HostInfo({
  hostName,
  hostProfileImgUrl,
  numberOfPosting,
  totalNumberOfLikes,
}) {
  return (
    <WholeContainer>
      <Title>호스트</Title>
      <HostProfileView>
        <Image
          style={styles.img}
          source={{
            uri: hostProfileImgUrl,
          }}
        />
        <View>
          <Text style={styles.hostName}>{hostName}</Text>
          <Text>
            프립 {numberOfPosting} | 좋아요 {totalNumberOfLikes}
          </Text>
        </View>
      </HostProfileView>
      <HostIntroduction>
        <Text numberOfLines={2}>
          안녕하세요! 프로 서퍼 컨설턴트 {hostName}입니다:)
        </Text>
      </HostIntroduction>
      <HostProfilePressable>
        <Text style={styles.button}>호스트 프로필</Text>
      </HostProfilePressable>
    </WholeContainer>
  );
}

export default HostInfo;

const styles = StyleSheet.create({
  img: { borderRadius: 50, width: 60, height: 60, marginRight: 14 },
  hostName: { fontSize: 20, fontWeight: "bold" },
  button: { color: "#cccccc", textAlign: "center", paddingTop: 13 },
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

const HostProfileView = styled.View`
  flex-direction: row;
  padding-top: 20px;
`;

const HostIntroduction = styled.View`
  padding-top: 20px;
`;

const HostProfilePressable = styled.Pressable`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #cccccc;
`;
