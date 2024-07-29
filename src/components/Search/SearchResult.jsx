import React from "react";

const SearchContainer = ({ searchProducts }) => {
  return (
    <section className="search-result">
      <div className="container">
        <div className="row meal-container">
          {searchProducts.map((meal) => (
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
export default SearchContainer;
