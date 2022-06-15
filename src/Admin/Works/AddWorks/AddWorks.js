import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../common/Layout";
import SEO from "../../../common/SEO";
import axios from "../../../axios";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const AddWork = (props) => {
  const [contact, setContact] = useState({
    name: "",
    photo: "",
    email: "",
    phoneNumber: "",
    work1: "",
    work2: "",
    work3: "",
    work4: "",
    work5: "",
    work6: "",
    work7: "",
    work8: "",
    work9: "",
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
      .post("/works", contact, { headers })
      .then((result) => {
        const newWork = result.data.data;
        const xhr = new XMLHttpRequest();
        const data = new FormData();
        data.append("file", file);
        xhr.open(
          "PUT",
          `https://novelistgroup.com/api/v1/works/${newWork._id}/upload-photo`,
          { headers }
        );
        xhr.send(data);
        console.log(data);
        console.log(result);
        props.history.push("/AdminWorks");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
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
                      title="Ажлын зар нэмэх"
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
                    <Form.Label>Ажлын зарын нэр</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="name"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="workPhoto">
                    <Form.Label>Ажлын зарын Зураг</Form.Label>
                    <Form.Control
                      name="photo"
                      type="file"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Ажлын зарын email</Form.Label>
                    <Form.Control
                      name="email"
                      placeholder="email"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Ажлын зарын utasnii dugaar </Form.Label>
                    <Form.Control
                      name="phoneNumber"
                      placeholder="phoneNumber"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work1">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work1"
                      placeholder="work1"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work2">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work2"
                      placeholder="work2"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work3">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work3"
                      placeholder="work3"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work4">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work4"
                      placeholder="work4"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work5">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work5"
                      placeholder="work5"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work6">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work6"
                      placeholder="work6"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work7">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work7"
                      placeholder="work7"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work8">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work8"
                      placeholder="work8"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work9">
                    <Form.Label>Ажлын зарын тайлбар</Form.Label>
                    <Form.Control
                      name="work9"
                      placeholder="work9"
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

export default AddWork;
