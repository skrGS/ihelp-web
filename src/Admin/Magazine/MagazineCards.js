import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "../../axios";

const MagazineCards = ({ textAlign, serviceStyle }) => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const getData = () => {
    axios
      .get("/magazines?limit=10")
      .then((resutl) => {
        setDatas(resutl.data.data);
        setError(null);
      })
      .catch((err) => {
        let message = err.message;
        setError(message);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="row row--15 service-wrapper">
      {datas.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            {error && <h1 color="danger">{error}</h1>}
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="image">
                  <img
                    src={`https://novelistgroup.com/upload/${val.photo}`}
                    alt="card Images"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link
                      to={`/magazines/${val._id}`}
                      dangerouslySetInnerHTML={{ __html: val.name }}
                    ></Link>
                  </h4>
                  <p
                    className="description b1 color-gray mb--0"
                    dangerouslySetInnerHTML={{ __html: val.createdAt }}
                  ></p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default MagazineCards;
