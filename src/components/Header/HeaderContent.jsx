import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { PageTitleData } from "../../Data/PageTitleData";
import { BranchData } from "../../Data/BranchData";
import whiteDesign from "../../bashkent-image/design/white.png";
import { BlogsData } from "../../Data/BlogsData";

const HeaderContent = ({ slug }) => {
  const [pageLink, setPageLink] = useState();
  const [pagePath, setPagePath] = useState();
  const [pageTitle, setPageTitle] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const { branchSlug } = useParams();
  const { blogsSlug } = useParams();
  const { searchSlug } = useParams();
  const pageData = PageTitleData.find(
    (path) => path.href === location.pathname
  );
  const slugData = BranchData.find((branch) => branch.slug === branchSlug);
  const blogsData = BlogsData.find((blog) => blog.slug === blogsSlug);

  useEffect(() => {
    if (pageData) {
      setPageTitle(pageData.title);
      setPageLink(pageData.link);
      setPagePath(pageData.href);
    } else if (location.pathname === "/") {
      navigate("/");
    } else {
      navigate("/404");
    }
  }, [location.pathname, navigate, pageData]);

  return (
    <>
      {location.pathname === "/" ? (
        <div className="header-content">
          <div className="container">
            <div className="content">
              <h1 className="content-title">Ən dadlı yeməklərin ünvanı</h1>
              <Link to="/" className="btn-general active">
                Ətraflı
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-content">
          <div className="container">
            <div className="page-title">
              <h1 className="title">{pageTitle}</h1>
              <img src={whiteDesign} alt="title_design" />

              <div className="root-links">
                {slugData ? (
                  <>
                    <Link to="/">Əsas Səhifə</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to="/branch">Filiallar</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to={pagePath}>{pageLink}</Link>
                  </>
                ) : blogsData ? (
                  <>
                    <Link to="/">Əsas Səhifə</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to="/blogs">Bloglar</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to={pagePath}>{pageLink}</Link>
                  </>
                ) : (
                  <>
                    <Link to="/">Əsas Səhifə</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to={pagePath}>{pageLink}</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HeaderContent;
