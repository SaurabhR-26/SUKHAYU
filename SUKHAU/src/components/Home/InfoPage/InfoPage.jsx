import React from "react";
import "./InfoPage.css";
import { FaClock, FaHeadset, FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const InfoPage = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Us?</h3>
              <p>
                Choose <b className="text-black">" SUKHAYU "</b> for a
                healthcare experience that transcends ordinary. Our commitment
                goes beyond expertise; it's rooted in empathy, personalized
                care, and a dedication to your well-being. Trust us to not just
                treat your condition but to understand and support you on your
                path to health. Your journey to wellness begins with a choice,
                and we're here to make that choice remarkable.
              </p>
              <div className="text-center">
                <Link href="/" className="more-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHouseUser className="icon" />
                    <h4>Appointment Booking</h4>
                    <small className="text-secondary">24 Hours Service</small>
                    <p></p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHeadset className="icon" />
                    <h4>Emergency Service</h4>
                    <h6 className="text-secondary">+88 01751 040425</h6>
                    <p>
                      We have provided live location feature so that in
                      Emergency your location can be used
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaClock className="icon" />
                    <h4>Working Hours</h4>
                    <small className="text-secondary">Timing schedule</small>
                    <ul className="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Sun - Wed : </p> <p>8:00 - 17: 00</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Thus - Fri : </p> <p>9:00 - 17: 00</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Sat - Sun : </p> <p>10:00 - 17: 00</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;