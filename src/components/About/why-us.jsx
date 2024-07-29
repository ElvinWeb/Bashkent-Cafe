import React from "react";
import SectionTitle from "../Title/SectionTitle";
import { ServiceWhy } from "../../Data/ServicesData";

const WhyUs = () => {
  return (
    <div className="why-us">
      <SectionTitle>Niyə Biz?</SectionTitle>
      <div className="row ">
        {ServiceWhy.map((item) => (
          <div className="col-12 col-md-6 col-xl-4" key={item.id}>
            <div className="item">
              <img src={item.img} alt={item.title} />
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyUs;
