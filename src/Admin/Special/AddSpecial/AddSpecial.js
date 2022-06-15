import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../common/Layout";
import SEO from "../../../common/SEO";
import axios from "../../../axios";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const AddSpecial = (props) => {
  const [contact, setContact] = useState({
    name: "",
    photo: "",
    content: "",
    title: "",
  });
  const [file, setFile] = useState();

  const handleAddFormChange = (event) => {
    event.preventDefault();

    if (event.target.type === "file") {
      setFile(event.target.files[0]);
      setContact({ ...contact, photo: event.target.files[0].name });
    } else {
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
      setContact({ ...contact, [fieldName]: fieldValue });
    }
  };

  const handleAddFormSumbit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("/specials", contact, { headers })
      .then((result) => {
        const newSpecial = result.data.data;
        const xhr = new XMLHttpRequest();
        const data = new FormData();
        data.append("file", file);
        xhr.open(
          "PUT",
          `https://novelistgroup.com/api/v1/specials/${newSpecial._id}/upload-photo`,
          { headers }
        );
        xhr.send(data);
        console.log(data);
        console.log(result);
        props.history.push("/adminSpecials");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {" "}
      <>
        <SEO title="Admin" />
        <Layout>
          <div className="main-content">
            <Separator />

            {/* Start Service Area  */}
            <div className="rn-service-area rn-section-gap ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <SectionTitle
                      textAlign="text-center"
                      radiusRounded=""
                      title="Another highlight нэмэх"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Service Area  */}
          </div>
          <Container>
            <Row style={{ paddingBottom: "150px" }}>
              <Col>
                <Form onSubmit={handleAddFormSumbit}>
                  <Form.Group className="mb-3" controlId="workName">
                    <Form.Label>Special нэр</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="name"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="workPhoto">
                    <Form.Label>Special Зураг</Form.Label>
                    <Form.Control
                      name="photo"
                      type="file"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="workContent">
                    <Form.Label>Special тайлбар</Form.Label>
                    <Form.Control
                      name="content"
                      placeholder="content"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="WorkTitle">
                    <Form.Label>Special гарчиг</Form.Label>
                    <Form.Control
                      name="title"
                      placeholder="title"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>

                  <Button type="submit">Нэмэх</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    </div>
  );
};

export default AddSpecial;
