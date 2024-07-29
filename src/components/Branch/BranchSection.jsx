import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BranchData } from "../../Data/BranchData";
import { Link } from "react-router-dom";
import SectionTitle from "../Title/SectionTitle";
import BranchSectionCard from "./BranchSectionCard";

const BranchSection = () => {
  return (
    <section className="filial">
      <div className="container">
        <SectionTitle>Filiallar</SectionTitle>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
        >
          {BranchData.map((branch) => (
            <SwiperSlide key={branch.id}>
              <BranchSectionCard branch={branch} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default BranchSection;
