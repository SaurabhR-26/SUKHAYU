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
            Empathy is our prescription, expertise is our remedy.
            <br /> At Sukhayu, we believe in healing not just the ailment, but
            the patient. Because in our care,
            <br /> you're not just a case you're a journey towards well-being
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