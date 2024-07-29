import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FoodsData, FoodCategories } from "../../Data/FoodsData";
import { useEffect } from "react";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const { categoryID } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (categoryID) {
      navigate("/food");
      setActiveCategory(parseInt(categoryID));
    }
    let filteredFoods = FoodsData.filter(
      (food) => food.categoryID === activeCategory
    );
    setFoods(filteredFoods);
  }, [activeCategory, categoryID, navigate]);

  return (
    <section className="food">
      <div className="container">
        <div className="food-category-buttons">
          <div className="buttons">
            {FoodCategories.map((button) => (
              <button
                className={`food-filter ${
                  activeCategory === button.id ? "active" : ""
                }`}
                key={button.id}
                onClick={() => setActiveCategory(button.id)}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
        <div className="row meal-container">
          {foods.map((meal) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={meal.id}>
              <div className="food-card">
                <div className="food-img">
                  <img src={meal.img} alt="" />
                </div>
                <div className="content">
                  <h5 className="title">{meal.title}</h5>
                  <div className="text">
                    <p>{meal.content}</p>
                  </div>
                  <div className="price">
                    <span>{`${meal.price}${meal.currency}`}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Foods;
