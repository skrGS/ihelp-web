import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import WorkCards from "./WorksCards";
import BreadcrumbOne from "../../components/breadcrumb/BreadcrumbOne";
import Separator from "../../components/separator/Separator";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Service = () => {
  return (
    <>
      <SEO title="Admin" />
      <Layout>
        <BreadcrumbOne title="Админ Header Works тохиргоо" />
        <div className="main-content">
          <Separator />

          <div className="rn-service-area rn-section-gap ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    title="Ажлын зар тохиргоо"
                  />
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    className="button-group mt--20 absolute-center"
                  >
                    <Link
                      className="btn-default btn-large btn-border"
                      to="/addWebWorks"
                    >
                      Ажлын зар нэмэх
                    </Link>
                  </ScrollAnimation>
                </div>
              </div>
              <WorkCards
                serviceStyle="service__style--2"
                textAlign="text-center"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Service;
