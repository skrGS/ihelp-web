import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="rn-splite-style  pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img src="./images/ihelpimage/deal5.png" alt="banner123" />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">Танилцуулга</h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  Таны бизнест ашигтай зөв бизнес хэлэлцээр, борлуулалтын
                  үйлчилгээ хэрэгцээтэй, эсвэл дутмаг байгаа бол ihelp deal танд
                  туслах болно. Өөрөөр хэлбэл бид таны болон танай компанийн
                  бүтээгдэхүүн үйлчилгээг тохирох худалдан авагч болоод хамтран
                  ажиллах харилцагчид тань тохиромжтой нөхцөлөөр нийлүүлэн
                  зуучилна.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
