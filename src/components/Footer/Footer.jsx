import React from "react";
import logo from "../../bashkent-image/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="foot">
      <div className="container">
        <div className="row footer-row">
          <div className="col-12 col-xxl-3 logo-col">
            <div className="container-inner">
              <Link href="/#" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <div className="social-icons">
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="footer-links">
              <h2 className="title">Menyular</h2>
              <a href="/#" className="link">
                Əsas Səhifə
              </a>
              <a href="/#" className="link">
                Haqqımzda
              </a>
              <a href="/#" className="link">
                Filiallar
              </a>
              <a href="/#" className="link">
                Yeməklər
              </a>
              <a href="/#" className="link">
                Qalerya
              </a>
              <a href="/#" className="link">
                Menu
              </a>
              <a href="/#" className="link">
                Rəylər
              </a>
              <a href="/#" className="link">
                Əlaqə
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="footer-links">
              <h2 className="title">Faydalı linklər</h2>
              <a href="/#" className="link">
                Tez-tez soruşulanlar
              </a>
              <a href="/#" className="link">
                Vakansiya
              </a>
              <a href="/#" className="link">
                Xidmət şəbəkəsi
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="footer-links">
              <h2 className="title">Ünvan</h2>
              <a href="/#" className="link">
                <i className="fa-solid fa-location-dot"></i> Azərbaycan, Bakı
                ş., Əhməd Rəcəbli
              </a>
              <a href="/#" className="link">
                <i className="fa-solid fa-phone"></i> 0554501102
              </a>
              <a href="/#" className="link">
                <i className="fa-solid fa-envelope"></i>
                &nbsp;bashkentrestoran@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="text">© 2023 | Bütün hüquqlar qorunur.</div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
