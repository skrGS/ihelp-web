import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
  {
    countNum: 5000,
    countTitle: "Сар бүрийн хэвлэл ",
  },
  {
    countNum: 100000,
    countTitle: "Дижитал хандалт",
  },
];

const SlipTwo = () => {
  return (
    <div className="rn-splite-style">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail">
              <img src="./images/ihelpimage/bgnewMag.png" alt="split Images" style={{borderRadius:"10px"}} />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <div className="">
                <h1 className="title">
                  Хувь хүн болон <strong style={{color:"#059dff"}}>Карьер хөгжлийн</strong> сэтгүүл
                </h1>

                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  Энэ бол Монголын медиа зах зээлд анхлан нэвтрүүлж буй хувь хүн
                  болон карьер хөгжлийн сэтгүүл юм. ihelp magazine-г
                  эрхлэн гаргаж буй хамт олон нь салбартаа 9-10 жил ажилласан
                  чадварлаг багийн бүрэлдэхүүнтэй ажиллаж байгаа бөгөөд тус
                  сэтгүүлийг олон улсын стандартад нийцүүлэн бэлтгэн гаргах
                  болно.
                </p>
              </ScrollAnimation>

              <div className="row">
                {Data.map((data, index) => (
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                    key={index}
                  >
                    <div className="count-box counter-style-4 text-left">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <div className="count-number">
                              {isVisible ? <CountUp end={data.countNum} /> : 0}
                            </div>
                          )
                        }
                      </TrackVisibility>
                      <h5 className="counter-title">{data.countTitle}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlipTwo;
