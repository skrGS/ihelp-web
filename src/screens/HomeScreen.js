import React from "react";
import Slider from "react-slick";
import SEO from "../common/SEO";
import Header from "./Header/Header";
import { BannerActivation } from "../utils/script";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import Subs from "./Subscriptions/Subs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Separator from "../components/separator/Separator";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import BrandTwo from "../components/brand/BrandTwo";
import ServiceThree from "../components/service/ServiceThree";
import SlipTwo from "../components/Split/SlipTwo";
import SlipFour from "../components/Split/SlipFour";
import SlipOne from "../components/Split/SlipOne";
import ContactData from "./Contact/ContactData";
const HomeScreen = () => {
  return (
    <>
      <SEO title="Нүүр" />
      <main className="page-wrapper">
        <Header
          btnStyle="btn-small btn-icon round"
          HeaderSTyle="header-transparent"
        />
        <ToastContainer />
        {/* Start Slider Area  */}
        <Slider
          className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
          {...BannerActivation}
        >
          <div className="single-slide">
            <div
              className=" bg_image bg_image_fixed fullscreen "
              data-black-overlay="5"
              style={{
                backgroundImage: `url(/images/bg/312.jpg)`,
              }}
            >
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="col-12">
                    <div className="col-lg-12 text-center">
                      <div className="inner text-center">
                        <h1
                          className="title"
                          style={{
                            textAlign: "center",
                            justifyContent: "center",
                            fontWeight: "bolder",
                          }}
                        >
                          ХӨДӨЛМӨРИЙН ЗАХ
                        </h1>
                        <h1 style={{ fontWeight: "lighter" }}>
                          Тун удахгүй...
                        </h1>
                        <p
                          className="description"
                          dangerouslySetInnerHTML={{
                            __html: "ihelp.mn",
                          }}
                        ></p>
                        {/* <div className="button-group mt--30">
                          <Link className="btn-default" to="/hr">
                            Дэлгэрэнгүй
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="single-slide">
            <div
              className=" bg_image bg_image_fixed fullscreen"
              data-black-overlay="5"
              style={{
                backgroundImage: `url(/images/ihelp/bgmagazine.png)`,
              }}
            >
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="col-12">
                    <div className="inner text-center">
                      <h1
                        className="title"
                        dangerouslySetInnerHTML={{
                          __html:
                            "Карьераа дараагийн түвшинд гаргахад бэлэн үү?",
                        }}
                      ></h1>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html: "ihelp magazine",
                        }}
                      ></p>
                      <div className="button-group mt--30">
                        <Link className="btn-default" to="/magazine">
                          Дэлгэрэнгүй
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="single-slide">
            <div
              className=" bg_image bg_image_fixed fullscreen"
              data-black-overlay="5"
              style={{
                backgroundImage: `url(/images/ihelp/bgdeal.png)`,
              }}
            >
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="col-12">
                    <div className="inner text-center">
                      <h1
                        className="title"
                        style={{
                          textAlign: "center",
                          justifyContent: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        DEAL MAKER
                      </h1>
                      <h1>coming soon!!</h1>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html: "ihelp deal - Тун удахгүй...",
                        }}
                      ></p>
                      <div className="button-group mt--30">
                        <Link className="btn-default" to="/deal">
                          Дэлгэрэнгүй
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide">
            <div
              className=" bg_image bg_image_fixed fullscreen "
              data-black-overlay="5"
              style={{
                backgroundImage: `url(/images/ihelp/bgchamp.png)`,
              }}
            >
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="col-12">
                    <div className="inner text-center">
                      <h1
                        className="title"
                        dangerouslySetInnerHTML={{
                          __html:
                            "Залуу манлайлагч, нөлөөлөгч нарын цуглах цэг.",
                        }}
                      ></h1>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html: "ihelp champ - манлайлагч оюутнуудын клуб",
                        }}
                      ></p>
                      <div className="button-group mt--30">
                        <Link className="btn-default" to="/champ">
                          Дэлгэрэнгүй
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="single-slide">
            <div
              className=" bg_image bg_image_fixed fullscreen"
              data-black-overlay="5"
              style={{
                backgroundImage: `url(/images/ihelp/bgplus.png)`,
              }}
            >
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="col-12">
                    <div className="inner text-center">
                      <h1
                        className="title"
                        dangerouslySetInnerHTML={{
                          __html:
                            "Хөдлөх хөрөнгөө зармаар байв ч завгүй явна уу? ",
                        }}
                      ></h1>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html:
                            "ihelp+ Хөдлөх хөрөнгийн мэргэжлийн борлуулалтын үйлчилгээ <br/> Тун удахгүй",
                        }}
                      ></p>
                      <div className="button-group mt--30">
                        <Link className="btn-default" to="/plus">
                          Дэлгэрэнгүй
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
        {/* End Slider Area  */}

        <Separator />
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="ihelp гэж юу вэ?"
                  title="Нэг өгүүлбэрээр илэрхийлбэл"
                  description="Хөдөлмөрийн харилцаанд оролцдог бүх хүнд зориулсан нээлттэй, хамгийн том төвлөрөл бүхий анхны Монгол платформ."
                />
              </div>
              {/* <ServiceThree
                serviceStyle="service__style--2"
                textAlign="text-center"
              /> */}
            </div>
          </div>
        </div>

        {/* <Separator />
        <div className="rwt-split-area ">
          <div className="wrapper">
           
            <SlipTwo />
          </div>
        </div> */}

        <Separator />
        <div className="rwt-split-area rn-section-gap ">
          <div className="wrapper">
            <SlipFour />
          </div>
        </div>
        {/* 
        <Separator />

        <div className="rwt-split-area rn-section-gap">
          <div className="wrapper">
            <SlipOne />
          </div>
        </div> */}

        <Separator />
        {/* Start Service Area  */}
        <div className="rwt-brand-area pb--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="title">
                    <br />
                    Хамтрагч байгууллагууд
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo brandStyle="brand-style-1" />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}
        <ContactData />
        {/* <Separator />
        <Subs /> */}
        <Footer />
      </main>
    </>
  );
};

export default HomeScreen;
