import React from "react";
import { NavLink, Link } from "react-router-dom";
import Typical from "react-typical";

const Home = () => {
  return (
    <>
      <section className="home_section">
        <section className="home container" id="home">
          <div className="row">
            <div className="col-md-8 col-lg-6 col-12">
              <div className="home_name">
                <div className="home_name_icons">
                  <h5>
                    <a
                      href="https://www.linkedin.com/in/suraj-jamdade-5ba21a190/"
                      target="_blank"
                    >
                      <a>
                        <span>
                          <i class="fab fa-linkedin-in"></i>
                        </span>
                      </a>
                    </a>

                    <a href="https://twitter.com/home" target="_blank">
                      <span>
                        <i class="fab fa-twitter"></i>
                      </span>
                    </a>

                    <a href="https://www.instagram.com" target="_blank">
                      <span>
                        <i class="fab fa-instagram"></i>
                      </span>
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <span>
                        <i class="fab fa-facebook"></i>
                      </span>
                    </a>
                  </h5>
                </div>
                <h4>
                  Hello, I'M <span className="home_my_name">Suraj</span>
                </h4>

                <Typical
                  className="typical"
                  steps={[
                    "UI/UX Developer 🖥️",
                    2000,
                    "React Js Developer 💠",
                    500,

                    "MERN Stack Developer ",
                    80,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
                <p>
                  Knack of building applications with front and back end
                  operations.
                </p>

                <a
                  href="./img/suraj_jamdade_full_stack_web_developer.pdf"
                  class="button"
                  download
                >
                  <button type="button" class="btn btn-outline-danger">
                    Get Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
