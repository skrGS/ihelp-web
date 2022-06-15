import React from "react";
import SEO from "../../common/SEO";
import Work from "./Work";
import Layout from "../../common/Layout";
import { ToastContainer } from "react-toastify";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const HomeWork = () => {
  return (
    <>
      <SEO title="Нээлттэй ажлын байр" />
      <Layout>
        <div className="main-content">
          <ToastContainer />
          <div className="rwt-portfolio-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Нээлттэй ажлын байр"
                    title="Та манай багт нэгдэхийг хүсэж байна уу?"
                    description=""
                  />
                </div>
              </div>
              <Work Column="col-lg-4 col-md-6 mt--30 portfolio" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default HomeWork;
