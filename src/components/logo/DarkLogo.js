import PropTypes from "prop-types";
import React from "react";

const DarkLogo = ({ image, image2, style1 }) => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + image}
        alt="Banner Images"
        className="logo-light"
      />
      <img
        src={process.env.PUBLIC_URL + image2}
        alt="Banner Images"
        className="logo-dark"
      />
    </>
  );
};
DarkLogo.propTypes = {
  image: PropTypes.string,
};

export default DarkLogo;
