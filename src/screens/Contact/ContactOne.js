import React from "react";

import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";

const ContactOne = () => {
  return (
    <>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rn-contact-address ">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Утасны дугаар</h4>
                    <p>
                      <a href="tel:77555255">+976 7755-5255</a>
                    </p>
                    <p>
                      <a href="tel:9975-7475">+976 9975-7475</a>
                    </p>
                    <p>
                      <a href="tel:99493663">+976 9949-3663</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">И-мэйл хаягууд</h4>
                    <p>
                      <a href="mailto:info@ihelp.mn">info@ihelp.mn</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title ">Хаяг байршил</h4>
                    <p className="pb--30">
                      Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, UBH center{" "}
                      <br /> 9 давхар, 930Б тоот
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactOne;
