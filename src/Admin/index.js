import React from "react";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import AdminCards from "./AdminCards";
import SectionTitle from "../components/sectionTitle/SectionTitle";
const Admin = () => {
  return (
    <>
      <SEO title="Admin" />
      <Layout>
        <div className="main-content">
          <div className="rwt-team-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--15">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Админ тохиргоо"
                    title="Админ мэдээлэл"
                    description=""
                  />
                </div>
              </div>
              <AdminCards
                column="col-lg-3 col-md-6 col-12 mt--30"
                teamStyle="team-style-two"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Admin;
