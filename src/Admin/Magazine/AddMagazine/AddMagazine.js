import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../common/Layout";
import SEO from "../../../common/SEO";
import axios from "../../../axios";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const AddMagazine = (props) => {
  const [contact, setContact] = useState({
    name: "",
    photo: [],
  });
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
  const [file, setFile] = useState();

  const handleAddFormSumbit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("/magazines", contact, { headers })
      .then((result) => {
        const newBook = result.data.data;
        const xhr = new XMLHttpRequest();
        const data = new FormData();
        data.append("file", file);
        xhr.open(
          "PUT",
          `https://novelistgroup.com/api/v1/magazines/${newBook._id}/upload-photo`,
          { headers }
        );
        xhr.send(data);
        console.log(data);
        console.log(result);
        props.history.push("/adminMagazines");
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
                      title="Magazine нэмэх"
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
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Magazine Нэр</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="name"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Сэтгүүлийн нүүрний зураг</Form.Label>
                    <Form.Control
                      name="photo"
                      type="file"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Сэтгүүлийн нүүрний зураг1</Form.Label>
                    <Form.Control
                      name="photo1"
                      type="file"
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

export default AddMagazine;
