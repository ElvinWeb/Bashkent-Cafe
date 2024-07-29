import React from "react";
import { Link } from "react-router-dom";

const BranchSectionCard = ({ branch }) => {
  return (
    <Link to={`/branch/${branch.slug}`} className="filial-card">
      <div className="filial-img">
        <img src={branch.img} alt="" />
      </div>
      <div className="filial-title">
        <span className="title">{branch.title}</span>
      </div>
    </Link>
  );
};
export default BranchSectionCard;
