import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="rn-splite-style pt--100 pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img src="./images/ihelp/hr1.png" alt="split Images" />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">Хөгжүүлж буй платформ <strong style={{color:"#059dff"}}>/Web, mobile app/</strong></h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  Бид ihelp нэртэй хөдөлмөр зуучийн платформыг 2021.01-р сараас
                  эхлэн тасралтгүй хөгжүүлэн хөдөлмөрийн зах зээлд нэвтрүүлэхээр
                  хичээнгүйлэн ажиллаж байна. Тус платформ нь цогц веб сайт
                  болон гар утасны аппликейшн /Android, iOS/-с бүрдэх ба энэ нь
                  ажил олгогч албан байгууллага, хувь хүн болоод бүтэн цагийн
                  ажлын байр, түр хугацааны ажил эрхлэх сонирхолтой компани
                  болон хүмүүсийг холбох зорилготой. <br/><br/> Өөрөөр хэлбэл хувь хүн танд
                  ямар нэгэн ажилтан эсвэл ажил хэрэгтэй нөхцөлд, харин албан
                  байгууллагад ажилтан болоод гүйцэтгэх ажил хэрэгтэй нөхцөлд
                  ihelp платформ бүх төрлийн хөдөлмөрийн зах зээлийн мэдээллээр
                  хангахаас гадна эрсдэлгүй, найдвартай харилцаа холбоо үүсгэх
                  гол хэрэгсэл тань байх болно.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
