import React from "react";
import { Link } from "react-router-dom";
import footerOne from "./footerOne.json";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Logo from "../../components/logo/Logo";
const footerIntemOne = footerOne[1];
const footerIntemTwo = footerOne[2];
const footerIntemThree = footerOne[3];
const footerIntemFive = footerOne[5];

const indexOneLink = footerIntemOne.quicklink;
const indexThreeLink = footerIntemThree.quicklink;

const Footer = () => {
  return (
    <>
      <footer className="rn-footer footer-style-default no-border">
        <div className="footer-top">
          <div className="container">
            <div
              className="row"
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <div className="logo">
                    <Logo
                      image={`${process.env.PUBLIC_URL}/images/logo/ihelp-dark.png`}
                      image2={`${process.env.PUBLIC_URL}/images/logo/ihelp.png`}
                    />
                  </div>
                  <h3 className="text-big">
                    Бид тусалья <br /> 2022 он
                  </h3>
                </div>
              </div>

              {/* Start Single Widget  */}
              {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemOne.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {indexOneLink.map((data, index) => (
                        <li key={index}>
                          <Link to={`${data.url}`}>{data.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* End Single Widget  */}

              {/* Start Single Widget  */}
              {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">{footerIntemTwo.title}</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        <li>
                          <Link
                            to="//novelistgroup.com/upload/brochure.pdf"
                            target="_blank"
                          >
                            Сурталчилгаа тавих үнийн санал
                          </Link>
                        </li>
                        {indexThreeLink.map((data, index) => (
                          <li key={index}>
                            <Link to={`${data.url}`}>{data.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End Single Widget  */}

              {/* Start Single Widget  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemFive.title}</h4>
                  <div className="inner">
                    <h6 className="subtitle">{footerIntemFive.subtitle}</h6>
                    <ul className="social-icon social-default justify-content-start">
                      <li>
                        <Link to="//www.facebook.com/ihelp.mn" target="_blank">
                          <FiFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link to="//twitter.com/ihelpmn" target="_blank">
                          <FiTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="//www.instagram.com/ihelp.mn/"
                          target="_blank"
                        >
                          <FiInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="//www.linkedin.com/company/ihelpmn/"
                          target="_blank"
                        >
                          <FiLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
};

export default Footer;
