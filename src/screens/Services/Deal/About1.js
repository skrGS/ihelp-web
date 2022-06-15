import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiCheck } from "react-icons/fi";

const About1 = () => {
  return (
    <div className="rn-splite-style pt--100  pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img src="./images/ihelpimage/deal6.png" alt="banner123" />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <div className="content">
                  <div className="inner">
                    <ul className="list-icon">
                    <li>
                      <span className="icon" style={{backgroundColor:"#059dff", color:'white', bottom:"10px"}}>
                        <FiCheck />
                      </span> <h4 className="title" >Sales deal</h4>
                    </li>
                      <p className="text">
                            Танай байгууллагын бүтээгдэхүүн үйлчилгээний
                            борлуулалтыг outsourcing хэлбэрээр гүйцэтгэх
                            үйлчилгээ юм. Бид та бүхэнтэй ярилцан зөвшилцөж
                            хэлэлцээр хийсний дараагаар зах зээлийн боломжийг
                            судлан борлуулалтыг тань өсгөх зорилгоор хамтран
                            ажиллах болно.
                          </p>
                    <li>
                      <span className="icon" style={{backgroundColor:"#059dff", color:'white', bottom:"10px"}}>
                        <FiCheck />
                      </span>       <h4 className="title">Sales consulting</h4>
                    </li>
                    <p className="text">
                            Байгууллагын борлуулалт болон бүтээгдэхүүн
                            үйлчилгээний борлуулалтад зориулсан зөвлөх
                            үйлчилгээ. Борлуулалтын чиглэлээр мэргэшсэн
                            туршлагатай ментор танай байгууллагын борлуулалтад
                            хэрэгцээт шийдлүүдийг нэвтрүүлэхэд туслалцаа үзүүлэх
                            бөгөөд борлуулалтын ажилтнуудыг чиглүүлэн зөвлөж
                            нийт борлуулалтын хэмжээг өсгөхөд дэмжлэг туслалцааг
                            үзүүлэх болно.
                          </p>
               
                  </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
