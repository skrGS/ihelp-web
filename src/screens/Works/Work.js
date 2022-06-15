import React, { useState, useEffect } from "react";
import WorkItem from "./WorkItem";
import axios from "../../axios";
import { toast } from "react-toastify";

const PortfolioOne = ({ Column }) => {
  const [getAllItems, setGetAllItems] = useState([]);
  useEffect(() => {
    axios
      .get("/webworks?limit=1000")
      .then((resutl) => {
        setGetAllItems(resutl.data.data);
        // setError(null);
      })
      .catch((err) => {
        let message = err.message;
        // setError(message);
        console.log("Алдаа гарлаа", message);
        toast.error(message);
      });
  }, []);

  return (
    <>
      <div className="row row--15">
        {getAllItems.map((item) => (
          <div key={item.id} className={Column}>
            <WorkItem portfolio={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioOne;
