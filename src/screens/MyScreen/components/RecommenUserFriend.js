import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { WIDTH, HEIGHT } from "../../../constants/layout";

const RecommenUserFriend = (props) => {
  return (
    <RecommendOutline>
      <RecommendView>
        <RecommendTextView>
          <RecommendText>🙋🏻‍♀️ 친구 초대하고 5천원 쿠폰 받아가세요!</RecommendText>
        </RecommendTextView>
        <RecommendIconView>
          <RecommendText>
            <Ionicons name="chevron-forward" size={12} color="white" />
          </RecommendText>
        </RecommendIconView>
      </RecommendView>
    </RecommendOutline>
  );
};

export default RecommenUserFriend;

const RecommendOutline = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;
const RecommendView = styled.View`
  height: 35px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  background-color: #f4faff;
  width: ${WIDTH / 1.1};
  border-radius: 5px;
  border: 1px solid #dceefe;
`;
const RecommendTextView = styled.View``;
const RecommendText = styled.Text``;
const RecommendIconView = styled.View``;
