import React from "react";
import { FoodCategoryData } from "../../Data/FoodCategory";
import FoodCategoryCard from "./FoodCategoryCard";

const FoodCategory = () => {
  return (
    <section className="food-category">
      <div className="container-fluid">
        <div className="row category-row">
          {FoodCategoryData.map((category) => (
            <FoodCategoryCard category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FoodCategory;
