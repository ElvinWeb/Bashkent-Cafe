import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { MenuCategory } from "../../Data/MenuData";
import { MenuData } from "../../Data/MenuData";

Fancybox.bind("[data-fancybox]", {});

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const { menuID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (menuID) {
      navigate("/menu");
      setActiveCategory(parseInt(menuID));
    }
  }, [menuID, navigate]);

  useEffect(() => {
    let filterMenu = MenuData.filter((menu) => menu.menuId === activeCategory);
    setMenu(filterMenu);
  }, [activeCategory, menuID, navigate]);
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-filter-buttons">
          {MenuCategory.map((button) => (
            <button
              className={`filter-btn ${
                button.id === activeCategory ? "active" : ""
              }`}
              key={button.id}
              onClick={() => setActiveCategory(button.id)}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className={`menu-container row`}>
          {menu.map((photo) => (
            <div
              className={`col-12 col-md-6 ${
                1 === activeCategory ? "col-lg-4 col-xl-3" : ""
              }`}
              key={photo.id}
            >
              <div className="gallery-card menu-card">
                <img src={photo.img} alt="gallery-img" className="menu-img" />
                <a href={photo.img} data-fancybox="gallery">
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
export default Menu;
