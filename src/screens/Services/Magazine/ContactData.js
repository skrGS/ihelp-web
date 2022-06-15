import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Таны илгээсэн мэйл амжиллтай явлаа. Бид тун удахгүй холбогдох болно.
    </p>
  );
};

const ContactData = ({ formStyle }) => {
  const [result, showresult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5avwnqw",
        "template_jp2oj42",
        form.current,
        "user_1CHFMfhYae6Ak6Vb4nSby"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };
  setTimeout(() => {
    showresult(false);
  }, 5000);
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">
                  Бидэнтэй хамтраж ажиллахыг хүсвэл <br />{" "}
                  <strong>И-мэйл илгээнэ үү</strong>
                </h3>
                <form
                  className={`${formStyle}`}
                  action=""
                  onSubmit={sendEmail}
                  ref={form}
                >
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Өөрийн нэр" />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Холбоо барих и-мэйл хаяг "
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="Холбоо барих утасны дугаар"
                    />
                  </div>

                  <div className="form-group">
                    <input type="text" name="subject" placeholder="Гарчиг" />
                  </div>

                  <div className="form-group">
                    <textarea name="message" placeholder="Тайлбар"></textarea>
                  </div>

                  <div className="form-group">
                    <button
                      className="btn-default btn-large"
                      type="submit"
                      value="Send"
                    >
                      Илгээх
                    </button>
                  </div>

                  <div className="form-group">{result ? <Result /> : null}</div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="./images/contact/magcontact.png"
              alt="magazineContact"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
