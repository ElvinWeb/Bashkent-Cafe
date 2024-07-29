import React from "react";
import title_design from "../../bashkent-image/design/rotate.png";
const SectionTitle = ({ children }) => {
  return (
    <div className="section-title">
      <>
        <h1 className="title">{children}</h1>
        <img src={title_design} alt="design" />
      </>
    </div>
  );
};
export default SectionTitle;
