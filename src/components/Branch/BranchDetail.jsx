import React from "react";
import { useParams } from "react-router";
import RootLayout from "../../Layouts/RootLayout";
import { BranchData } from "../../Data/BranchData";
import PhotosGallery from "../Gallery/PhotosGallery";

const BranchDetail = () => {
  const { branchSlug } = useParams();

  return (
    <>
      <RootLayout>
        <section className="filial-details">
          <div className="container">
            <div className="row">
              {BranchData.map((branch) =>
                branch.slug === branchSlug ? (
                  <React.Fragment key={branch.id}>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div className="filial-img">
                        <img src={branch.img} alt="img" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                      <div className="content">
                        <h1 className="title">{branch.title}</h1>
                        <div className="text">
                          <p>{branch.text}</p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="container">
            <PhotosGallery />
          </div>
        </section>
      </RootLayout>
    </>
  );
};

export default BranchDetail;
