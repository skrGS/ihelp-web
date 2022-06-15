import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiCheck } from "react-icons/fi";

const About1 = () => {
  return (
    <div className="rn-splite-style pt--100  pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">Агуулга</h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  Сэтгүүлд нийгэмд хүлээн зөвшөөрөгдсөн карьерийн замналаар
                  амжилттай өсөж яваа манлайлагч нарын туршлагыг анхдагч эх
                  сурвалжаас нь уншигч нарт хүргэх бөгөөд цаг үеийн хамгийн
                  шилдэг шигшмэл контентууд нийтлэгдэх болно. Үүнд: <br />
                  <ul className="list-icon">
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Чухал тоо баримт статистикууд инфографикаар
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>{" "}
                      Технологийн булан
                    </li>

                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Санхүү, эдийн засаг, хөрөнгө оруулалтын булан
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      ОУ-н цаг үеийн шилдэг контентүүд
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Онцлох компани, менежер, нийгэмд нөлөөлөгч нар
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Нээлттэй ажлын байрны мэдээллүүд гэх мэт.
                    </li>
                  </ul>
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img
                src="./images/ihelpimage/magazine5.png"
                alt="banner123"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
