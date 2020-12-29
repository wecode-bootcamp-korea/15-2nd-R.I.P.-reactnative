import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import SingleFeed from "./SingleFeed";

const jsonFile = require("../../data/data.json");

export default ({ navigation }) => {
  const [feedInfos, setFeedInfos] = useState([]);

  useEffect(() => {
    setFeedInfos(jsonFile.data);
  }, []);

  return (
    <SafeAreaView>
      <FeedHeader>
        <StyledText>프립피드</StyledText>
      </FeedHeader>
      <ScrollView>
        {feedInfos.map((el) => {
          return (
            <SingleFeed key={el.id} feedInfos={el} navigation={navigation} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const FeedHeader = styled.View`
  height: 100px;
  border: 1px solid #eaecee;
`;

const StyledScrollView = styled.ScrollView``;

const StyledText = styled.Text`
  padding-top: 56px;
  padding-left: 18px;
  font-size: 24px;
  font-weight: 700;
  color: #333d4b;
`;
