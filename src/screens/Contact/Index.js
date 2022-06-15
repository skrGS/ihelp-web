import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import ContactOne from "./ContactOne";
import Subs from "../Subscriptions/Subs";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Separator from "../../components/separator/Separator";
import ContactData from "./ContactData";

const IhelpContact = () => {
  return (
    <>
      <SEO title="Холбоо барих" />
      <Layout>
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Холбоо барих мэдээлэл"
                    title="Бидэнтэй хамтран ажиллахыг урьж байна"
                    description=""
                  />
                </div>
              </div>
              <ContactOne />
            </div>
          </div>
          {/* <ContactData />
          <Separator /> */}
        </div>
      </Layout>
    </>
  );
};
export default IhelpContact;
