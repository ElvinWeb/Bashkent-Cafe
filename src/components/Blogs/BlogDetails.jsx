import React from "react";
import { useParams } from "react-router";
import RootLayout from "../../Layouts/RootLayout";
import img from "../../bashkent-image/design/rotate.png";
import blogImg from "../../bashkent-image/blog/img-2.jpg";
import { BlogsData } from "../../Data/BlogsData";

const BlogDetails = () => {
  const { blogsSlug } = useParams();
  console.log(blogsSlug);
  return (
    <RootLayout>
      <section className="blog-details">
        <div className="container">
          {BlogsData.map((blog) =>
            blog.slug === blogsSlug ? (
              <div key={blog.id}>
                <div className="section-title">
                  <h1>{blog.title}</h1>
                  <img src={img} alt="" />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="blog-detail-img">
                      <img src={blog.image} alt="detail_img" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="blog-details-content">
                      <div className="text">
                        <p>{blog.about}</p>
                      </div>
                      <div className="date">
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </section>
    </RootLayout>
  );
};
export default BlogDetails;
