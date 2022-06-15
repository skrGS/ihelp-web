import React from "react";
import SEO from "../../../common/SEO";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import TimelineTwo from "./Timeline";
import About from "./About";
import About1 from "./About1";
import ContactDatas from "./ContactDatas";
import CallToAction from "../Magazine/CallToAction";
import DarkLogo from "../../../components/logo/DarkLogo";
const IhelpHr = () => {
  return (
    <>
      <SEO title="ihelp HR" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

        {/* Start Slider Area  */}
        <div className="slider-area slider-style-3 height-850">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                <div className="inner text-left">
                  <h1 className="title theme-gradient">ihelp HR</h1>
                  <p className="description">
                    Хөдөлмөр зуучийн дэвшилтэт, цогц платформ тун удахгүй
                    мэндлэх болно.
                  </p>
                </div>
              </div>
              <div className="order-1 order-lg-2 col-lg-5">
                <div className="thumbnail">
                  <DarkLogo
                    image={`${process.env.PUBLIC_URL}/images/logo/ihelp-dark.png`}
                    image2={`${process.env.PUBLIC_URL}/images/logo/ihelp.png`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <Separator />

        <Separator />

        <About />
        <Separator />
        <About1 />
        <Separator />
        <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Календарчилсан"
                  title="Хөгжүүлэлтийн явц"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 mt--50">
                <TimelineTwo classVar="dark-line" />
              </div>
            </div>
          </div>
        </div>

        <Separator />
        <CallToAction />
        <Separator />
        <ContactDatas />
        <Separator />

        <Footer />
      </main>
    </>
  );
};
export default IhelpHr;
