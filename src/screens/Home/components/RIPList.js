import React from "react";
import styled from "styled-components/native";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT, WIDTH } from "../../../constants/Layout";

const RIPList = ({
  address,
  location,
  description,
  detailTitle,
  price,
  rate,
  navigation,
}) => {
  return (
    <OutlineView onPress={() => navigation.navigate("Detail")}>
      <ImgView>
        <DetailImg
          source={{
            uri: `${address}`,
          }}
        />
        <Location>{location}</Location>
        <Bookmark>
          <Ionicons name="bookmark-outline" size={24} color="white" />
        </Bookmark>
      </ImgView>
      <DetailView>
        <Description>{description}</Description>
        <DetailTitle>{detailTitle}</DetailTitle>
        <Price>{Math.floor(price).toLocaleString()}</Price>
        <Rate>🌟 {rate}/5</Rate>
      </DetailView>
    </OutlineView>
  );
};

export default RIPList;

const OutlineView = styled.Pressable`
  width: ${WIDTH / 2};

  align-items: center;
`;

const ImgView = styled.View`
  width: 160px;
  height: 160px;
  margin: 30px;
`;

const DetailImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: relative;
`;

const Location = styled.Text`
  position: absolute;
  color: white;
  left: 10px;
  top: 10px;
`;

const Bookmark = styled.View`
  position: absolute;
  right: 10px;
  top: 5px;
`;

const DetailView = styled.View`
  margin: 0 10px;
  height: 110px;
`;

const Description = styled.Text`
  margin-top: 10px;
  font-size: 10px;
  color: #9b9b9b;
`;

const DetailTitle = styled.Text`
  margin-top: 10px;
  font-weight: 700;
  width: 150px;
`;
const Price = styled.Text`
  margin-top: 10px;
  font-weight: 800;
`;
const Rate = styled.Text`
  margin-top: 8px;
  color: #9b9b9b;
`;
