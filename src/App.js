import React from "react";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import { Routes, Route } from "react-router";
import BranchPage from "./routes/BranchPage";
import FoodsPage from "./routes/FoodsPage";
import GalleryPage from "./routes/GalleryPage";
import MenuPage from "./routes/MenuPage";
import CommentPage from "./routes/CommentPage";
import ContactPage from "./routes/ContactPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import BranchDetail from "./components/Branch/BranchDetail";
import BlogsPage from "./components/Blogs/BlogsPage";
import BlogDetails from "./components/Blogs/BlogDetails";
import { SeacrhPage } from "./routes/SearchPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/branch" element={<BranchPage />} />
        <Route path="/branch/:branchSlug" element={<BranchDetail />} />
        <Route path="/food" element={<FoodsPage />} />
        <Route path="/food/:categoryID" element={<FoodsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:photoID" element={<GalleryPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:menuID" element={<MenuPage />} />
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:blogsSlug" element={<BlogDetails />} />
        <Route path="/search" element={<SeacrhPage />} />
        <Route path="/search/:searchSlug" element={<SeacrhPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
