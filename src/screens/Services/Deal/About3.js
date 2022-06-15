import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiCheck } from "react-icons/fi";

const About3 = () => {
  return (
    <div className="rn-splite-style pt--100 pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">Media deal</h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  MEDIA салбарт олон жилийн туршлагатай чадварлаг баг хамт олон
                  дараах үйлчилгээнүүдийг харилцагч, хамтран ажиллагч нартаа
                  цогцоор нь үзүүлж тэднийг хүссэн үр дүнд нь хүргэдэг. Үүнд:
                  <ul className="list-icon">
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Телевизийн маркетинг
                    </li>

                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Сэтгүүлийн маркетинг
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Пи-Ар сэтгүүл зүй
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Контент үйлдвэрлэл, хөгжүүлэлт
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Бренд хөгжүүлэлт, хэвлэл дизайн
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Social контент маркетинг
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Арга хэмжээ зохион байгуулалт гэх мэт бүх төрлийн медиа
                      маркетинг, пи-ар хэрэгцээт үйлчилгээг олон улсын
                      стандартын дагуу хийж гүйцэтгэнэ.
                    </li>
                  </ul>
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img
                src="./images/ihelpimage/deal4.png"
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

export default About3;
