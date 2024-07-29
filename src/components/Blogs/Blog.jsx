import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BlogsData } from "../../Data/BlogsData";
import { Link } from "react-router-dom";
import SectionTitle from "../Title/SectionTitle";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <SectionTitle>Bloglar</SectionTitle>
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
          {BlogsData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blog.image} alt="" />
                </div>
                <div className="blog-content">
                  <h5 className="title">{blog.title}</h5>
                  <div className="text">
                    <p>{blog.text}</p>
                  </div>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="btn-general active"
                  >
                    Ətraflı
                    <i className="fa-solid fa-arrow-right right"></i>
                  </Link>
                  <div className="date">
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
