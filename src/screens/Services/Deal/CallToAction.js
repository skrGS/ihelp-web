import React from "react";
import { FiMail } from "react-icons/fi";
import { Row, Col } from "reactstrap";
const CallToAction = () => {
  return (
    <div
      className="rn-callto-action clltoaction-style-default style-6 bg_image bg_image_fixed"
      style={{ backgroundImage: `url(/images/timeline/subs1.jpg)` }}
      data-black-overlay="8"
    >
      <div className="container ">
        <main>
          <div className="row row--15 service-wrapper  ">
            <div className="container  ">
              <Row className="center align-content-center align-self-center justify-center justify-content-center">
                <Col className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className=" text-center">
                    <h2 className="title mb--0">Маркетер танд зориулав</h2>
                    <p>
                      Танд болон таны бизнест хэрэгтэй маркетингийн сонирхолтой
                      боломж болон саналуудыг цаг алдалгүй хүлээн аваарай
                    </p>
                    <form
                      className="blog-search"
                      action="#"
                      // onSubmit={handleAddMagazineSubs}
                    >
                      <input
                        type="text"
                        name="name"
                        // onChange={handleAddMagazineSubmit}
                        placeholder="И-мэйл хаягаа бичнэ үү  "
                      />
                      <button className="search-button " type="submit">
                        <FiMail />
                      </button>
                    </form>
                  </div>
                </Col>
                <Col className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div>
                    <div className="thumbnail image-left-content">
                      <img
                        src="./images/ihelplogo/dealW1.png"
                        alt="banner123"
                        style={{ marginTop: 50 }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default CallToAction;
