import React from "react";
import { GalleryPhotoData } from "../../Data/GalleryPhotoData";

const PhotosGallery = () => {
  return (
    <>
      <div className="gallery-container row active-gallery">
        {GalleryPhotoData.map((photo) => (
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3" key={photo.id}>
            <div className="gallery-card">
              <img src={photo.image} alt="gallery-img" />
              <a href={photo.image} data-fancybox="gallery">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PhotosGallery;
