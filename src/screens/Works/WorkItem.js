import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
  return (
    <div className="rwt-card">
      <div className="inner">
        <div className="thumbnail">
          <figure className="card-image">
            <Link to={process.env.PUBLIC_URL + `/work-detail/${portfolio._id}`}>
              <img
                className="img-fluid"
                src={`https://novelistgroup.com/upload/${portfolio.photo}`}
                alt="Portfolio-01"
              />
            </Link>
          </figure>
          <Link
            to={process.env.PUBLIC_URL + `/work-detail/${portfolio._id}`}
            className="rwt-overlay"
          ></Link>
        </div>
        <div className="content">
          <h5 className="title mb--10">
            <Link to={process.env.PUBLIC_URL + `/work-detail/${portfolio._id}`}>
              {portfolio.name}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
