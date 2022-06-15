import React from "react";
import SEO from "../../../common/SEO";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Separator from "../../../components/separator/Separator";
import About from "./About";
import About1 from "./About1";
import CounterUpFour from "./CounterUpFour";
import ContactData from "./ContactData";
import CallToAction from "./CallToAction";
import DarkLogo from "../../../components/logo/DarkLogo";
import Timeline from "./Timeline";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const HomeMagazine = () => {
  return (
    <>
      <SEO title="Magazine" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
        {/* Start Slider Area  */}
        <div className="slider-area slider-style-3 height-850">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                <div className="inner text-left">
                  <h1 className="title theme-gradient">ihelp magazine</h1>
                  <p className="description">
                    Монголын медиа зах зээлд хувь хүн болон карьер хөгжлийн
                    чиглэлээр анхлан нэвтрүүлж буй сэтгүүл.
                  </p>
                </div>
              </div>
              <div className="order-1 order-lg-2 col-lg-5">
                <div className="thumbnail">
                  <DarkLogo
                    image={`${process.env.PUBLIC_URL}/images/ihelplogo/magazineW1.png`}
                    image2={`${process.env.PUBLIC_URL}/images/ihelplogo/magazineB1.png`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />
        <About />
        <Separator />
        <About1 />
        <Separator />
        <div className="rwt-counterup-area pb--100 pt--100">
          <div className="container mt_dec--30">
            <CounterUpFour
              column="col-lg-3 col-md-6 col-sm-6 col-12"
              counterStyle="counter-style-4"
              textALign="text-center"
            />
          </div>
        </div>
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
                <Timeline classVar="dark-line" />
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <CallToAction />
        <Separator />
        <ContactData />
        <Separator />
        <Footer />
      </main>
    </>
  );
};
export default HomeMagazine;
