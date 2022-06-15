import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="rwt-about-area about-style-2 rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/ihelpimage/plus44.png"
                alt="About Images"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <div className="content">
              <div className="section-title">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Борлуулалтын үйлчилгээний
                    </span>
                  </h4>
                  <h2 className="title mt--10">Танилцуулга</h2>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p>
                    Энэ бол хөдлөх хөрөнгийн борлуулалтын үйлчилгээ. Та
                    хөрөнгийн үнэ цэнийг алдагдуулалгүй хэрэгтэй хүнд нь зарах,
                    борлуулах хүсэл сонирхолтой хэдий ч таны цаг зав энэ бүхэнд
                    хүрэлцдэггүй бол бидэнд хандан гэрээ байгуулаад найдвартай,
                    богино хугацаанд борлуулалт хийлгээрэй. Бид таны
                    бүтээгдэхүүнийг зах зээлийн ханшаар үнэлж боломжит худалдан
                    авагч нарт танилцуулан хамгийн боломжит богино хугацаанд
                    борлуулах болно. <br /> <br /> Манай борлуулалт мэдээллийн
                    ажилтнуудаас мэдээллээ аваад бидний таатай нөхцөлийн дагуу
                    гэрээ байгуулан хамтран ажиллахыг урьж байна.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="read-more-btn mt--40">
                    <Link className="btn-default btn-icon" to="/contact">
                      Хөдлөх хөрөнгө борлуулалтын захиалга өгөх
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
