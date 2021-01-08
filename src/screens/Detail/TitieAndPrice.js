import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

function TitleAndPrice({
  isDeliveryAvailable,
  category,
  productName,
  price,
  discountRate,
  expirationDate,
}) {
  return (
    <WholeContainer>
      <SubTitle>
        {isDeliveryAvailable && "배송상품"}
        {category}
      </SubTitle>
      <MainTitle>{productName}</MainTitle>
      <Text style={styles.originalPrice}>
        {Math.floor(price).toLocaleString()}원
      </Text>
      <PriceContainer>
        <Text style={styles.actualPrice}>
          {Math.floor(price - price * discountRate).toLocaleString("en")}원
        </Text>
        <Text style={styles.discountRate}>
          {Math.floor(discountRate * 100)}%
        </Text>
      </PriceContainer>
      <Text style={styles.duration}>
        유효기간:구매일로부터{expirationDate}일까지
      </Text>
    </WholeContainer>
  );
}

export default TitleAndPrice;

const styles = StyleSheet.create({
  originalPrice: {
    marginTop: 10,
    fontSize: 16,
    color: "rgb(153, 153, 153)",
    textDecorationLine: "line-through",
  },
  actualPrice: { marginRight: 6, fontSize: 18, fontWeight: "bold" },
  discountRate: {
    marginRight: 6,
    fontSize: 28,
    color: "#FF3F33",
  },
  duration: {
    fontSize: 12,
    color: "rgb(153, 153, 153)",
    paddingTop: 20,
    paddingBottom: 20,
  },
});

const SubTitle = styled.Text`
  font-size: 12px;
  color: #cccccc;
`;

const MainTitle = styled.Text`
  margin-top: 20px;
  font-size: 20px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12;
`;

const WholeContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;
