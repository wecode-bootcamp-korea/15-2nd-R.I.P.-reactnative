import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { WIDTH, HEIGHT } from "../../../constants/layout";

const MoreSearchHeader = ({ navigation, icon, isunAblebtn }) => {
  const handleBackbtn = () => {
    navigation.navigate("Home");
  };

  return (
    <HeaderOutline>
      <BackbtnView>
        <Backbtn onPress={handleBackbtn} disabled={isunAblebtn}>
          <Ionicons name={icon} size={24} color="black" />
        </Backbtn>
      </BackbtnView>
      <SearchView>
        <SearchInput placeholder="프립 검색하기" />
      </SearchView>
    </HeaderOutline>
  );
};

export default MoreSearchHeader;
const HeaderOutline = styled.View`
  align-items: center;

  position: relative;
  margin-top: 40px;
  flex-direction: row;
  background-color: white;
  height: ${HEIGHT / 12};
  border-bottom-width: 2px;
  border-bottom-color: #efefef;
`;
const BackbtnView = styled.View`
  width: ${WIDTH / 8};
`;

const Backbtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SearchView = styled.View`
  width: ${WIDTH / 1.2};
  height: ${HEIGHT / 15};
`;
const SearchInput = styled.TextInput`
  width: 100%;
  height: 100%;
`;
