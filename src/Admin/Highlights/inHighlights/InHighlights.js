import React, { Component } from "react";
import SEO from "../../../common/SEO";
import Layout from "../../../common/AdminLayout";
import axios from "../../../axios";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Form, Row } from "react-bootstrap";
import Separator from "../../../components/separator/Separator";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

export default class InHighlight extends Component {
  state = {
    name: null,
    content: null,
    photo: null,
    highlightCat: null,
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
      .get("highlights/" + this.props.match.params.id)
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
        "highlights/" + this.props.match.params.id,
        {
          name: this.state.name,
          price: this.state.price,
          content: this.state.content,
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
        this.props.history.push("/admInHighlights");
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
      .delete("highlights/" + this.props.match.params.id, { headers })
      .then((result) => {
        this.setState({
          deleted: true,
        });
        this.props.history.push("/adminHighlights");
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
                      title="highlights Settings"
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
              </Col>
              <Col>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="content"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleType}
                    />
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Highlight Нэр</Form.Label>
                      <Form.Control
                        name="name"
                        placeholder="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleType}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Highlight content</Form.Label>
                      <Form.Control
                        name="content"
                        placeholder="content"
                        type="text"
                        value={this.state.content}
                        onChange={this.handleType}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Highlight category</Form.Label>
                      <Form.Control
                        name="highlightCat"
                        placeholder="highlightCat"
                        type="text"
                        value={this.state.highlightCat}
                        onChange={this.handleType}
                      />
                    </Form.Group>
                  </Form.Group>
                </Form>
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
                    highlights Устгах
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
                    highlights Хадгалах
                  </Link>
                </ScrollAnimation>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    );
  }
}
