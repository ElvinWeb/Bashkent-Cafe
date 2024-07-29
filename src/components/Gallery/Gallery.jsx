import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { GalleryPhotoData } from "../../Data/GalleryPhotoData";
import { GalleryCategories } from "../../Data/GalleryPhotoData";
import { useParams, useNavigate } from "react-router";

Fancybox.bind("[data-fancybox]", {});

const Gallery = () => {
  const [photoGallery, setPhotoGallery] = useState([]);
  const [activeGallery, setActiveGallery] = useState(1);
  const { photoID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (photoID) {
      navigate("/gallery");
      setActiveGallery(parseInt(photoID));
    }
  }, [navigate, photoID]);

  useEffect(() => {
    const filterGalleryPhotos = GalleryPhotoData.filter(
      (photo) => photo.photoID === activeGallery
    );
    setPhotoGallery(filterGalleryPhotos);
  }, [activeGallery]);

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-filter-buttons">
          {GalleryCategories.map((button) => (
            <button
              className={`filter-btn ${
                button.id === activeGallery ? "active" : ""
              }`}
              key={button.id}
              onClick={() => setActiveGallery(button.id)}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className={`gallery-container row `}>
          {photoGallery.map((photo) => (
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
      </div>
    </section>
  );
};
export default Gallery;
