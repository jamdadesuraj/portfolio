import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
import web from "../img/web.png";
import react from "../img/react.png";
import mern from "../img/mern.png";
const Services = () => {
  return (
    <>
      <section className="services_section">
        <div className="container">
          <div className="title">
            <h2>My services</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-12">
              <div class="wrapper">
                <div class="card text-center">
                  <div class="image">
                    {" "}
                    <img src={web} alt="services-img" width="300" />{" "}
                  </div>
                  <div class="about-product ">
                    <h3>Web Design </h3>

                    <p>
                      Web designing is the creation of websites and pages to
                      reflect a company’s brand and information and ensure a
                      user-friendly experience.
                    </p>
                    <a
                      href="https://jamdadesuraj.github.io/fashions/"
                      target="_blank"
                    >
                      <button class="btn btn-success buy-now">Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-12">
              <div class="wrapper">
                <div class="card text-center">
                  <div class="image">
                    {" "}
                    <img src={react} alt="services-img" width="300" />{" "}
                  </div>
                  <div class="about-product text-center">
                    <h3>React JS Developer</h3>
                    <p>
                      React is a free and open-source front-end JavaScript
                      library for building user interfaces based on UI
                      components.
                    </p>
                    <a
                      href="https://jamdadesuraj.github.io/food-application/"
                      target="_blank"
                    >
                      {" "}
                      <button class="btn btn-success buy-now">Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-12">
              <div class="wrapper">
                <div class="card text-center">
                  <div class="image">
                    {" "}
                    <img src={mern} alt="services-img" width="300" />{" "}
                  </div>
                  <div class="about-product text-center">
                    <h3>MERN Developer</h3>
                    <p>
                      MERN stack is a web development framework. It consists of
                      MongoDB, ExpressJS, ReactJS, and NodeJS as its working
                      components.
                    </p>
                    <a
                      href="https://crickstox-project.herokuapp.com/"
                      target="_blank"
                    >
                      {" "}
                      <button class="btn btn-success buy-now">Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
