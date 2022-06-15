import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
// import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";

const Header = ({ HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  let [check] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header-default ${sticky && check ? "sticky" : ""}`;

  return (
    <>
      <header
        ref={ref}
        className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-4">
              <Logo
                image={`${process.env.PUBLIC_URL}/images/logo/ihelp-dark.png`}
                image2={`${process.env.PUBLIC_URL}/images/logo/ihelp.png`}
              />
            </div>
            <div className="col-lg-9 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>
                {/* <Link className={`btn-default ${btnStyle}`} to="/login">
                  Нэвтрэх
                </Link> */}
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <span
                      className="hamberger-button"
                      onClick={onCanvasHandler}
                    >
                      <FiMenu />
                    </span>
                  </div>
                </div>
                <Darkmode />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default Header;
