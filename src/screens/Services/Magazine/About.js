import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="rn-splite-style  pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img src="./images/ihelpimage/magazine3.png" alt="banner123" />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">Хэвлэлт</h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  Сар бүр тогтмол нэг дугаар хэвлэмэлээр болон дижитал
                  хувилбараар уншигчдын гарт үнэ төлбөргүй очих юм. Дижитал
                  хувилбар нь маш олон төрлийн үйлчилгээний байгууллагуудад QR
                  код уншуулан үзэх хэлбэрээр байх бөгөөд гар утасны зориулалтын
                  аппликейшн дээр уншигдах болно.
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
