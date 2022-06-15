import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Layout from "../../common/Layout";
import SEO from "../../common/SEO";
import axios from "../../axios";
import { toast } from "react-toastify";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
const MagazineSubs = () => {
  const [datas, setDatas] = useState([]);
  const getData = () => {
    axios
      .get("/magazineSubs?limit=100")
      .then((resutl) => {
        setDatas(resutl.data.data);
      })
      .catch((err) => {
        let message = err.message;
        toast.error(message);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`magazineSubs/${id}`)
      .then((result) => {
        console.log(result);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <SEO title="Admin" />
      <Layout>
        <div className="main-content">
          <div className="rwt-team-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--15">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Админ инфо"
                    title="magazine subs мэдээлэл"
                    description=""
                  />
                </div>
              </div>
              {/* aa */}
              <Table striped bordered hover variant="dark" className="bg-white">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Илгээсэн он сар</th>
                    <th>email хаяг</th>
                    <th>Устгах</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((e, index, _id) => {
                    return (
                      <tr key={e._id}>
                        <td>{index + 1}</td>
                        <td>{e.createdAt}</td>
                        <td>{e.name}</td>
                        <td>
                          <button onClick={() => handleDelete(e._id)}>
                            Устгах
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default MagazineSubs;
