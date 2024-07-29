import React from "react";
import { BannerSlideData } from "../../Data/BannerSlideData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HeaderBg = () => {
  return (
    <div className="banner-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        {BannerSlideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="banner-slider-img"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HeaderBg;
