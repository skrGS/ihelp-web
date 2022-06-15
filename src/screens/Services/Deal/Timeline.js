import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Timeline = ({ classVar }) => {
  return (
    <div className="timeline-style-one bg-color-blackest pb--30 ">
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
                A brand new platform for business deals development process
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
              <p className="description">2022.02.01 - 2022.05.01</p>
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
                <br /> <br /> Opening for clients
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
              <p className="description">2022.05.01 - 2022.06.01</p>
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
                <br /> <br /> Update Version 2.0
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
              <p className="description">2022.06.01 - 2022.08.01</p>
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
                <br /> <br /> Upgrade version 3.0
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
              <p className="description">2022.08.01 - 2022.09.01</p>
            </ScrollAnimation>
          </div>
        </div>
        {/* End Single Progress */}
      </div>
    </div>
  );
};
export default Timeline;
