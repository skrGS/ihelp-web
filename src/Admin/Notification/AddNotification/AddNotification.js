import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../common/Layout";
import SEO from "../../../common/SEO";
import axios from "../../../axios";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const AddNotification = (props) => {
  const [contact, setContact] = useState({
    name: "",
    content: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    setContact({ ...contact, [fieldName]: fieldValue });
  };

  const handleAddFormSumbit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("/notifications", contact, { headers })
      .then((result) => {
        console.log(result);
        props.history.push("/adminNotifications");
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
                    <Form.Label>Notification гарчиг</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="name"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="workContent">
                    <Form.Label>Notification тайлбар</Form.Label>
                    <Form.Control
                      name="content"
                      placeholder="content"
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

export default AddNotification;
