import React from "react";
import AboutSection from "../components/About/AboutSection";
import BranchSection from "../components/Branch/BranchSection";
import FoodCategory from "../components/Food-category/FoodCategory";
import Partners from "../components/Partners/Partners";
import Gallery from "../components/Gallery/Gallery";
import { Blog } from "../components/Blogs/Blog";
import Contact from "../components/Contact/ContactHome";
import HomeComment from "../components/Comment/HomeComment";
import RootLayout from "../Layouts/RootLayout";

const HomePage = () => {
  return (
    <>
      <RootLayout>
        <AboutSection />
        <BranchSection />
        <FoodCategory />
        <Partners />
        <Blog />
        <Gallery />
        <HomeComment />
        <Contact />
      </RootLayout>
    </>
  );
};
export default HomePage;
