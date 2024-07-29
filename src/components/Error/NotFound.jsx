import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="not-found">
          <span className="text">404</span>
          <Link to="/" className="go-back">
            Əsas Səhifə
          </Link>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
