import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT, WIDTH } from "../../../constants/layout";
import RIPList from "./RIPList";

const mostFavoriteRIP = require("../../../data/mostFavoriteRIP.json");

const RIP = ({ navigation, surfingData, title, isHomeCall }) => {
  const handleMoreBtn = () => {
    navigation.navigate("MoreSuffing", { surfingData: surfingData });
  };

  return (
    <Title>
      <TitleView>
        <TitleText>{title}</TitleText>
        <MoreBtn onPress={handleMoreBtn} navigation={navigation}>
          {isHomeCall && <MoreTitle>더보기</MoreTitle>}
        </MoreBtn>
      </TitleView>
      <CenteredView>
        <DirectionChange>
          {isHomeCall ? (
            <CenteredText>
              {surfingData &&
                surfingData
                  .map((list) => (
                    <RIPList
                      key={list.id}
                      address={list.image_url}
                      location={list.activity_address.slice(0, 2)}
                      description={list.subtitle}
                      detailTitle={list.title}
                      price={list.price}
                      rate={list.star_rating}
                      navigation={navigation}
                    />
                  ))
                  .slice(0, 4)}
            </CenteredText>
          ) : (
            <CenteredText>
              {surfingData &&
                surfingData.map((list) => (
                  <RIPList
                    key={list.id}
                    address={list.image_url}
                    location={list.activity_address.slice(0, 2)}
                    description={list.subtitle}
                    detailTitle={list.title}
                    price={list.price}
                    rate={list.star_rating}
                    navigation={navigation}
                  />
                ))}
            </CenteredText>
          )}
        </DirectionChange>
      </CenteredView>
    </Title>
  );
};

export default RIP;

const Title = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 10px;
`;

const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const MoreTitle = styled.Text``;

const MoreBtn = styled.Pressable``;

const CenteredView = styled.View`
  align-items: center;
  justify-content: center;
`;

const DirectionChange = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const CenteredText = styled.Text``;
