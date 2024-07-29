import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default RootLayout;
