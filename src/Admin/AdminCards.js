import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const AdminCards = ({ column, teamStyle }) => {
  return (
    <div className="row row--30">
      {/* Магазинэ */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminMagazines">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/magazine.png`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Magazine</h2>
                <h6 className="subtitle theme-gradient">
                  Magazine мэдээлэл өөрчлөх
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* HeaderBanner */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminBanners">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/banner.png`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">HeaderBanner</h2>
                <h6 className="subtitle theme-gradient">
                  Зөвхөн Мобайл Апп дээрх тохиргоо
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Ажил  */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminWorks">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/work.png`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Ажлын зар </h2>
                <h6 className="subtitle theme-gradient">
                  Ажлын зар нэмэх хасах засах
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Highlights */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminHighlights">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/highlight.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Highlights</h2>
                <h6 className="subtitle theme-gradient">
                  Highlights мэдээлэл өөрчлөх
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Another highlights */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminAhighlights">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/highlight.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Another Highlights</h2>
                <h6 className="subtitle theme-gradient">
                  Another Highlights мэдээлэл өөрчлөх
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Special  */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminSpecials">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/highlight.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Special people</h2>
                <h6 className="subtitle theme-gradient">
                  Special people мэдээлэл өөрчлөх
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Marketing SUBS */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/marketingSubs">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/highlight.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Marketing Subs</h2>
                <h6 className="subtitle theme-gradient">
                  Marketing Subs мэдээлэл
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Ihelp plus subs */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/plusSubs">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/highlight.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">ihelp+ subs</h2>
                <h6 className="subtitle theme-gradient">
                  ihelp+ subs мэдээлэл
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* ihelp magazine */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/magazineSubs">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/highlight.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">ihelp magazine</h2>
                <h6 className="subtitle theme-gradient">
                  ihelp magazine мэдээлэл
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Notifications */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminNotifications">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/highlight.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">ihelp notifications</h2>
                <h6 className="subtitle theme-gradient">
                  ihelp notification мэдээлэл
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* WebWorks */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminWebWorks">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/work.png`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Ажлын зар </h2>
                <h6 className="subtitle theme-gradient">
                  Ажлын зар нэмэх хасах засах
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* HR deer ajliin zar nemeh */}
      <div className={`${column}`}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`rn-team ${teamStyle}`}>
            <div className="inner">
              <Link to="/adminWebWorks">
                <figure className="thumbnail">
                  <img
                    src={`./images/ihelp/work.png`}
                    alt="Corporate React Template"
                  />
                </figure>
              </Link>
              <figcaption className="content">
                <h2 className="title">Hr deer ajliin zar nemeh </h2>
                <h6 className="subtitle theme-gradient">
                  Ажлын зар нэмэх хасах засах
                </h6>
              </figcaption>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default AdminCards;
