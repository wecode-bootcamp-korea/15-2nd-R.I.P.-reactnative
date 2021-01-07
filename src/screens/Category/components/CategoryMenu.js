import React from "react";
import styled from "styled-components/native";
import { WIDTH, HEIGHT } from "../../../constants/layout";

const CategoryMenu = ({ activeName }) => {
  return (
    <MenuOutline>
      <MenuName>{activeName}</MenuName>
    </MenuOutline>
  );
};

export default CategoryMenu;

const MenuOutline = styled.View`
  height: ${HEIGHT / 12};
  width: ${WIDTH / 2.6};
  justify-content: center;
  background-color: #f7f8f2;
  margin: 10px;
  padding: 20px;
  border-radius: 5;
`;
const MenuName = styled.Text`
  font-weight: 600;
`;
