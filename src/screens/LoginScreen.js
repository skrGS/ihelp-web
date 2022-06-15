import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { Input } from "reactstrap";
import axios from "../axios";

const LoginScreen = () => {
  let history = useHistory();
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });
  const changePhone = (e) => {
    const newPhone = e.target.value;
    setForm((formBefore) => ({
      phone: newPhone,
      password: formBefore.password,
    }));
  };
  const changePassword = (e) => {
    const newPassword = e.target.value;
    setForm((formBefore) => ({
      phone: formBefore.phone,
      password: newPassword,
    }));
  };

  const handleClick = () => {
    const data = {
      phone: form.phone,
      password: form.password,
    };

    axios.post("users/login", data).then((result) => {
      console.log(result);
      const token = result.data.token;
      const userId = result.data.user._id;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      history.push("/admin");
    });
  };
  return (
    <div
      className="slider-area slider-style-2 variation-3 height-850 bg_image bg_image_fixed theme-shape"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg1.png)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Нэвтрэх</h1>
            <h3>И-мэйл хаяг</h3>
            <div className="inner text-left">
              <Input
                placeholder="Утасны дугаараа хаягаа оруулна уу"
                onChange={changePhone}
                name="phone"
                type="phone"
              />
            </div>
            <h3>Нууц үг</h3>
            <div className="inner text-left">
              <Input
                type="password"
                name="password"
                placeholder="Нууц үгээ оруулна уу."
                onChange={changePassword}
              />
            </div>

            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
              className="button-group mt--20"
            >
              <Link
                className="btn-default btn-border btn-icon"
                to="#"
                onClick={handleClick}
              >
                Нэвтрэх
                <i className="icon">
                  <FiArrowRight />
                </i>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
