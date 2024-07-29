import React from "react";
import AboutSection from "../components/About/AboutSection";
import RootLayout from "../Layouts/RootLayout";
import PhotosGallery from "../components/Gallery/PhotosGallery";

const AboutPage = () => {
  return (
    <>
      <RootLayout>
        <AboutSection />
        <section className="gallery">
          <div className="container">
            <PhotosGallery />
          </div>
        </section>
      </RootLayout>
    </>
  );
};
export default AboutPage;
