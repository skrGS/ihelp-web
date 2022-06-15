import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <div className="rwt-about-area about-style-2 rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/ihelpimage/champ44.png"
                alt="About Images"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <div className="content">
              <div className="section-title">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">Клубын танилцуулга</span>
                  </h4>
                  <h2 className="title mt--10">ihelp champ</h2>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p>
                    Тус клуб нь хувь хүн болон карьер хөгжлийн чиглэлээр
                    залуучуудыг идэвхтэй хамруулан үйл ажиллагаа явуулах гэж
                    байна. Клуб-д өсөж дэвжих хүсэл эрмэлзэлтэй, идэвхтэй
                    залуучуудыг нэгтгэх ба сар бүр тогтмол нийгмийн манлайлагч
                    нарын лекц, илтгэл, вебинар, сургалт, charity /сайн үйлсийн
                    аян/ зэргийг зохион байгуулах болно. <br /> <br /> Их
                    сургууль бүрд клубийн үйл ажиллагааг хариуцсан лидерүүд буюу
                    champion-уудыг шалгаруулж ажиллуулах ба бүхий л үйл
                    ажиллагаанд идэвхийлэн манлайлж оролцох тэдгээр залуусыг бид
                    алдаршуулах, карьерт нь тусламж дэмжлэг үзүүлэх боломжууд,
                    шагнал урамшуулал зэргийг олгох болно.
                  </p>

                  <ul className="list-icon">
                    <p>Нээлттэй бүртгэл:</p>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>{" "}
                      Клубын гишүүн /ihelp champ membership/
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>{" "}
                      Клубын лидер /ihelp champion/
                    </li>
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="read-more-btn mt--40">
                    <Link
                      className="btn-default btn-icon"
                      target={"_blank"}
                      to="//docs.google.com/forms/d/1_x8h08XGFv9DKEwIVe9LataIMIeCQKEVKkTDyZPxsdU/viewform?edit_requested=true&fbclid=IwAR3dZzISQy79-hAn49llvVFIID6g8iaPwHK_N84AkmUhg_xql2wVaLxdb9U"
                    >
                      Бүртгүүлэх холбоос
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
