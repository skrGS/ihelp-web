import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return <p className="success-message">Урьдчилсан захиалга илгээгдлээ</p>;
};

const ContactData = ({ formStyle }) => {
  const [result, showresult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5avwnqw",
        "template_46jdqkt",
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
                  Байгууллагын урьдчилсан <strong>захиалга</strong>
                </h3>
                <p
                  className="description b1 bottom-50"
                  style={{ color: "white" }}
                >
                  Жич: Бүх захиалга урамшуулалтай
                </p>
                <form
                  className={`${formStyle}`}
                  action=""
                  onSubmit={sendEmail}
                  ref={form}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Компанийн нэр"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="И-мэйл хаяг "
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="Утасны дугаар"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Ажилчдын тоо"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Танай компанид хэрэгтэй байгаа хүний нөөцийн үйлчилгээний талаар бичнэ үү"
                    ></textarea>
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
            <div className="thumbnail">
              <img
                src="./images/contact/hrcontact.png"
                alt="hrcontact"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
