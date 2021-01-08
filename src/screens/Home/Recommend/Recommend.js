import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import RecommendButton from "./RecommendButton";
import Silder from "../components/Silder";
import RIP from "../components/RIP";
import SearchBar from "../components/SearchBar";
import { GET_MAIN_DATA, GET_RECOMMEND_DATA } from "../../../config";

const recommendList = require("../../../data/recommendList.json");

const Recommend = ({ navigation }) => {
  const [recommendData, setRecommendData] = useState("");
  const [topStarRate, setTopStarRate] = useState("");

  useEffect(() => {
    fetch(GET_RECOMMEND_DATA("hit_count"))
      .then((res) => res.json())
      .then((res) => {
        setRecommendData(res.product_list);
      });
    fetch(GET_RECOMMEND_DATA("star_rating"))
      .then((res) => res.json())
      .then((res) => {
        setTopStarRate(res.product_list);
      });
  }, []);

  return (
    <BackgroundSetting>
      <Silder ModifiedHeight={250} />
      <FlexBox>
        {recommendList.recommendList.map((list, idx) => {
          return (
            <RecommendButton
              key={idx + 1}
              address={list.uri}
              categoryName={list.categoryName}
              navigation={navigation}
            />
          );
        })}
      </FlexBox>
      <RIP
        isHomeCall={true}
        title="가장 인기많은 RIP"
        navigation={navigation}
        mainData={recommendData}
      />
      <Silder ModifiedHeight={100} />

      <RIP
        isHomeCall={true}
        title="별점이 높은 RIP"
        navigation={navigation}
        mainData={topStarRate}
      />
      <Silder ModifiedHeight={400} ModifiedPadding={20} />
    </BackgroundSetting>
  );
};

export default Recommend;

const BackgroundSetting = styled.ScrollView`
  background-color: white;
`;

const FlexBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 230px;
  justify-content: center;
  padding: 20px;
`;
