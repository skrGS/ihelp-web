import PropTypes from "prop-types";
import React from "react";

const BrandLogo = ({ image, image2, style }) => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + image}
        alt="Brand Image1"
        className="logo-light"
        style={style}
      />
      <img
        src={process.env.PUBLIC_URL + image2}
        alt="Brand Image2"
        className="logo-dark"
        style={{ paddingLeft: "50px" }}
      />
    </>
  );
};
BrandLogo.propTypes = {
  image: PropTypes.string,
};

export default BrandLogo;
