import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import RIP from "../components/RIP";
import { GET_MAIN_DATA } from "../../../config";

const Trip = ({ navigation }) => {
  const [tripData, setTripData] = useState("");
  useEffect(() => {
    fetch(GET_MAIN_DATA("-price", 13))
      .then((res) => res.json())
      .then((res) => {
        setTripData(res.product_list);
      });
  }, []);
  return (
    <RIP
      navigation={navigation}
      isHomeCall={false}
      title="강릉여행"
      navigation={navigation}
      mainData={tripData}
    />
  );
};

export default Trip;
