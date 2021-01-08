import React from "react";
import styled from "styled-components/native";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import MoreSearchHeader from "../../components/MoreSearchHeader";
import RIP from "../../components/RIP";
import { useState } from "react";

const More = ({ route, navigation }) => {
  const { mainData } = route.params;

  return (
    <ScrollView>
      <MoreSearchHeader navigation={navigation} />
      <RIP
        isHomeCall={false}
        title="최신 RIP"
        navigation={navigation}
        mainData={mainData}
      />
    </ScrollView>
  );
};

export default More;
