import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <>
      <section className="skill_section">
        <div className="container">
          <div className="title">
            <h2>My skills</h2>
          </div>
          {/* ------------------------------------------------left side------------------------------------------------------------------------ */}

          <div className="row">
            <div className="col-md-6 col-lg-6 col-12">
              <div className="skill_left_data">
                <h3>My creative skills & experiences.</h3>
                <h4>Lean Quality Solutions(I)Pvt.Ltd.</h4>
                <h5>React Js Developer</h5>
                <p>
                  Currently working as MERN stack web and mobile developer.
                  <br />
                  <br />
                  - Developed an ecommerce website for client with the dashboard
                  for managing the products, managing reviews, users, payment
                  etc. <br />
                  - Integrated the web app with backend services to create new
                  user onboarding application with dynamic form content.
                  <br />- I stretch my mental capacity to develope UI as per the
                  given designs.
                </p>
              </div>
            </div>
            {/* ------------------------------------------------------right side------------------------------------------------------------------ */}

            <div className="col-md-6 col-lg-6 col-12">
              <div className="skill_right_data">
                <h3>HTML</h3>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
                <h3>CSS </h3>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>

                <h3>Java Script </h3>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>

                <h3>Mongo DB </h3>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
                <h3>Express JS </h3>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    65%
                  </div>
                </div>
                <h3>React JS </h3>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
                <h3>Node Js </h3>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
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

export default Skill;
