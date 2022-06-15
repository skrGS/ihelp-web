import React from "react";
import Header from "../screens/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <main className="page-wrapper">
        <Header
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        {children}
      </main>
    </>
  );
};
export default Layout;
