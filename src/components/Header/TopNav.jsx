import { React, useState } from "react";
import logo_img from "../../bashkent-image/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { PageTitleData } from "../../Data/PageTitleData";
import { FoodCategories, FoodsData } from "../../Data/FoodsData";
import { GalleryCategories } from "../../Data/GalleryPhotoData";
import { MenuCategory } from "../../Data/MenuData";
import { useDispatch } from "react-redux";
import { sendSearchProducts } from "../../redux/action/SearchAction";

const NavBar = ({ onScroll, onToggle, open, onToggleSearchBar }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    let searchPage = PageTitleData.find((page) =>
      page.link
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    let searchFoodCategory = FoodCategories.find((category) =>
      category.name
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    let searchProducts = FoodsData.filter((product) =>
      product.title
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    let searchPhotoGallery = GalleryCategories.find((category) =>
      category.name
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    let searchMenuGallery = MenuCategory.find((category) =>
      category.name
        .trim()
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase())
    );
    if (searchPage) {
      navigate(searchPage.href);
    } else if (searchFoodCategory) {
      let id = searchFoodCategory.id;
      navigate(`/food/${id}`);
    } else if (searchProducts && searchProducts.length > 0) {
      navigate("/search");
      dispatch(sendSearchProducts(searchProducts));
    } else if (searchPhotoGallery) {
      let id = searchPhotoGallery.id;
      navigate(`/gallery/${id}`);
    } else if (searchMenuGallery) {
      let id = searchMenuGallery.id;
      navigate(`/menu/${id}`);
    } else {
      navigate("/404");
    }
  };
  return (
    <nav className={`nav-bar ${onScroll ? "fixed-top" : ""}`}>
      <div className="container">
        <div className="container-inner">
          <a className="btn-reserv border d-none d-xl-flex" href="/#">
            Rezervasiya
          </a>
          <button className="menu-button d-xl-none" onClick={onToggle}>
            <i className="fa-solid fa-bars "></i>
          </button>
          <Link to="/" className="logo">
            <img src={logo_img} alt="logo" />
          </Link>
          <div className="right">
            <button
              className="search-button d-xl-none"
              onClick={onToggleSearchBar}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="social-icons d-none d-xl-flex">
              <a href="/#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className={`search-bar ${open ? "search-active" : ""} `}>
              <button
                className="close-btn d-xl-none"
                onClick={onToggleSearchBar}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <form onSubmit={handleSearchFormSubmit}>
                <input
                  type="text"
                  placeholder="Axtar"
                  className="search-field"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="search-glass">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
