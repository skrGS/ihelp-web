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
            <div className="thumbnail image-left-content">
              <img src="./images/ihelpimage/bgnewDeal.png" alt="split Images" />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">
                  Бизнесийн хэлэлцээр болон{" "}
                  <strong style={{ color: "#059dff" }}>
                    борлуулалтын үйлчилгээ
                  </strong>
                </h4>
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
                    Борлуулалтын зөвлөх
                  </li>
                  <li>
                    <span
                      className="icon"
                      style={{ backgroundColor: "#059dff", color: "white" }}
                    >
                      <FiCheck />
                    </span>{" "}
                    Борлуулалтаа даатгах
                  </li>
                  <li>
                    <span
                      className="icon"
                      style={{ backgroundColor: "#059dff", color: "white" }}
                    >
                      <FiCheck />
                    </span>{" "}
                    Борлуулалтаа нэмэгдүүлэх
                  </li>
                  <li>
                    <span
                      className="icon"
                      style={{ backgroundColor: "#059dff", color: "white" }}
                    >
                      <FiCheck />
                    </span>{" "}
                    Бизнесээ тэлэх
                  </li>
                </ul>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <div className="view-more-button mt--35">
                  <Link className="btn-default" to="/deal">
                    Дэлгэрэнгүй
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlpitOne;
