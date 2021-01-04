import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, RefreshControl } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";
import SingleFeed from "./SingleFeed";

const jsonFile = require("../../data/data.json");

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default ({ navigation }) => {
  const [feedInfos, setFeedInfos] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setFeedInfos(jsonFile.data);
  }, []);

  return (
    <View>
      <FeedHeader>
        <StyledText>프립피드</StyledText>
      </FeedHeader>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {feedInfos.map((el) => {
          return (
            <SingleFeed
              id={el.id}
              key={el.id}
              feedInfos={el}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const FeedHeader = styled.View`
  height: 100px;
  border: 1px solid #eaecee;
`;

const StyledText = styled.Text`
  padding-top: 56px;
  padding-left: 18px;
  font-size: 24px;
  font-weight: 700;
  color: #333d4b;
`;
