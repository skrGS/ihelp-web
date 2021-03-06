import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../common/Layout";
import SEO from "../../../common/SEO";
import axios from "../../../axios";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const WebAddWork = (props) => {
  const [contact, setContact] = useState({
    name: "",
    photo: "",
    email: "",
    phoneNumber: "",
    work1req: "",
    work2req: "",
    work3req: "",
    work4req: "",
    work5req: "",
    work6req: "",
    work7req: "",
    work8req: "",
    work9req: "",
    workLink: "",
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
      .post("/webworks", contact, { headers })
      .then((result) => {
        const newWork = result.data.data;
        const xhr = new XMLHttpRequest();
        const data = new FormData();
        data.append("file", file);
        xhr.open(
          "PUT",
          `https://novelistgroup.com/api/v1/webworks/${newWork._id}/upload-photo`,
          { headers }
        );
        xhr.send(data);
        console.log(data);
        console.log(result);
        props.history.push("/AdminWebWorks");
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
                      title="?????????? ?????? ??????????"
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
                    <Form.Label>?????????? ?????????? ??????</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="name"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="workPhoto">
                    <Form.Label>?????????? ?????????? ??????????</Form.Label>
                    <Form.Control
                      name="photo"
                      type="file"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>?????????? ?????????? email</Form.Label>
                    <Form.Control
                      name="email"
                      placeholder="email"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>?????????? ?????????? utasnii dugaar </Form.Label>
                    <Form.Control
                      name="phoneNumber"
                      placeholder="phoneNumber"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work1req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work1req"
                      placeholder="?????????????????? 1"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work2req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work2req"
                      placeholder="?????????????????? 2"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work3req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work3req"
                      placeholder="?????????????????? 3"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work4req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work4req"
                      placeholder="?????????????????? 4"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work5req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work5req"
                      placeholder="?????????????????? 5"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work6req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work6req"
                      placeholder="?????????????????? 6"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work7req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work7req"
                      placeholder="?????????????????? 7"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work8req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work8req"
                      placeholder="?????????????????? 8"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="work9req">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="work9req"
                      placeholder="?????????????????? 9"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="workLink">
                    <Form.Label>?????????? ?????????? ??????????????</Form.Label>
                    <Form.Control
                      name="workLink"
                      placeholder="?????????? ?????????? ????????"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>

                  <Button type="submit">??????????</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    </div>
  );
};

export default WebAddWork;
