import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <footer>
          <span>
            Created By
            <Link to="/" className="footer_link">
              Suraj Jamdade
            </Link>{" "}
            | <span class="far fa-copyright"></span> 2022 All rights reserved.
          </span>
        </footer>
      </section>
    </>
  );
};

export default Footer;
