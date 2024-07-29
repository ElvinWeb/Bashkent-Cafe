import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { PartersData } from "../../Data/PartnersData";

export const Partners = () => {
  return (
    <section className="partner">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            575: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
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
          {PartersData.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="partner-img">
                <img src={partner.img} alt="partner" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Partners;
