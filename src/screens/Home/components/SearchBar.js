import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, TextInput, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Search_API } from "../../../config";
import RIP from "../components/RIP";
import { ScrollView } from "react-native-gesture-handler";
const SearchBar = ({ navigation }) => {
  const [serachInput, setSerachInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isGetSearchResult, setIsGetSearchResult] = useState(false);
  const searchTitle = () => {
    fetch(Search_API(serachInput))
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.product_list);
        setIsGetSearchResult(true);
      });
  };
  const pressSearchBtn = () => {
    setIsGetSearchResult(false);
    setSerachInput("");
  };

  return (
    <>
      <Form>
        <Input
          placeholder="검색어를 입력해 주세요"
          value={serachInput}
          onChangeText={(serachInput) => setSerachInput(serachInput)}
        />
        <SearchIcon onPress={searchTitle}>
          <Ionicons name="search-outline" size={20} color="black" />
        </SearchIcon>
        <BackIcon onPress={pressSearchBtn}>
          <Ionicons name="arrow-back" size={20} color="black" />
        </BackIcon>
      </Form>
      {isGetSearchResult && (
        <ScrollView>
          <RIP
            isHomeCall={false}
            title={serachInput}
            navigation={navigation}
            mainData={searchResult}
          />
        </ScrollView>
      )}
    </>
  );
};
export default SearchBar;
const Form = styled.View`
  position: relative;
  background-color: white;
`;
const Input = styled.TextInput`
  margin: 30px 10px 20px 10px;
  height: 40px;
  background-color: #f4f4f4;
  border-radius: 20;
  padding-left: 40;
`;
const SearchIcon = styled.Pressable`
  position: absolute;
  top: 40px;
  left: 25px;
`;
const BackIcon = styled.Pressable`
  position: absolute;
  top: 40px;
  right: 25px;
`;
