import React from "react";
import SEO from "../../../common/SEO";
import Footer from "../../Footer/Footer";
import About from "./About";
import Header from "../../Header/Header";
import Separator from "../../../components/separator/Separator";
import ContactData from "./ContactData";
import CallToAction from "../Magazine/CallToAction";
import DarkLogo from "../../../components/logo/DarkLogo";
const IhelpChamp = () => {
  return (
    <>
      <SEO title="Champ" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

        {/* Start Slider Area  */}
        <div className="slider-area slider-style-3 height-850">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                <div className="inner text-left">
                  <h1 className="title theme-gradient">ihelp champ</h1>
                  <p className="description">
                    Манлайлагч оюутан залуусын клуб.
                  </p>
                </div>
              </div>
              <div className="order-1 order-lg-2 col-lg-5">
                <div className="thumbnail">
                  <DarkLogo
                    image={`${process.env.PUBLIC_URL}/images/ihelplogo/champW1.png`}
                    image2={`${process.env.PUBLIC_URL}/images/ihelplogo/champB1.png`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <Separator />

        <About />
        <Separator />
        <CallToAction />
        <Separator />
        <ContactData />
        <Footer />
      </main>
    </>
  );
};
export default IhelpChamp;
