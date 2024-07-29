import React from "react";
import { useState } from "react";
import HeaderBg from "../Header/HeaderBg";
import NavBar from "./TopNav";
import Navigation from "./BottomNav";
import HeaderContent from "../Header/HeaderContent";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const stickyNav = () => {
    if (window.scrollY > 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", stickyNav);

  const toggleSideBar = () => {
    setSideBar((state) => !state);
  };
  const toggleSearchBar = () => {
    setSearchBar((state) => !state);
  };

  return (
    <header className="header">
      <HeaderBg />
      <NavBar
        onScroll={scroll}
        onToggle={toggleSideBar}
        onToggleSearchBar={toggleSearchBar}
        open={searchBar}
      />
      <Navigation onScroll={scroll} open={sidebar} onToggle={toggleSideBar} />
      <HeaderContent />
    </header>
  );
};
export default Header;
