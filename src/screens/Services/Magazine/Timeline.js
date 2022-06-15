import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Timeline = ({ classVar }) => {
  return (
    <div className="timeline-style-two bg-color-blackest">
      <div className="row row--0">
        {/* Start Single Progress */}
        <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`}>
          <div className="rn-timeline">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <h6 className="title">
                <br /> Анхны дугаар <br /> /хэвлэмэл/
              </h6>
            </ScrollAnimation>
            <div className="progress-line">
              <div className="line-inner"></div>
            </div>
            <div className="progress-dot">
              <div className="dot-level">
                <div className="dot-inner"></div>
              </div>
            </div>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              {/* <p className="description">2022.12.30</p> */}
            </ScrollAnimation>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`}>
          <div className="rn-timeline">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <h6 className="title">
                Анхны дугаар <br /> /digital version on mobile app/
              </h6>
            </ScrollAnimation>
            <div className="progress-line">
              <div className="line-inner"></div>
            </div>
            <div className="progress-dot">
              <div className="dot-level">
                <div className="dot-inner"></div>
              </div>
            </div>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              {/* <p className="description">2022.01.15</p> */}
            </ScrollAnimation>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`}>
          <div className="rn-timeline">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <h6 className="title">
                <br /> Хоёр дахь дугаар <br /> /Цаашид сар бүр/
              </h6>
            </ScrollAnimation>
            <div className="progress-line">
              <div className="line-inner"></div>
            </div>
            <div className="progress-dot">
              <div className="dot-level">
                <div className="dot-inner"></div>
              </div>
            </div>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              {/* <p className="description">2022.01.30</p> */}
            </ScrollAnimation>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`}>
          <div className="rn-timeline">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <h6 className="title">
                ihelp magazine mobile app /further development/
              </h6>
            </ScrollAnimation>
            <div className="progress-line">
              <div className="line-inner"></div>
            </div>
            <div className="progress-dot">
              <div className="dot-level">
                <div className="dot-inner"></div>
              </div>
            </div>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              {/* <p className="description">2022.02.10</p> */}
            </ScrollAnimation>
          </div>
        </div>
        {/* End Single Progress */}
      </div>
    </div>
  );
};
export default Timeline;
