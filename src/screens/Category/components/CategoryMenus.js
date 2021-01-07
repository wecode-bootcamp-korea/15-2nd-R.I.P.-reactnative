import React from "react";
import styled from "styled-components/native";

import { HEIGHT, WIDTH } from "../../../constants/layout";
import Category from "../Category";
import CategoryMenu from "./CategoryMenu";

const CategoryMenus = ({ activeName, CategoryActivityName }) => {
  return (
    <CategoryView>
      <CategoryOutLine>
        <CategoryName>{activeName}</CategoryName>
      </CategoryOutLine>
      <CategoryMenuView>
        {CategoryActivityName?.map((list) => {
          return <CategoryMenu activeName={list.activeName} />;
        })}
      </CategoryMenuView>
    </CategoryView>
  );
};

export default CategoryMenus;

const CategoryView = styled.View``;

const CategoryOutLine = styled.View`
  height: ${HEIGHT / 10};
`;

const CategoryMenuView = styled.View`
  padding-left: 10px;
  width: ${WIDTH / 1.1};
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const CategoryName = styled.Text`
  margin: 35px 0 0 20px;
  font-size: 20px;
  font-weight: 600;
`;
