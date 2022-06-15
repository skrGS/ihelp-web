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
                ihelp HR platform <br /> pre-order
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
              <p className="description">2022.02.20</p>
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
              <h6 className="title">ihelp HR /web & mobile/ version 1.0</h6>
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
              <p className="description">2022.04.01</p>
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
                ihelp HR <br /> Job Fair
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
              <p className="description">2022.05.20</p>
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
              <h6 className="title">ihelp HR /web & mobile/ version 2.0</h6>
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
              <p className="description">2022.06.01</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
