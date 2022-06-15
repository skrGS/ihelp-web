import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BannerCards from "./BannerCards";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import BreadcrumbOne from "../../components/breadcrumb/BreadcrumbOne";
import Separator from "../../components/separator/Separator";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Service = () => {
  return (
    <>
      <SEO title="Admin" />
      <Layout>
        <BreadcrumbOne title="Админ Header Banner тохиргоо" />
        <div className="main-content">
          <Separator />

          {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    title="Banner Settings"
                  />
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    className="button-group mt--20 absolute-center"
                  >
                    <Link
                      className="btn-default btn-large btn-border"
                      to="/addBanner"
                    >
                      Banner Нэмэх
                    </Link>
                  </ScrollAnimation>
                </div>
              </div>
              <BannerCards
                serviceStyle="service__style--2"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}
        </div>
      </Layout>
    </>
  );
};

export default Service;
