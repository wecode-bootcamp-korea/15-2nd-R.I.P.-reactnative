import React from "react";
import styled from "styled-components/native";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import MoreSearchHeader from "../../components/MoreSearchHeader";
import RIP from "../../components/RIP";
import { useState } from "react";

const MoreSuffing = ({ route, navigation }) => {
  const { surfingData } = route.params;

  return (
    <MoreSuffingScrollView>
      <MoreSearchHeader
        navigation={navigation}
        icon="arrow-back-outline"
        isunAblebtn={false}
      />
      <RIP
        isHomeCall={false}
        title="최신 RIP"
        navigation={navigation}
        surfingData={surfingData}
      />
    </MoreSuffingScrollView>
  );
};

export default MoreSuffing;

const MoreSuffingScrollView = styled.ScrollView`
  background-color: #fff;
`;
