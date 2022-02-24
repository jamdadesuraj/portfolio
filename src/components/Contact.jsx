import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {
  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kn3kutz",
        "template_vh334jj",
        e.target,
        "user_2dUX4L5TfSrX0X1dMX1Ks"
      )
      .then((res) => {
        swal("Data Send!", "You clicked the button!", "success");
        console.log(res);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <section className="contact_section">
        <div className="container">
          <div className="title">
            <h2>Contact me</h2>
          </div>

          <div class="contact_container">
            <div class="contact_card">
              <div class="form">
                <div class="left-side">
                  {" "}
                  <span class="line1"></span> <span class="line2"></span>{" "}
                  <span class="line3"></span>
                  <div class="contact-us">
                    <p>Contact Us</p> <span></span>
                  </div>
                  <div class="social">
                    {" "}
                    <i class="fa fa-facebook-f"></i>{" "}
                    <i class="fa fa-twitter"></i>{" "}
                    <i class="fa fa-instagram"></i>{" "}
                    <i class="fa fa-dribbble"></i>{" "}
                  </div>
                </div>
                <div class="right-side">
                  <div class="top-div">
                    <h2>Get in touch !</h2>
                  </div>
                  <div class="stats">
                    <div class="stats1">
                      {" "}
                      <i class="fa fa-map-marker"></i> <span>Pune</span>{" "}
                    </div>
                    <div class="stats2">
                      {" "}
                      <i class="fa fa-phone"></i> <span>+91 9284599055</span>{" "}
                    </div>
                    <div class="stats3">
                      {" "}
                      <i class="fa fa-envelope"></i>{" "}
                      <span>surajaero555@gmail.com</span>{" "}
                    </div>
                  </div>
                  <form onSubmit={sendMail}>
                    <div class="card-content">
                      {" "}
                      <span>
                        <div class="input-text">
                          <input type="text" required="required" name="name" />{" "}
                          <small>Name</small>{" "}
                        </div>

                        <div class="input-text">
                          <input type="text" required="required" name="email" />{" "}
                          <small>E-mail</small>{" "}
                        </div>

                        <div class="textarea">
                          <textarea
                            required="required"
                            name="message"
                          ></textarea>{" "}
                          <small>Message</small>{" "}
                        </div>
                      </span>{" "}
                    </div>

                    <div class="buttons">
                      {" "}
                      <button type="submit" value="send">
                        SEND
                      </button>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
