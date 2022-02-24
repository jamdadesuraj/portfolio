import React from "react";
import "./team.css";
import php from "../img/php.jpg";
import web from "../img/web.jpg";
import react from "../img/React1.png";
const Teams = () => {
  return (
    <>
      <section className="team_section">
        <div className="container">
          <div className="title">
            <h2>My teams</h2>
          </div>
          <div class="team_container">
            <div class="row">
              <div class="col-lg-4">
                <div class="team_card">
                  <div class="face front-face">
                    <img src={php} alt="" class="profile" />
                    <div class="pt-3 text-uppercase name"> Akshay Sadamate</div>
                    <div class="designation">PHP Developer</div>
                  </div>
                  <div class="face back-face">
                    {" "}
                    <span class="fas fa-quote-left"></span>
                    <div class="testimonial">
                      {" "}
                      This guy incredibly awesome i hired him and when he
                      delivered , i honestly feel i love with the project. he is
                      indeed a great guy.{" "}
                    </div>{" "}
                    <span class="fas fa-quote-right"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="team_card">
                  <div class="face front-face">
                    <img src={web} alt="" class="profile" />
                    <div class="pt-3 text-uppercase name"> Sidhu Kokate </div>
                    <div class="designation">Web Developer</div>
                  </div>
                  <div class="face back-face">
                    {" "}
                    <span class="fas fa-quote-left"></span>
                    <div class="testimonial">
                      {" "}
                      It was nice this guy for my static website project.he
                      delivered even more than i can imagine .I recommend him
                      for you.{" "}
                    </div>{" "}
                    <span class="fas fa-quote-right"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="team_card">
                  <div class="face front-face">
                    <img src={react} alt="" class="profile" />
                    <div class="pt-3 text-uppercase name"> Mayur Pore </div>
                    <div class="designation">React JS</div>
                  </div>
                  <div class="face back-face">
                    {" "}
                    <span class="fas fa-quote-left"></span>
                    <div class="testimonial">
                      {" "}
                      It was nice this guy for my e-commerce project.he
                      delivered even more than i can imagine .I recommend him
                      for you.{" "}
                    </div>{" "}
                    <span class="fas fa-quote-right"></span>
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

export default Teams;
