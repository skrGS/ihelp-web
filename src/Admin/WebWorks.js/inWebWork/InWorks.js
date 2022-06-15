import React, { Component } from "react";
import SEO from "../../../common/SEO";
import Layout from "../../../common/AdminLayout";
import axios from "../../../axios";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Form, Row } from "react-bootstrap";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

export default class inWebWorks extends Component {
  state = {
    name: null,
    photo: null,
    email: null,
    phoneNumber: null,
    work1req: null,
    work2req: null,
    work3req: null,
    work4req: null,
    work5req: null,
    work6req: null,
    work7req: null,
    work8req: null,
    work9req: null,
    workLink: null,
    error: null,
    success: null,
    deleted: null,
    loading: false,
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleType = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value, error: null, success: null });
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("webworks/" + this.props.match.params.id)
      .then((result) =>
        this.setState({ ...result.data.data, error: null, loading: false })
      )
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  handleSave = () => {
    this.setState({ loading: true, success: null });
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .put(
        "webworks/" + this.props.match.params.id,
        {
          name: this.state.name,
          content: this.state.content,
          title: this.state.title,
        },
        { headers }
      )
      .then((result) => {
        this.setState({
          ...result.data.data,
          error: null,
          loading: false,
          success: "Амжилттай хадгалагдлаа...",
        });
        this.props.history.push("/adminWebWorks");
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  handleDelete = () => {
    this.setState({ loading: true, success: null });
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .delete("webworks/" + this.props.match.params.id, { headers })
      .then((result) => {
        this.setState({
          deleted: true,
        });
        this.props.history.push("/adminWebWorks");
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  render() {
    if (this.state.deleted) {
      return (
        <div className="notification is-danger">
          Ном амжилттай устгагдлаа...
        </div>
      );
    }
    return (
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
                      title="works Settings"
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
                <div className="image">
                  <img
                    src={`https://novelistgroup.com/upload/${this.state.photo}`}
                    alt="card Images"
                  />
                </div>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                  className="button-group mt--20 absolute-center"
                >
                  <Link
                    className="btn-default btn-large btn-border"
                    to="#"
                    onClick={this.handleDelete}
                  >
                    Ажлын зарыг Устгах
                  </Link>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                  className="button-group mt--20 absolute-center"
                >
                  <Link
                    className="btn-default btn-large btn-border"
                    to="#"
                    onClick={this.handleSave}
                  >
                    Ажлын зарыг Хадгалах
                  </Link>
                </ScrollAnimation>
              </Col>
              <Col>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын компани нэр</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="content"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын зарын email</Form.Label>
                    <Form.Control
                      name="email"
                      placeholder="email"
                      type="text"
                      value={this.state.email}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын зарын дугаар</Form.Label>
                    <Form.Control
                      name="phoneNumber"
                      placeholder="утасны дугаар"
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work1 </Form.Label>
                    <Form.Control
                      name="work1"
                      placeholder="work1"
                      type="text"
                      value={this.state.work1req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work2</Form.Label>
                    <Form.Control
                      name="work2"
                      placeholder="work2"
                      type="text"
                      value={this.state.work2req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work3</Form.Label>
                    <Form.Control
                      name="work3"
                      placeholder="work3"
                      type="text"
                      value={this.state.work3req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work4</Form.Label>
                    <Form.Control
                      name="work4"
                      placeholder="work4"
                      type="text"
                      value={this.state.work4req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work5</Form.Label>
                    <Form.Control
                      name="work5"
                      placeholder="work5"
                      type="text"
                      value={this.state.work5req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work6</Form.Label>
                    <Form.Control
                      name="work6"
                      placeholder="work6"
                      type="text"
                      value={this.state.work6req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work7</Form.Label>
                    <Form.Control
                      name="work7"
                      placeholder="work7"
                      type="text"
                      value={this.state.work7req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work8</Form.Label>
                    <Form.Control
                      name="work8"
                      placeholder="work8"
                      type="text"
                      value={this.state.work8req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work9</Form.Label>
                    <Form.Control
                      name="work9"
                      placeholder="work9"
                      type="text"
                      value={this.state.work9req}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын work9</Form.Label>
                    <Form.Control
                      name="work9"
                      placeholder="work9"
                      type="text"
                      value={this.state.workLink}
                      onChange={this.handleType}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    );
  }
}
