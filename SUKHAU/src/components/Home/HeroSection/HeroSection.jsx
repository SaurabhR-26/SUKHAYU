import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" class="d-flex align-items-center">
      <div className="container">
        <small>Best Care For Your Good Health</small>
        <div>
          {/* <h1>Your Most Trusted <br />Health Partner</h1> */}
          <h2>Your Health</h2>
          <h1>IS OUR PRIORITY</h1>
          <small>
            A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
            quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
          </small>
        </div>
        <Link to={"/doctors"} className="btn-get-started scrollto">
          Get Started
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
