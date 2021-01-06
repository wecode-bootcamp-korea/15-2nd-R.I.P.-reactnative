import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import RecommendButton from "./RecommendButton";
import Silder from "../components/Silder";
import RIP from "../components/RIP";
import SearchBar from "../components/SearchBar";
import { GET_MAIN_DATA } from "../../../config";

const recommendList = require("../../../data/recommendList.json");

const Recommend = ({ navigation }) => {
  const [surfingData, setSurfingData] = useState("");

  useEffect(() => {
    getSufingData();
  }, []);

  const getSufingData = () => {
    fetch(GET_MAIN_DATA("-price", 8, 0, 10))
      .then((res) => res.json())
      .then((res) => {
        setSurfingData(res.product_list);
      });
  };

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
        title="최신 RIP"
        navigation={navigation}
        surfingData={surfingData}
      />
      <Silder ModifiedHeight={100} />

      <RIP title="로그인" navigation={navigation} />
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
