import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import MoreSearchHeader from "../Home/components/MoreSearchHeader";
import CategoryMenu from "./components/CategoryMenu";
import CategoryMenus from "./components/CategoryMenus";
import styled from "styled-components/native";

const Category = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    const categoryValues = require("../../data/category.json");
    setCategory(categoryValues.result);
  }, []);

  return (
    <CategoryScrollView>
      <MoreSearchHeader icon="search" isunAblebtn={true} />
      <CategoryView>
        {Category.map((list) => {
          return (
            <CategoryMenus
              key={list.id}
              activeName={list.activityName}
              CategoryActivityName={list.activity}
            />
          );
        })}
      </CategoryView>
      <CategoryMenus />
    </CategoryScrollView>
  );
};
export default Category;

const CategoryView = styled.View``;
const CategoryScrollView = styled.ScrollView`
  background-color: #fff;
`;
