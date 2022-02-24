import React from "react";
import "./about.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import about from "../img/about.jpg";

const About = () => {
  return (
    <>
      <section className="container about_section">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <div className="about_left_data">
              <img src={about} alt="about-img" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12">
            <div className="about_riht_data">
              <p>
                Full stack web and mobile developer with background knowledge of
                MERN stacks with redux, along with a knack of building
                applications with utmost efficiency. Strong professional with a
                Web Developer.
              </p>
              <h2>
                <Typical
                  steps={[
                    "Here are a Few",
                    1000,
                    "Here are a Few  Highlights:",
                    500,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h2>
              <ul>
                <li>Full Stack web and mobile development</li>
                <li>Interactive Front End as per the design</li>
                <li>React JS</li>
                <li>Redux for State Mnanagement</li>
                <li>Building REST API</li>
                <li>Managing database</li>
              </ul>
              <Link to="/contact">
                <button type="button" class="btn btn-dark">
                  Hire Me
                </button>
              </Link>

              <a
                href="./img/suraj_jamdade_full_stack_web_developer.pdf"
                class="button"
                download
              >
                <button type="button" class="btn btn-danger">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
