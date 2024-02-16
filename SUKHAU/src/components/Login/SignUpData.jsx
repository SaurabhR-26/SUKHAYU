import React, { Component, useState } from "react";
import "./SignUpData.css";

export default function SignUpData() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Patient");
  const [secretKey, setSecretKey] = useState("");
  const [post, setpost] = useState("Patient");

  const handleSubmit = (e) => {
    if (userType == "Doctor" && secretKey != "") {
      e.preventDefault();
      alert("Invalid Doctor Details");
    } else {
      e.preventDefault();
    }
  };

  const [image, setImage] = useState([]);
  const [category, setCategory] = useState("electronics");
  console.log(image);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3 onClick>Hello, {userType}</h3>

          <div className="radio-style">
            <p className="text">Register As</p>
            <input
              type="radio"
              name="UserType"
              value={userType}
              checked={userType === "Patient" ? true : false}
              onChange={(e) => setUserType("Patient")}
            />
            Patient
            <input
              type="radio"
              name="UserType"
              value={userType}
              checked={userType === "Doctor" ? true : false}
              onChange={(e) => setUserType("Doctor")}
            />
            Doctor
          </div>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {userType == "Doctor" ? (
            <div className="mb-3">
              <div className="mb-3">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              {/* <div className="mb-3">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div> */}
              <div>
                <p className="text-semibold">Professional Photo : </p>
                {Array.from(image).map((item) => {
                  return (
                    <span>
                      <img
                        style={{ padding: "10px" }}
                        width={150}
                        height={100}
                        src={item ? URL.createObjectURL(item) : null}
                      />
                    </span>
                  );
                })}

                <input
                  onChange={(e) => {
                    setImage(e.target.files);
                  }}
                  multiple
                  type="file"
                />
              </div>
              <div className="mb-3 mt-3">
                <div className="radio-style">
                  Gender :
                  <input
                    type="radio"
                    name="UserType"
                    value="Male"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  Male
                  <input
                    type="radio"
                    name="UserType"
                    value="Female"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  Female
                  <input
                    type="radio"
                    name="UserType"
                    value="Other"
                    className="p-5"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  Other
                </div>
              </div>
              <div className="mb-3">
                <label>Biography</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Biography"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Clinic Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Clinic Name"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Clinic Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Clinic Address"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div>
                <p className="text-semibold">Clinic Photo : </p>
                {Array.from(image).map((item) => {
                  return (
                    <span>
                      <img
                        style={{ padding: "10px" }}
                        width={150}
                        height={100}
                        src={item ? URL.createObjectURL(item) : null}
                      />
                    </span>
                  );
                })}

                <input
                  onChange={(e) => {
                    setImage(e.target.files);
                  }}
                  multiple
                  type="file"
                />
              </div>
              <div className="mb-3">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="city"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Services</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Services"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label> Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" specialization"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Degree</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Degree"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>College</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="College"
                  onChange={(e) => setSecretKey(e.target.value)}
                />{" "}
              </div>
              <div className="mb-3">
                <label>CompletionYear</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="completionYear"
                  onChange={(e) => setSecretKey(e.target.value)}
                />{" "}
              </div>
              <div className="mb-3">
                <label> Experience</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Experience"
                  onChange={(e) => setSecretKey(e.target.value)}
                />{" "}
              </div>
              <div className="mb-3">
                <label> Designation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  onChange={(e) => setSecretKey(e.target.value)}
                />{" "}
              </div>
              <div className="mb-3">
                <label> Award</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Award"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label> AwardYear</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" AwardYear"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label> Registration</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Registration"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>{" "}
              <div className="mb-3">
                <label> Year</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Year"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label> Previous Experienced College Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" "
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label> Experience Start Date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" "
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label> Experience End Date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" "
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
            </div>
          ) : null}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
