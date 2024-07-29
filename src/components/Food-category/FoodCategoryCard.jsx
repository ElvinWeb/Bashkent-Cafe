import React from "react";
import { Link } from "react-router-dom";

const FoodCategoryCard = ({ category }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4" key={category.id}>
      <Link to={`/food/${category.id}`} className="category-card">
        <div className="category-card-img">
          <img src={category.img} alt={category.title} />
        </div>
        <div className="hover">
          <div className="hover-name">
            <span>{category.title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default FoodCategoryCard;
