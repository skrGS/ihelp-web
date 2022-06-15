import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { FiMail } from "react-icons/fi";
import axios from "../../axios";
const ServiceThree = ({ textAlign, serviceStyle, props }) => {
  const [contact, setContact] = useState({
    name: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setContact({ ...contact, [fieldName]: fieldValue });
  };
  const handleAddFormSumbit = (e) => {
    e.preventDefault();

    axios
      .post("/marketingSubs", contact)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //magazine subs
  const [magazine, setMagazine] = useState({
    name: "",
  });
  const handleAddFormChange1 = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setMagazine({ ...magazine, [fieldName]: fieldValue });
  };
  const handleAddFormSumbit1 = (e) => {
    e.preventDefault();

    axios
      .post("/magazineSubs", magazine)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <div className="row row--15 service-wrapper">
        <div className="col-lg-6 col-md-8 col-sm-8 col-12">
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="image">
                  <img
                    src={`/images/ihelp/work.png`}
                    alt="card Images"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="content">
                  <h4 className="title" style={{ color: "#fff" }}>
                    <Link
                      to="#service"
                      dangerouslySetInnerHTML={{
                        __html: "Маркетер танд <br/> зориулав",
                      }}
                    ></Link>
                  </h4>
                  <p
                    className="description b1 color-gray "
                    dangerouslySetInnerHTML={{
                      __html:
                        "Танд болон таны бизнест хэрэгтэй маркетингийн сонирхолтой боломж болон саналуудыг цаг алдалгүй хүлээн аваарай",
                    }}
                  ></p>
                  <form className="blog-search" onSubmit={handleAddFormSumbit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="И-мэйл хаягаа бичнэ үү!  "
                      onChange={handleAddFormChange}
                    />
                    <button className="search-button" type="submit">
                      <FiMail />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-8 col-12">
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="image">
                  <img
                    src={`/images/ihelp/magazine.png`}
                    alt="card Images"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="content">
                  <h4 className="title" style={{ color: "#fff" }}>
                    <Link
                      to="#service"
                      dangerouslySetInnerHTML={{
                        __html: "Уншигч танд <br/> зориулав",
                      }}
                    ></Link>
                  </h4>
                  <p
                    className="description b1 color-gray "
                    dangerouslySetInnerHTML={{
                      __html:
                        "Өөрийгөө хөгжүүлэх хэрэгцээт, цаг үеийн чанартай контентүүдыг тогтмол хүлээн  аваарай",
                    }}
                  ></p>
                  <form className="blog-search" onSubmit={handleAddFormSumbit1}>
                    <input
                      type="text"
                      name="name"
                      placeholder="И-мэйл хаягаа бичнэ үү  "
                      onChange={handleAddFormChange1}
                    />
                    <button className="search-button" type="submit">
                      <FiMail />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </main>
  );
};
export default ServiceThree;
