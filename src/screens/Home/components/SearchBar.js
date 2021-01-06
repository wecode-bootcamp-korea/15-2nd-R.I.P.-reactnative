import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TextInput, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => (
  <Form>
    <Input placeholder="검색어를 입력해 주세요" />
    <SearchIcon>
      <Ionicons name="search-outline" size={20} color="black" />
    </SearchIcon>
  </Form>
);

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

const SearchIcon = styled.View`
  position: absolute;
  top: 40px;
  left: 25px;
`;
