import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link to="/">Нүүр хуудас</Link>
      </li>

      <li>
        <Link to="/work">Нээлттэй ажлын байр</Link>
      </li>

      <li>
        <Link to="/contact">Холбоо барих</Link>
      </li>
    </ul>
  );
};
export default Nav;
