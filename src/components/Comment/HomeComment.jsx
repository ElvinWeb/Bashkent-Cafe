import React from "react";
import title_design from "../../bashkent-image/design/rotate.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { CommentsData } from "../../Data/CommentsData";
import CommentCard from "./CommentCard";
import SectionTitle from "../Title/SectionTitle";

const HomeComment = () => {
  return (
    <section className="comment home">
      <div className="container">
        <SectionTitle>Müştəri Rəyləri</SectionTitle>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
        >
          {CommentsData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <CommentCard slide={slide} MaxRating={5} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default HomeComment;
