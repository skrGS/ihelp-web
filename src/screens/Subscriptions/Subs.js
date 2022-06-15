import React from "react";
import Separator from "../../components/separator/Separator";

import ServiceThree from "./ServiceThree";

const Service = () => {
  return (
    <>
      {/* Start Service Area  */}
      <div
        className="rn-callto-action clltoaction-style-default style-6 bg_image bg_image_fixed"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/timeline/subs1.jpg)`,
        }}
        data-black-overlay="8"
      >
        <div className="container">
          <ServiceThree
            serviceStyle="service__style--2"
            textAlign="text-center "
          />
        </div>
      </div>
      {/* End Service Area  */}

      <Separator />
    </>
  );
};

export default Service;
