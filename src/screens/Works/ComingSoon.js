import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Layout from "../../common/Layout";
import Typed from "react-typed";

const ComingSoon = ({ column, teamStyle }) => {
  return (
    <Layout>
      <div className="container ptb--150">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title theme-gradient display-two">
                ihelp нээлттэй ажлын байр <br />{" "}
                <Typed
                  strings={["тун удахгүй.", "тун удахгүй", "тун удахгүй."]}
                  typeSpeed={80}
                  backSpeed={5}
                  backDelay={1000}
                  loop
                />
              </h1>

              <div className="button-group pt--30">
                <Link
                  className="btn-default btn-medium round btn-icon"
                  to="/contact"
                >
                  Холбоо барих
                  <i className="icon">
                    <FiArrowRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ComingSoon;
