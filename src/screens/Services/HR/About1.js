import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

const About1 = () => {
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
                <h4 className="title">
                  <strong style={{ color: "#059dff" }}>Headhunting</strong>{" "}
                  /хүний нөөц бүрдүүлэлт/
                </h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  Мөн танд болон танай байгууллагад хэрэгтэй ажилтнаа олоход
                  тань бид тусламж үзүүлэх зорилготойгоор хүний нөөц
                  бүрдүүлэлтийн үйлчилгээг үзүүлж байна. Та бидэндрүү хүсэлтээ
                  илгээн хамтран ажиллах гэрээгээ байгуулснаар бид таны болон
                  таны компанийн шаардлагын дагуу хүссэн ажилтныг тань богино
                  хугацаанд эрэл хайгуул хийн хөдөлмөрийн зах зээлээс олж өгөх
                  болно. <br /> <br /> Энэхүү үйлчилгээ нь ямар нэг урьдчилсан
                  төлбөр тооцоо байхгүй бөгөөд тус ажилтныг тогтвор суурьшилтай
                  ажиллах баталгааг үүсгэнэ.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <div className="view-more-button mt--35">
                  <Link className="btn-default" to="/work">
                    Дэлгэрэнгүй танилцуулга үзэх
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img
                src="./images/ihelp/hr2.png"
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

export default About1;
