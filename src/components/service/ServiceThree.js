import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import DarkLogo from "../logo/DarkLogo";
const ServiceThree = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`service ${serviceStyle} ${textAlign}`}>
            <div className="inner pb-xl-4">
              <div
                className="image"
                style={{
                  padding: 50,
                }}
              >
                <DarkLogo
                  image={`${process.env.PUBLIC_URL}/images/fixing/ihelp-white.png`}
                  image2={`${process.env.PUBLIC_URL}/images/fixing/ihelp-blck.png`}
                />
              </div>
              <div className="content" style={{ paddingTop: 25 }}>
                <h4 className="title">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: "ihelp HR" }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray "
                  dangerouslySetInnerHTML={{
                    __html:
                      "Бүх төрлийн ажил олгогч болон ажил гүйцэтгэгч хувь хүн, албан байгууллагуудын хэрэгцээт платформ",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`service ${serviceStyle} ${textAlign}`}>
            <div className="inner">
              <div
                className="image"
                style={{
                  padding: 50,
                }}
              >
                <DarkLogo
                  image={`${process.env.PUBLIC_URL}/images/fixing/magazine-white.png`}
                  image2={`${process.env.PUBLIC_URL}/images/fixing/magazine-black.png`}
                />
              </div>
              <div className="content">
                <h4 className="title">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: "ihelp magazine" }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray pb--40 "
                  dangerouslySetInnerHTML={{
                    __html:
                      "Монголын медиа салбарт хувь хүн болон карьер хөгжлийн чиглэлээр эрхлэн гаргаж буй анхдагч сэтгүүл",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`service ${serviceStyle} ${textAlign}`}>
            <div className="inner pb-xl-4">
              <div
                className="image"
                style={{
                  paddingTop: 50,
                }}
              >
                <DarkLogo
                  image={`${process.env.PUBLIC_URL}/images/ihelp/4help.png`}
                  image2={`${process.env.PUBLIC_URL}/images/ihelp/4helpb.png`}
                />
              </div>
              <div className="content" style={{ paddingTop: 50 }}>
                <h4 className="title">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: "ihelp deal" }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray "
                  dangerouslySetInnerHTML={{
                    __html:
                      "Бизнесийн байгууллагуудад мэргэжлийн борлуулалтын үйлчилгээг үзүүлэх, тохирох харилцагчид зуучлах",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
export default ServiceThree;
