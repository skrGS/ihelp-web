import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const SlpitOne = () => {
  return (
    <div className="rn-splite-style">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">
                  Хөдөлмөрийн зах зээлд{" "}
                  <strong style={{ color: "#059dff" }}>цоо шинэ</strong>{" "}
                </h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  Бид ihelp нэртэй хөдөлмөр зуучийн платформыг 2021.01-р сараас
                  эхлэн тасралтгүй хөгжүүлэн хөдөлмөрийн зах зээлд нэвтрүүлэхээр
                  хичээнгүйлэн ажиллаж байна. <br />
                  <br /> Тус платформ нь цогц веб сайт болон гар утасны
                  аппликейшн /Android, iOS/-с бүрдэх ба энэ нь хэрэглэгч
                  ажилтай, ажилгүйгээс үл хамааран хөдөлмөрийн харилцаанд ордог
                  бүх хүнд зориулагдсан.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <ul className="list-icon">
                  <li>
                    <span
                      className="icon"
                      style={{ backgroundColor: "#059dff", color: "white" }}
                    >
                      <FiCheck />
                    </span>{" "}
                    Ажил олгогч | албан байгууллага
                  </li>
                  <li>
                    <span
                      className="icon"
                      style={{ backgroundColor: "#059dff", color: "white" }}
                    >
                      <FiCheck />
                    </span>{" "}
                    Ажил олгогч | хувь хүн
                  </li>
                  <li>
                    <span
                      className="icon"
                      style={{ backgroundColor: "#059dff", color: "white" }}
                    >
                      <FiCheck />
                    </span>{" "}
                    Ажил хайгч | аж ахуй эрхлэгч
                  </li>
                  <li>
                    <span
                      className="icon"
                      style={{ backgroundColor: "#059dff", color: "white" }}
                    >
                      <FiCheck />
                    </span>{" "}
                    Ажил хайгч | хувь хүн
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img
                src="./images/ihelpimage/bgnewHR.png"
                alt="split Images"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlpitOne;
