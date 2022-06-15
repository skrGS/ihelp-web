import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiCheck } from "react-icons/fi";
import axios from "../../axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default class WorkItemDetail extends Component {
  state = {
    name: null,
    photo: null,
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
  render() {
    return (
      <main>
        <Header />
        <div className="rwt-about-area about-style-2 rn-section-gap">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src={`https://novelistgroup.com/upload/${this.state.photo}`}
                    alt="Corporate Image1"
                  />
                </div>
              </div>

              <div className="col-lg-7 mt_md--30 mt_sm--30">
                <div className="content">
                  <div className="section-title">
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      animateOut="fadeInOut"
                      animateOnce={true}
                    >
                      <h2 className="title mt--10">{this.state.name}</h2>
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      animateOut="fadeInOut"
                      animateOnce={true}
                    >
                      <div className="single-list-wrapper">
                        <div className="single-list">
                          <label>Ажлын төрөл:</label>
                          <span>{this.state.name}</span>
                        </div>
                      </div>

                      <ul className="list-icon">
                        <h6>Ажлын байранд тавигдах шаардлага:</h6>

                        {this.state.work1req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work1req}
                          </li>
                        )}
                        {this.state.work2req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work2req}
                          </li>
                        )}
                        {this.state.work3req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work3req}
                          </li>
                        )}
                        {this.state.work4req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work4req}
                          </li>
                        )}
                        {this.state.work5req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work5req}
                          </li>
                        )}
                        {this.state.work6req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work6req}
                          </li>
                        )}
                        {this.state.work7req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work7req}
                          </li>
                        )}
                        {this.state.work8req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work8req}
                          </li>
                        )}

                        {this.state.work9req === "0" ? null : (
                          <li>
                            <span
                              className="icon"
                              style={{
                                backgroundColor: "#059dff",
                                color: "white",
                              }}
                            >
                              <FiCheck />
                            </span>
                            {this.state.work9req}
                          </li>
                        )}
                      </ul>
                    </ScrollAnimation>
                    <div className="view-btn mt--50">
                      <a
                        className="btn-default btn-large round"
                        href={`${this.state.workLink}`}
                      >
                        Анкет татах
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    );
  }
}
