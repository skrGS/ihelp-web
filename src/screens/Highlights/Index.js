import React from "react";
import { slugify } from "../../utils/index";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogList = ({ data, StyleVar }) => {
  return (
    <div className={`rn-card ${StyleVar}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link
            to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
            className="image"
          >
            <img
              src={`https://novelistgroup.com/upload/${data.photo}`}
              alt="Blog Image1"
            />
          </Link>
        </div>
        <div className="content">
          <ul className="rn-meta-list">
            <li>
              <Link
                to={process.env.PUBLIC_URL + `/archive/${slugify(data.name)}`}
              >
                {data.createdAt}
              </Link>
            </li>
            <li className="separator">/</li>
            <li>{data.content}</li>
          </ul>
          <h4 className="title">
            <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
              {data.name}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};
BlogList.propTypes = {
  data: PropTypes.object,
};
export default BlogList;
