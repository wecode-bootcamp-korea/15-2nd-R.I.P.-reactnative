import React from "react";
import styled from "styled-components/native";
import TopTab from "../../navigations/TopTab";
import SearchBar from "./components/SearchBar";
import Silder from "./components/Silder";

export default ({ navigation }) => (
  <>
    <SearchBar />
    <TopTab navigation={navigation} />
  </>
);
