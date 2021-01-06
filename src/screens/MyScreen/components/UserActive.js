import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { WIDTH, HEIGHT } from "../../../constants/layout";

const UserActive = () => (
  <UserActiveOutline>
    <TotalView>
      <VerticalView>
        <CardViewForBorder>
          <CardText>
            에너지 <Ionicons name="chevron-forward" size={12} color="white" />
          </CardText>
          <CardPoint>2,000</CardPoint>
        </CardViewForBorder>
        <CardView>
          <CardText>
            쿠폰
            <Ionicons name="chevron-forward" size={12} color="white" />
          </CardText>
          <CardPoint>3</CardPoint>
        </CardView>
      </VerticalView>
      <VerticalSecondView>
        <CardViewForBorder>
          <CardText>
            후기
            <Ionicons name="chevron-forward" size={12} color="white" />
          </CardText>
          <CardPoint>0</CardPoint>
        </CardViewForBorder>
        <CardView>
          <CardText>
            피드
            <Ionicons name="chevron-forward" size={12} color="white" />
          </CardText>
          <CardPoint>0</CardPoint>
        </CardView>
      </VerticalSecondView>
    </TotalView>
  </UserActiveOutline>
);

export default UserActive;
const UserActiveOutline = styled.View`
  align-items: center;
  justify-content: center;
  height: ${HEIGHT / 4.5};
  padding: 5px 15px;
`;
const TotalView = styled.View`
  background-color: #108be5;
  border-radius: 10;
`;
const VerticalView = styled.View`
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #0d7dd0;
`;

const VerticalSecondView = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const CardView = styled.View`
  width: ${WIDTH / 2.2};
  height: ${HEIGHT / 11.5};
  padding: 10px 10px;
`;

const CardViewForBorder = styled.View`
  width: ${WIDTH / 2.2};
  height: ${HEIGHT / 11.5};
  padding: 10px 10px;
  border-right-width: 1px;
  border-right-color: #0d7dd0;
`;
const CardText = styled.Text`
  color: white;
  font-size: 12px;
  margin-bottom: 8px;
`;
const CardPoint = styled.Text`
  color: white;
  font-size: 16px;
`;
