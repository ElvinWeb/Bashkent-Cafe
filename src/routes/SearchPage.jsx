import React from "react";
import RootLayout from "../Layouts/RootLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import SearchContainer from "../components/Search/SearchResult";

export const SeacrhPage = () => {
  const searchProducts = useSelector(
    (state) => state.searchState.searchProducts
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (searchProducts.length === 0) {
      navigate("/404");
    }
  }, [navigate, searchProducts.length]);
  return (
    <RootLayout>
      <SearchContainer searchProducts={searchProducts} />
    </RootLayout>
  );
};
