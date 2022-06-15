import React from "react";
import { FiMail } from "react-icons/fi";

const CallToAction = () => {
  return (
    <div
      className="rn-callto-action clltoaction-style-default style-2 bg_image bg_image_fixed"
      style={{ backgroundImage: `url(/images/timeline/subs1.jpg)` }}
      data-black-overlay="8"
    >
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="inner">
              <div className="content text-center">
                <h2 className="title mb--0">Худалдан авагчид зориулав</h2>
                <p>
                  Борлуулагдаж буй бүх төрлийн хөдлөх хөрөнгийн мэдээллийг цаг
                  алдалгүй аваарай
                </p>
                <form
                  className="blog-search"
                  action="#"
                  // onSubmit={handleAddPlusSumbit}
                >
                  <input
                    type="text"
                    className="input"
                    name="name"
                    //   onChange={handleAddPlusChange}
                    placeholder="И-мэйл хаягаа бичнэ үү  "
                  />
                  <button className="search-button " type="submit">
                    <FiMail />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
