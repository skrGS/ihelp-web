import React from "react";
import Nav from "./Nav";
import { FiX } from "react-icons/fi";
import Logo from "../../components/logo/Logo";

const MobileMenu = ({ show, onClose }) => {
  var elements = document.querySelectorAll(
    ".popup-mobile-menu .has-droupdown > a"
  );
  var elementsTwo = document.querySelectorAll(
    ".popup-mobile-menu .with-megamenu > a"
  );
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  for (var m in elementsTwo) {
    if (elementsTwo.hasOwnProperty(i)) {
      elementsTwo[m].onclick = function () {
        this.parentElement
          .querySelector(".rn-megamenu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <div className={`popup-mobile-menu ${show ? "active" : ""}`}>
      <div className="inner">
        <div className="header-top">
          <Logo
            image={`${process.env.PUBLIC_URL}/images/logo/ihelp-dark.png`}
            image2={`${process.env.PUBLIC_URL}/images/logo/ihelp.png`}
          />
          <div className="close-menu">
            <span className="close-button" onClick={onClose}>
              <FiX />
            </span>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
export default MobileMenu;
